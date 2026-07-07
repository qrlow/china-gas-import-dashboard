import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const JODI_DATA_PATH = path.join(ROOT, "src", "data.js");
const SECTOR_DATA_PATH = path.join(ROOT, "src", "sector-data.js");
const OUTPUT_PATH = path.join(ROOT, "src", "switching-data.js");

const GAS_TWH_TH_PER_BCM = 10.55;
const MMBTU_PER_MWH_TH = 3.412142;
const COAL_MWH_TH_PER_TONNE_5500 = 5500 * 0.001162222;

const GAS_YEAR_MONTHS = [
  { index: 1, label: "Oct", month: 10 },
  { index: 2, label: "Nov", month: 11 },
  { index: 3, label: "Dec", month: 12 },
  { index: 4, label: "Jan", month: 1 },
  { index: 5, label: "Feb", month: 2 },
  { index: 6, label: "Mar", month: 3 },
  { index: 7, label: "Apr", month: 4 },
  { index: 8, label: "May", month: 5 },
  { index: 9, label: "Jun", month: 6 },
  { index: 10, label: "Jul", month: 7 },
  { index: 11, label: "Aug", month: 8 },
  { index: 12, label: "Sep", month: 9 },
];

const MONTHLY_FEASIBILITY = new Map([
  [1, 0.95],
  [2, 0.9],
  [3, 0.82],
  [4, 0.78],
  [5, 0.8],
  [6, 0.92],
  [7, 1],
  [8, 0.96],
  [9, 0.85],
  [10, 0.72],
  [11, 0.7],
  [12, 0.88],
]);

const SCENARIOS = [
  {
    key: "stress",
    label: "Stress Case",
    gasPriceUsdMmbtu: 16,
    coalPriceUsdTonne: 105,
    carbonPriceUsdTonne: 0,
    gasEfficiency: 0.52,
    coalEfficiency: 0.39,
    operatingAvailability: 0.62,
    peakGasReservation: 0.25,
    renewableNuclearStress: 0.15,
    policySupport: 0.85,
    note: "Central case for an LNG-exposed coastal China stress period where gas is well above domestic coal on a short-run cost basis.",
  },
  {
    key: "high",
    label: "High Switching",
    gasPriceUsdMmbtu: 20,
    coalPriceUsdTonne: 115,
    carbonPriceUsdTonne: 0,
    gasEfficiency: 0.52,
    coalEfficiency: 0.4,
    operatingAvailability: 0.78,
    peakGasReservation: 0.18,
    renewableNuclearStress: 0.05,
    policySupport: 1,
    note: "Administrative support is strong, coal flexibility is available, and power-system stress does not force much gas peaking.",
  },
  {
    key: "constrained",
    label: "Constrained",
    gasPriceUsdMmbtu: 12,
    coalPriceUsdTonne: 110,
    carbonPriceUsdTonne: 0,
    gasEfficiency: 0.52,
    coalEfficiency: 0.38,
    operatingAvailability: 0.45,
    peakGasReservation: 0.38,
    renewableNuclearStress: 0.25,
    policySupport: 0.55,
    note: "Gas still screens above coal, but summer peak demand, plant availability, and administrative constraints leave little feasible switching.",
  },
  {
    key: "cheap-gas",
    label: "Cheap Gas",
    gasPriceUsdMmbtu: 6,
    coalPriceUsdTonne: 115,
    carbonPriceUsdTonne: 0,
    gasEfficiency: 0.54,
    coalEfficiency: 0.39,
    operatingAvailability: 0.5,
    peakGasReservation: 0.25,
    renewableNuclearStress: 0.1,
    policySupport: 0.5,
    note: "A reverse-screening case. Gas can become cheaper than coal, so the gas-to-coal saving model intentionally returns zero activation.",
  },
];

const REGIONAL_CLUSTERS = [
  {
    key: "guangdong",
    label: "Guangdong",
    share: 0.42,
    priceSensitivity: "Highest",
    reportBasis: "Gas cap noted in the report policy map; major coastal LNG and gas-power cluster.",
  },
  {
    key: "yangtze",
    label: "Shanghai / Zhejiang / Jiangsu",
    share: 0.38,
    priceSensitivity: "High",
    reportBasis: "Shanghai area, reaching into Zhejiang and Jiangsu, identified by the report as a gas-power cluster.",
  },
  {
    key: "beijing",
    label: "Beijing Area",
    share: 0.2,
    priceSensitivity: "Medium",
    reportBasis: "Northern gas-power cluster with peak and air-quality constraints.",
  },
];

function readWindowData(filePath, assignmentName) {
  const text = fs.readFileSync(filePath, "utf8").trim();
  const json = text
    .replace(new RegExp(`^window\\.${assignmentName}\\s*=\\s*`), "")
    .replace(/;\s*$/, "");
  return JSON.parse(json);
}

function round(value, digits = 3) {
  if (value == null || Number.isNaN(value)) return null;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function sum(rows, getter) {
  return rows.reduce((acc, row) => acc + (getter(row) ?? 0), 0);
}

function calendarYearRows(jodi, year) {
  return jodi.actuals.filter((row) => row.period.startsWith(`${year}-`));
}

function fullGasYears(monthly) {
  const counts = new Map();
  for (const row of monthly) {
    counts.set(row.gasYear, (counts.get(row.gasYear) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, count]) => count === 12)
    .map(([gasYear]) => gasYear)
    .sort();
}

function buildMonthlyShape(sector) {
  const years = fullGasYears(sector.monthly).slice(-5);
  const raw = GAS_YEAR_MONTHS.map((month) => {
    const values = sector.monthly
      .filter((row) => years.includes(row.gasYear) && row.gasYearMonth === month.index)
      .map((row) => row.sectors.power)
      .filter((value) => Number.isFinite(value));
    const averagePowerResidualBcm = values.reduce((acc, value) => acc + value, 0) / Math.max(values.length, 1);
    const feasibility = MONTHLY_FEASIBILITY.get(month.index) ?? 1;
    return {
      ...month,
      averagePowerResidualBcm,
      feasibility,
      rawWeight: averagePowerResidualBcm * feasibility,
    };
  });
  const totalRawWeight = sum(raw, (row) => row.rawWeight);
  return raw.map((row) => ({
    index: row.index,
    label: row.label,
    month: row.month,
    averagePowerResidualBcm: round(row.averagePowerResidualBcm, 3),
    feasibility: round(row.feasibility, 3),
    normalizedWeight: round(row.rawWeight / totalRawWeight, 5),
    note: row.feasibility < 0.8
      ? "Peak-demand season: gas plants are preserved for system balancing."
      : row.feasibility >= 0.96
        ? "Shoulder season: more thermal substitution is feasible if coal capacity is available."
        : "Intermediate switching month.",
  }));
}

function contextMetrics(jodi) {
  const latest = jodi.actuals.at(-1);
  const y2025 = calendarYearRows(jodi, 2025);
  const y2023 = calendarYearRows(jodi, 2023);
  const latestGasYearRows = jodi.actuals.filter((row) => row.gasYear === latest.gasYear);
  return {
    latestActualPeriod: latest.period,
    latestGasYear: latest.gasYear,
    latestMonthlyApparentDemandBcm: round(latest.calculatedDemand, 3),
    latestGasYearApparentDemandBcm: round(sum(latestGasYearRows, (row) => row.calculatedDemand), 3),
    latestGasYearLNGImportsBcm: round(sum(latestGasYearRows, (row) => row.lngImports), 3),
    calendar2025ApparentDemandBcm: round(sum(y2025, (row) => row.calculatedDemand), 3),
    calendar2025LNGImportsBcm: round(sum(y2025, (row) => row.lngImports), 3),
    calendar2023ApparentDemandBcm: round(sum(y2023, (row) => row.calculatedDemand), 3),
  };
}

function buildOutput() {
  const jodi = readWindowData(JODI_DATA_PATH, "CHINA_GAS_DATA");
  const sector = readWindowData(SECTOR_DATA_PATH, "CHINA_GAS_SECTOR_DATA");
  const monthlyShape = buildMonthlyShape(sector);
  const context = contextMetrics(jodi);
  const envelopeMidpoint = 30;

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      title: "China gas-to-coal switching model",
      report: "IEA Gas Market Report, Q3-2026, pages 47-53",
      latestActualPeriod: context.latestActualPeriod,
      units: "bcm, TWh, Mt, USD unless otherwise stated",
      note: "Fuel-switching dashboard calibrated to the report's China discussion. It estimates gas-to-coal saving potential, not an official dispatch forecast.",
    },
    constants: {
      gasTwhThermalPerBcm: GAS_TWH_TH_PER_BCM,
      mmbtuPerMwhThermal: MMBTU_PER_MWH_TH,
      defaultCoalMwhThermalPerTonne: round(COAL_MWH_TH_PER_TONNE_5500, 3),
      defaultCoalHeatContentKcalKg: 5500,
      gasEmissionTco2PerMwhThermal: 0.181,
      coalEmissionTco2PerMwhThermal: 0.341,
      defaultGasVariableOMUsdMwh: 4,
      defaultCoalVariableOMUsdMwh: 5,
      fullSwitchCostGapUsdMwh: 45,
    },
    chinaEnvelope: {
      globalLngImportMarketGasSavingLowBcm: 55,
      globalLngImportMarketGasSavingHighBcm: 65,
      chinaShareDescription: "The report says China accounts for almost half of the global LNG-import-market theoretical range.",
      chinaLowBcm: 27.5,
      chinaMidBcm: envelopeMidpoint,
      chinaHighBcm: 32.5,
    },
    context,
    scenarios: SCENARIOS,
    defaultScenarioKey: "stress",
    regionalClusters: REGIONAL_CLUSTERS.map((cluster) => ({
      ...cluster,
      envelopeLowBcm: round(cluster.share * 27.5, 2),
      envelopeMidBcm: round(cluster.share * envelopeMidpoint, 2),
      envelopeHighBcm: round(cluster.share * 32.5, 2),
    })),
    monthlyShape,
    reportFindings: [
      {
        title: "China is a major theoretical switch source",
        text: "The report estimates 55-65 bcm/yr of gas saving potential across key LNG import markets, with China accounting for almost half. The dashboard therefore uses 27.5-32.5 bcm/yr as the technical China envelope before price and operational constraints.",
      },
      {
        title: "Coastal clusters drive the China case",
        text: "The report identifies Guangdong, the Shanghai/Zhejiang/Jiangsu area, and the Beijing area as the main gas-fired generation clusters. These areas also account for the vast majority of LNG imports, so global gas prices matter most there.",
      },
      {
        title: "Fuel costs are necessary but not sufficient",
        text: "The report notes Guangdong wholesale gas prices were about 12% higher year on year by end-March 2026 and up about 60% from early March to early June, while coal prices moved more modestly. It also cautions that summer peak demand, coal utilisation, wind/nuclear underperformance, and operational factors cap feasible switching.",
      },
      {
        title: "Administrative measures matter",
        text: "The policy map on page 53 notes a Guangdong gas-consumption cap. The model includes a policy-support factor because China fuel switching is not purely a merchant merit-order outcome.",
      },
    ],
    githubReview: [
      {
        name: "nexteAMAI/nextE_Energy_Supply_Price_Model",
        url: "https://github.com/nexteAMAI/nextE_Energy_Supply_Price_Model/blob/3420adc229afd91912c5ae897cf8e0ac9274d96f/processors/srmc.py",
        note: "Uses transparent gas and coal short-run marginal cost formulas with efficiency and emissions factors.",
      },
      {
        name: "OTEO001/merit-order",
        url: "https://github.com/OTEO001/merit-order/blob/5ea832c42abf5d648d4889c3e34f87bd15419a87/analytics/spreads.py",
        note: "Implements clean spark/dark spreads and an explicit fuel-switching price formula.",
      },
      {
        name: "IrishRugbyman/european-energy-hub",
        url: "https://github.com/IrishRugbyman/european-energy-hub/blob/d49fd339509d6a5e4ccc58f48ba4884ccb73f31a/frontend/src/routes/spreads.tsx",
        note: "Dashboard pattern for showing clean spark/dark spreads, fuel-switching regimes, and gas disruption overlays.",
      },
      {
        name: "onismyh/CHNPowerSystem",
        url: "https://github.com/onismyh/CHNPowerSystem",
        note: "China single-region power-system learning model. It is broader than switching economics and does not provide a ready China gas-to-coal dashboard.",
      },
    ],
    sources: [
      {
        name: "IEA Gas Market Report, Q3-2026",
        url: "local:/Users/qiran/Downloads/GasMarketReport,Q3-2026.pdf",
        note: "Pages 47-53 provide the gas-to-coal switching framework, China qualitative constraints, and the theoretical gas-saving envelope.",
      },
      {
        name: "JODI Gas World Database",
        url: "https://www.jodidata.org/gas/database/data-downloads.aspx",
        note: "Existing dashboard source for China monthly apparent gas demand and LNG imports.",
      },
      {
        name: "Carbon Monitor China",
        url: "https://cn.carbonmonitor.org/",
        note: "Existing sector dashboard source used here only to shape the monthly Power / residual switching profile. The switch model treats that bucket as a gas-fired power proxy, with a caveat that it can include small residual items.",
      },
    ],
  };
}

const output = buildOutput();
fs.writeFileSync(OUTPUT_PATH, `window.CHINA_GAS_SWITCHING_DATA = ${JSON.stringify(output, null, 2)};\n`);
console.log(`Wrote ${OUTPUT_PATH}`);
console.log(`China envelope: ${output.chinaEnvelope.chinaLowBcm}-${output.chinaEnvelope.chinaHighBcm} bcm/yr`);
