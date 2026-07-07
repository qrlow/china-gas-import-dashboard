import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const JODI_DATA_PATH = path.join(ROOT, "src", "data.js");
const CARBON_CHINA_PATH = path.join(ROOT, ".cache", "carbon_china.csv");
const OUTPUT_PATH = path.join(ROOT, "src", "sector-data.js");

const CARBON_SECTOR_MAP = {
  Power: "power",
  Industry: "industrial",
  Residential: "buildings",
  "Ground Transport": "transport",
};

const SECTOR_ORDER = ["power", "industrial", "buildings", "transport"];

const SECTOR_DEFINITIONS = [
  {
    key: "power",
    label: "Power / residual",
    shortLabel: "Power / residual",
    color: "#3268a8",
    method: "Residual after source-visible IEA final-use sectors are converted to bcm and compared with JODI 2023 apparent demand; monthly shape from Carbon Monitor China power emissions.",
  },
  {
    key: "industrial",
    label: "Industrial / chemical",
    shortLabel: "Industrial",
    color: "#917338",
    method: "IEA gas final consumption in industry plus non-energy use; monthly shape from Carbon Monitor China industry emissions.",
  },
  {
    key: "buildings",
    label: "Buildings / city gas",
    shortLabel: "Buildings",
    color: "#16837a",
    method: "IEA residential plus commercial/public services gas final consumption; monthly shape from Carbon Monitor China residential emissions as a heating/cooking proxy.",
  },
  {
    key: "transport",
    label: "Transport",
    shortLabel: "Transport",
    color: "#b14b4b",
    method: "IEA transport gas final consumption; monthly shape from Carbon Monitor China ground-transport emissions.",
  },
];

const IEA_2023_GAS_BALANCE = {
  totalUseBasis: "Source-visible 2023 China gas anchor. Final-use sectors come from the public IEA China page; the residual is calculated against JODI 2023 apparent demand.",
  finalConsumptionSource: "IEA China natural gas country page, Final consumption of gas by sector, China, 2023.",
  grossHeatValueTJPerBcm: 38930,
  grossHeatValueSource: "IEA-reported China higher heating value of 38.93 MJ per standard cubic metre.",
  residualSource: "JODI 2023 apparent demand minus source-visible IEA final-use sectors converted to bcm.",
  finalConsumptionValuesTJ: {
    industry: 6232455,
    transport: 1276255,
    residential: 2486965,
    commercialPublicServices: 657877,
    agricultureForestry: 9440,
    nonEnergyUse: 589056,
  },
};

const SECTOR_MAPPINGS = [
  {
    dashboardBucket: "Power / residual",
    ieaAnchorInput: "Residual: JODI 2023 apparent demand minus Industrial / chemical, Buildings / city gas, and Transport.",
    carbonMonitorProxy: "Power",
    note: "Not an exact IEA category. It includes power plus anything left in apparent demand after visible IEA final-use buckets are deducted.",
  },
  {
    dashboardBucket: "Industrial / chemical",
    ieaAnchorInput: "Industry + Non-energy use",
    carbonMonitorProxy: "Industry",
    note: "Non-energy use is included here because the dashboard has one broad industrial/chemical bucket.",
  },
  {
    dashboardBucket: "Buildings / city gas",
    ieaAnchorInput: "Residential + Commercial and public services",
    carbonMonitorProxy: "Residential",
    note: "Carbon Monitor has no separate commercial/public-services gas proxy, so residential shapes the whole buildings bucket.",
  },
  {
    dashboardBucket: "Transport",
    ieaAnchorInput: "Transport",
    carbonMonitorProxy: "Ground Transport",
    note: "Carbon Monitor Aviation is not used in the gas dashboard.",
  },
];

function readJodiData() {
  const text = fs.readFileSync(JODI_DATA_PATH, "utf8").trim();
  const json = text
    .replace(/^window\.CHINA_GAS_DATA\s*=\s*/, "")
    .replace(/;\s*$/, "");
  return JSON.parse(json);
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }
  values.push(value);
  return values;
}

function readCarbonMonitorChina() {
  if (!fs.existsSync(CARBON_CHINA_PATH)) {
    throw new Error(`Missing ${CARBON_CHINA_PATH}. Download Carbon Monitor China CSV into .cache/carbon_china.csv first.`);
  }

  const text = fs.readFileSync(CARBON_CHINA_PATH, "utf8").trim();
  const lines = text.split(/\r?\n/);
  const headers = parseCsvLine(lines[0]).map((header) => header.trim());
  const column = Object.fromEntries(headers.map((header, index) => [header, index]));
  const monthly = new Map();

  for (const line of lines.slice(1)) {
    if (!line) continue;
    const row = parseCsvLine(line);
    const sector = CARBON_SECTOR_MAP[row[column.sector]];
    if (!sector) continue;
    const [day, month, year] = row[column.date].split("/");
    if (!day || !month || !year) continue;
    const period = `${year}-${month.padStart(2, "0")}`;
    const value = Number(row[column.value]);
    if (!Number.isFinite(value)) continue;
    const key = `${period}|${sector}`;
    monthly.set(key, (monthly.get(key) ?? 0) + value);
  }

  const periods = [...new Set([...monthly.keys()].map((key) => key.split("|")[0]))].sort();
  return { monthly, periods };
}

function round(value, digits = 3) {
  if (value == null || Number.isNaN(value)) return null;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function calendarYearDemand(jodi, year) {
  return jodi.actuals
    .filter((row) => row.period.startsWith(`${year}-`))
    .reduce((acc, row) => acc + (row.calculatedDemand ?? 0), 0);
}

function anchorInputs(jodi) {
  const b = IEA_2023_GAS_BALANCE;
  const final = b.finalConsumptionValuesTJ;
  const jodiApparentDemandBcm = calendarYearDemand(jodi, 2023);
  const toBcm = (valueTJ) => valueTJ / b.grossHeatValueTJPerBcm;
  const industrialBcm = toBcm(final.industry + final.nonEnergyUse);
  const buildingsBcm = toBcm(final.residential + final.commercialPublicServices);
  const transportBcm = toBcm(final.transport);
  const agricultureBcm = toBcm(final.agricultureForestry);
  const residualBcm = Math.max(0, jodiApparentDemandBcm - industrialBcm - buildingsBcm - transportBcm);
  const rawShares = {
    power: residualBcm / jodiApparentDemandBcm,
    industrial: industrialBcm / jodiApparentDemandBcm,
    buildings: buildingsBcm / jodiApparentDemandBcm,
    transport: transportBcm / jodiApparentDemandBcm,
  };
  return {
    rawShares,
    jodiApparentDemandBcm,
    industrialBcm,
    buildingsBcm,
    transportBcm,
    agricultureBcm,
    residualBcm,
  };
}

function rawAnchorShares(jodi) {
  return anchorInputs(jodi).rawShares;
}

function normalizedAnchorShares(jodi) {
  const raw = rawAnchorShares(jodi);
  const total = SECTOR_ORDER.reduce((acc, key) => acc + raw[key], 0);
  return Object.fromEntries(SECTOR_ORDER.map((key) => [key, raw[key] / total]));
}

function monthNumber(period) {
  return Number(period.slice(5, 7));
}

function yearNumber(period) {
  return Number(period.slice(0, 4));
}

function periodIndex(period) {
  return yearNumber(period) * 12 + monthNumber(period);
}

function buildProxyIndexes(carbon) {
  const bySector = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, new Map()]));
  for (const period of carbon.periods) {
    for (const sector of SECTOR_ORDER) {
      const value = carbon.monthly.get(`${period}|${sector}`);
      if (value != null) bySector[sector].set(period, value);
    }
  }

  const climatology = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, new Map()]));
  for (const sector of SECTOR_ORDER) {
    const fullYears = [...new Set([...bySector[sector].keys()].map((period) => period.slice(0, 4)))]
      .filter((year) => [...bySector[sector].keys()].filter((period) => period.startsWith(`${year}-`)).length === 12);
    const recentFullYears = fullYears.filter((year) => Number(year) >= 2021);
    const years = recentFullYears.length ? recentFullYears : fullYears;

    for (let month = 1; month <= 12; month += 1) {
      const mm = String(month).padStart(2, "0");
      const values = years
        .map((year) => bySector[sector].get(`${year}-${mm}`))
        .filter((value) => Number.isFinite(value));
      const avg = values.reduce((acc, value) => acc + value, 0) / values.length;
      climatology[sector].set(month, avg);
    }

    const mean = [...climatology[sector].values()].reduce((acc, value) => acc + value, 0) / 12;
    for (const [month, value] of climatology[sector]) {
      climatology[sector].set(month, value / mean);
    }
  }

  const proxyIndexes = new Map();
  for (const period of carbon.periods) {
    const point = {};
    for (const sector of SECTOR_ORDER) {
      const current = bySector[sector].get(period);
      if (!Number.isFinite(current)) {
        point[sector] = climatology[sector].get(monthNumber(period)) ?? 1;
        continue;
      }
      const previous = [...bySector[sector].entries()]
        .filter(([candidate]) => periodIndex(candidate) <= periodIndex(period) && periodIndex(candidate) > periodIndex(period) - 12)
        .map(([, value]) => value)
        .filter((value) => Number.isFinite(value));
      if (previous.length >= 10) {
        const mean = previous.reduce((acc, value) => acc + value, 0) / previous.length;
        point[sector] = current / mean;
      } else {
        point[sector] = climatology[sector].get(monthNumber(period)) ?? 1;
      }
    }
    proxyIndexes.set(period, point);
  }

  const proxyMonthly = carbon.periods.map((period) => {
    const raw = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, round(carbon.monthly.get(`${period}|${sector}`), 3)]));
    const index = proxyIndexes.get(period);
    return {
      period,
      raw,
      index: Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, round(index[sector], 3)])),
    };
  });

  return { proxyIndexes, proxyMonthly };
}

function gasYearLabel(period) {
  const year = yearNumber(period);
  const month = monthNumber(period);
  const start = month >= 10 ? year : year - 1;
  return `${start}/${String(start + 1).slice(2)}`;
}

function gasYearMonth(period) {
  const month = monthNumber(period);
  return month >= 10 ? month - 9 : month + 3;
}

function buildMonthlyModel(jodi, proxyIndexes) {
  const anchors = normalizedAnchorShares(jodi);
  return jodi.actuals
    .filter((row) => row.period >= "2019-01" && row.calculatedDemand != null && proxyIndexes.has(row.period))
    .map((row) => {
      const proxy = proxyIndexes.get(row.period);
      const weighted = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, anchors[sector] * proxy[sector]]));
      const weightedTotal = SECTOR_ORDER.reduce((acc, sector) => acc + weighted[sector], 0);
      const shares = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, weighted[sector] / weightedTotal]));
      const sectors = Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, row.calculatedDemand * shares[sector]]));
      return {
        period: row.period,
        gasYear: gasYearLabel(row.period),
        gasYearMonth: gasYearMonth(row.period),
        monthLabel: new Date(`${row.period}-01T00:00:00Z`).toLocaleString("en", { month: "short", timeZone: "UTC" }),
        totalDemand: round(row.calculatedDemand, 3),
        sectors: Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, round(sectors[sector], 3)])),
        shares: Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, round(shares[sector], 4)])),
        proxyIndex: Object.fromEntries(SECTOR_ORDER.map((sector) => [sector, round(proxy[sector], 3)])),
        source: {
          controlTotal: "JODI TOTDEMC apparent demand; China stock change is not separated",
          monthlyShape: "Carbon Monitor China sector proxy indexes",
          annualAnchor: "Source-visible IEA final-use rows plus JODI 2023 residual",
        },
      };
    });
}

function buildOutput() {
  const jodi = readJodiData();
  const carbon = readCarbonMonitorChina();
  const { proxyIndexes, proxyMonthly } = buildProxyIndexes(carbon);
  const monthly = buildMonthlyModel(jodi, proxyIndexes);
  const gasYears = [...new Set(monthly.map((row) => row.gasYear))].sort();
  const latest = monthly.at(-1);
  const anchor = anchorInputs(jodi);
  const rawShares = rawAnchorShares(jodi);
  const normalizedShares = normalizedAnchorShares(jodi);
  const final = IEA_2023_GAS_BALANCE.finalConsumptionValuesTJ;
  const finalTotal = Object.values(final).reduce((acc, value) => acc + value, 0);
  const annualAnchors = SECTOR_ORDER.map((sector) => ({
    sector,
    rawShare: round(rawShares[sector], 4),
    normalizedShare: round(normalizedShares[sector], 4),
  }));
  const ieaFinalConsumptionRows = [
    { sector: "Industry", valueTJ: final.industry, dashboardBucket: "Industrial / chemical" },
    { sector: "Non-energy use", valueTJ: final.nonEnergyUse, dashboardBucket: "Industrial / chemical" },
    { sector: "Residential", valueTJ: final.residential, dashboardBucket: "Buildings / city gas" },
    { sector: "Commercial and public services", valueTJ: final.commercialPublicServices, dashboardBucket: "Buildings / city gas" },
    { sector: "Transport", valueTJ: final.transport, dashboardBucket: "Transport" },
    { sector: "Agriculture and forestry", valueTJ: final.agricultureForestry, dashboardBucket: "Outside modeled buckets" },
  ].map((row) => ({
    ...row,
    shareOfFinalConsumption: round(row.valueTJ / finalTotal, 4),
  }));
  const anchorCalculationRows = [
    { bucket: "Power / residual", valueBcm: anchor.residualBcm, share: rawShares.power, note: "Residual: JODI apparent demand minus visible IEA final-use buckets." },
    { bucket: "Industrial / chemical", valueBcm: anchor.industrialBcm, share: rawShares.industrial, note: "IEA industry plus non-energy use." },
    { bucket: "Buildings / city gas", valueBcm: anchor.buildingsBcm, share: rawShares.buildings, note: "IEA residential plus commercial/public services." },
    { bucket: "Transport", valueBcm: anchor.transportBcm, share: rawShares.transport, note: "IEA transport." },
  ].map((row) => ({
    ...row,
    valueBcm: round(row.valueBcm, 3),
    share: round(row.share, 4),
  }));

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      earliestModeledPeriod: monthly[0]?.period ?? null,
      latestModeledPeriod: latest?.period ?? null,
      currentGasYear: latest?.gasYear ?? jodi.meta.currentGasYear,
      units: "bcm unless otherwise stated",
      note: "Historical top-down allocation of JODI apparent demand. Because China stock change is not reported in this JODI extract, modeled sectors are not storage-adjusted end-use demand.",
      carbonMonitorPeriod: {
        earliest: carbon.periods[0],
        latest: carbon.periods.at(-1),
      },
    },
    gasYears,
    gasYearMonths: jodi.gasYearMonths,
    sectorDefinitions: SECTOR_DEFINITIONS,
    iea2023GasBalance: IEA_2023_GAS_BALANCE,
    sectorMappings: SECTOR_MAPPINGS,
    annualAnchors,
    ieaFinalConsumptionRows,
    anchorCalculation: {
      jodiApparentDemandBcm: round(anchor.jodiApparentDemandBcm, 3),
      grossHeatValueTJPerBcm: IEA_2023_GAS_BALANCE.grossHeatValueTJPerBcm,
      agricultureBcm: round(anchor.agricultureBcm, 3),
      rows: anchorCalculationRows,
    },
    monthly,
    proxyMonthly,
    methodology: [
      {
        title: "Control total",
        text: "The model scales the four buckets to JODI China TOTDEMC apparent demand because no free monthly China stock-change series is included. Since China stock change is reported as zero in this JODI extract, unobserved storage builds would make actual power, industrial, buildings, and transport end-use demand lower than TOTDEMC; storage withdrawals would make actual end-use demand higher. Storage is not separated in this dashboard.",
      },
      {
        title: "Annual sector anchor",
        text: "The annual anchor now uses only visible data. Industrial, buildings, and transport come from the public IEA China final-consumption table. Those TJ values are converted to bcm using 38.93 MJ per standard cubic metre. The power bucket is the residual against JODI 2023 apparent demand, so it should be read as power plus unallocated system and storage effects, not pure power generation.",
      },
      {
        title: "Monthly shape",
        text: "Carbon Monitor China daily provincial emissions are summed to national monthly sector totals. Each sector's monthly value is converted to an activity index against a trailing 12-month mean, with recent monthly climatology as the fallback for short history.",
      },
      {
        title: "Reconciliation",
        text: "For each month, anchor share times proxy index creates preliminary sector weights. Those weights are normalized, then multiplied by the JODI apparent-demand control total, not a storage-adjusted end-use total.",
      },
    ],
    sources: [
      {
        name: "JODI Gas World Database",
        url: "https://www.jodidata.org/gas/database/data-downloads.aspx",
        note: "Monthly China gas balance. The sector model uses JODI TOTDEMC as an apparent-demand control total because China stock change is reported as zero in this extract.",
      },
      {
        name: "Carbon Monitor China",
        url: "https://cn.carbonmonitor.org/",
        note: "Open daily provincial CO2 dataset. The model uses Power, Industry, Residential, and Ground Transport as monthly shape proxies.",
      },
      {
        name: "Carbon Monitor full dataset endpoint",
        url: "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=carbon_china",
        note: "Raw CSV download used locally to aggregate monthly sector proxy indexes. Raw data are not committed.",
      },
      {
        name: "IEA China natural gas country page",
        url: "https://www.iea.org/countries/china/natural-gas",
        note: "Public China country page. The model uses its 2023 final-consumption table by sector for industry, non-energy use, residential, commercial/public services, transport, and agriculture/forestry.",
      },
      {
        name: "IEA natural gas heat value for China",
        url: "https://en.wikipedia.org/wiki/Heat_of_combustion#Higher_heating_values_of_natural_gases_from_various_sources",
        note: "Visible reference for IEA-reported China higher heating value of 38.93 MJ per standard cubic metre, used to convert IEA TJ gross values to bcm.",
      },
      {
        name: "National Bureau of Statistics of China, 2023 Statistical Communique",
        url: "https://www.stats.gov.cn/sj/zxfb/202402/t20240228_1947915.html",
        note: "Chinese official cross-check for energy context including natural-gas production and power generation by source.",
      },
      {
        name: "Carbon Monitor methodology paper",
        url: "https://arxiv.org/abs/2006.07690",
        note: "Documents the near-real-time daily emissions framework and the activity-data approach used for power, industry, transport, and buildings.",
      },
    ],
  };
}

const output = buildOutput();
fs.writeFileSync(OUTPUT_PATH, `window.CHINA_GAS_SECTOR_DATA = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote ${OUTPUT_PATH}`);
console.log(`Modeled ${output.monthly.length} months, ${output.meta.earliestModeledPeriod} to ${output.meta.latestModeledPeriod}`);
