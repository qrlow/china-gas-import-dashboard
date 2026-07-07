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
    label: "Power",
    shortLabel: "Power",
    color: "#3268a8",
    method: "IEA gas-balance transformation use for electricity plus CHP; monthly shape from Carbon Monitor China power-sector emissions.",
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
    method: "IEA residential plus tertiary gas final consumption; monthly shape from Carbon Monitor China residential emissions as a heating/cooking proxy.",
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
  totalUseBasis: "IEA 2023 China natural-gas balance, normalized to the four dashboard sectors.",
  finalConsumptionSource: "IEA China natural gas country page, Final consumption of gas by sector, China, 2023.",
  energySectorShare: 0.243,
  finalConsumptionShare: 0.751,
  energySectorDetail: {
    electricity: 0.41,
    chp: 0.44,
  },
  finalConsumptionValuesTJ: {
    industry: 6232455,
    transport: 1276255,
    residential: 2486965,
    commercialPublicServices: 657877,
    agricultureForestry: 9440,
    nonEnergyUse: 589056,
  },
};

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

function rawAnchorShares() {
  const b = IEA_2023_GAS_BALANCE;
  const final = b.finalConsumptionValuesTJ;
  const finalTotal = Object.values(final).reduce((acc, value) => acc + value, 0);
  return {
    power: b.energySectorShare * (b.energySectorDetail.electricity + b.energySectorDetail.chp),
    industrial: b.finalConsumptionShare * ((final.industry + final.nonEnergyUse) / finalTotal),
    buildings: b.finalConsumptionShare * ((final.residential + final.commercialPublicServices) / finalTotal),
    transport: b.finalConsumptionShare * (final.transport / finalTotal),
  };
}

function normalizedAnchorShares() {
  const raw = rawAnchorShares();
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
  const anchors = normalizedAnchorShares();
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
          annualAnchor: "IEA 2023 China gas-balance sector shares",
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
  const rawShares = rawAnchorShares();
  const normalizedShares = normalizedAnchorShares();
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
    annualAnchors,
    ieaFinalConsumptionRows,
    monthly,
    proxyMonthly,
    methodology: [
      {
        title: "Control total",
        text: "The model scales the four buckets to JODI China TOTDEMC apparent demand because no free monthly China stock-change series is included. Since China stock change is reported as zero in this JODI extract, unobserved storage builds would make actual power, industrial, buildings, and transport end-use demand lower than TOTDEMC; storage withdrawals would make actual end-use demand higher. Storage is not separated in this dashboard.",
      },
      {
        title: "Annual sector anchor",
        text: "The final-consumption split uses the IEA China natural-gas country page for 2023 TJ gross values by sector. Industrial includes industry plus non-energy/chemical use; buildings include residential plus commercial/public services; transport is transport final gas use. Power uses IEA gas-balance transformation shares for electricity plus CHP. The four dashboard buckets are normalized to 100%.",
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
        name: "IEA Energy Statistics Data Browser",
        url: "https://www.iea.org/data-and-statistics/data-tools/energy-statistics-data-browser",
        note: "Used for the 2023 power/CHP transformation layer that is not part of the final-consumption table.",
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
