import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const cacheDir = path.join(repoRoot, ".cache");
const zipPath = path.join(cacheDir, "GAS_world_NewFormat.zip");
const outPath = path.join(repoRoot, "src", "data.js");
const dataUrl = "https://www.jodidata.org/jodi-publisher/gas/23/GAS_world_NewFormat.zip";

await fs.mkdir(cacheDir, { recursive: true });
await fs.mkdir(path.dirname(outPath), { recursive: true });

if (!existsSync(zipPath)) {
  execFileSync("curl", ["-L", "--fail", "-o", zipPath, dataUrl], { stdio: "inherit" });
}

const csvText = execFileSync("unzip", ["-p", zipPath, "STAGING_world_NewFormat.csv"], {
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});

const rows = parseJodi(csvText);
const model = buildModel(rows);
await fs.writeFile(outPath, `window.CHINA_GAS_MODEL = ${JSON.stringify(model, null, 2)};\n`);
console.log(`Wrote ${path.relative(repoRoot, outPath)}`);

function parseJodi(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  const headers = lines[0].split(",");
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  const monthRows = new Map();
  const ensureMonth = (period) => {
    if (!monthRows.has(period)) monthRows.set(period, { period, m3: {}, ktons: {}, assessmentCodes: new Set() });
    return monthRows.get(period);
  };
  for (const line of lines.slice(1)) {
    if (!line) continue;
    const c = line.split(",");
    if (c[idx.REF_AREA] !== "CN" || c[idx.ENERGY_PRODUCT] !== "NATGAS") continue;
    const row = ensureMonth(c[idx.TIME_PERIOD]);
    const flow = c[idx.FLOW_BREAKDOWN];
    const unit = c[idx.UNIT_MEASURE];
    const value = Number(c[idx.OBS_VALUE]);
    row.assessmentCodes.add(c[idx.ASSESSMENT_CODE]);
    if (unit === "M3") row.m3[flow] = value / 1000;
    if (unit === "KTONS") row.ktons[flow] = value / 1000;
  }
  return monthRows;
}

function buildModel(monthRows) {
  const periods = [...monthRows.keys()].sort();
  const latestActualPeriod = periods.at(-1);
  const forecastStart = addMonths(latestActualPeriod, 1);
  const forecastPeriods = Array.from({ length: 12 }, (_, i) => addMonths(forecastStart, i));
  const ltmStart = addMonths(forecastStart, -12);
  const ltmPeriods = periods.filter((p) => p >= ltmStart && p < forecastStart);
  const flow = (period, code) => monthRows.get(period)?.m3?.[code] ?? 0;
  const kton = (period, code) => monthRows.get(period)?.ktons?.[code] ?? null;
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const ltm = (code) => sum(ltmPeriods.map((p) => flow(p, code)));
  const ltmDemand = ltm("TOTDEMC");
  const ltmProduction = ltm("INDPROD");
  const ltmPipeline = ltm("IMPPIP");
  const ltmLNG = ltm("IMPLNG");
  const ltmExports = ltm("TOTEXPSB");

  const sectorShares = { Power: 0.22, Industrial: 0.42, "Buildings/City Gas": 0.31, Transport: 0.05 };
  const sectorGrowth = {
    Base: { Power: 0.03, Industrial: 0.02, "Buildings/City Gas": 0.02, Transport: 0.04 },
    Bull: { Power: 0.045, Industrial: 0.035, "Buildings/City Gas": 0.03, Transport: 0.05 },
    Bear: { Power: 0.01, Industrial: 0.005, "Buildings/City Gas": 0.005, Transport: 0.02 },
  };
  const routeAnnual = {
    Base: { "Central Asia Pipeline": 36.5, "Russia Pipeline": 38.5, "Myanmar Pipeline": 5.0 },
    Bull: { "Central Asia Pipeline": 37.3, "Russia Pipeline": 40.0, "Myanmar Pipeline": 5.0 },
    Bear: { "Central Asia Pipeline": 35.0, "Russia Pipeline": 36.0, "Myanmar Pipeline": 4.7 },
  };
  const scenarioInputs = {
    Base: { productionGrowth: 0.04, productionAdj: 0, contractedLNGAnnual: 76.0, storageNetAnnual: 1.0 },
    Bull: { productionGrowth: 0.035, productionAdj: -0.015, contractedLNGAnnual: 77.0, storageNetAnnual: 3.0 },
    Bear: { productionGrowth: 0.05, productionAdj: 0.01, contractedLNGAnnual: 73.0, storageNetAnnual: -1.0 },
  };
  const scenarioNotes = {
    Base: "Normal weather, steady industrial activity, normal power displacement, no major LNG terminal outage.",
    Bull: "Hotter/colder weather, stronger industrial activity, more gas burn in power, lower price pressure, higher storage refill.",
    Bear: "Milder weather, weaker industrial activity, better hydro/nuclear/renewables displacement, higher price pressure.",
  };

  const productionProfile = profileFromActual(ltmPeriods, flow, "INDPROD");
  const pipelineProfile = profileFromActual(ltmPeriods, flow, "IMPPIP");
  const lngProfile = profileFromActual(ltmPeriods, flow, "IMPLNG");
  const exportProfile = profileFromActual(ltmPeriods, flow, "TOTEXPSB");
  const demandProfiles = {
    Power: normalize([1.02, 0.88, 0.82, 0.78, 0.92, 1.08, 1.26, 1.30, 1.06, 0.92, 0.98, 1.20]),
    Industrial: normalize([0.92, 0.82, 1.06, 1.05, 1.03, 1.02, 1.00, 1.00, 1.03, 1.01, 1.04, 1.06]),
    "Buildings/City Gas": normalize([1.55, 1.40, 1.05, 0.75, 0.58, 0.50, 0.52, 0.55, 0.62, 0.80, 1.15, 1.53]),
    Transport: normalize([0.96, 0.94, 0.99, 1.00, 1.01, 1.01, 1.02, 1.02, 1.01, 1.00, 1.01, 1.03]),
  };

  const actuals = periods.map((period) => {
    const r = monthRows.get(period);
    const stock = r.m3.STOCKCH ?? 0;
    return {
      period,
      production: r.m3.INDPROD ?? null,
      lngImports: r.m3.IMPLNG ?? null,
      lngImportsMt: kton(period, "IMPLNG"),
      pipelineImports: r.m3.IMPPIP ?? null,
      totalImports: r.m3.TOTIMPSB ?? null,
      totalExports: r.m3.TOTEXPSB ?? null,
      netImports: (r.m3.TOTIMPSB ?? 0) - (r.m3.TOTEXPSB ?? 0),
      calculatedDemand: r.m3.TOTDEMC ?? null,
      residual: (r.m3.INDPROD ?? 0) + (r.m3.TOTIMPSB ?? 0) - (r.m3.TOTEXPSB ?? 0) - stock - (r.m3.TOTDEMC ?? 0),
      assessmentCodes: [...r.assessmentCodes].sort(),
    };
  });

  const scenarios = ["Base", "Bull", "Bear"];
  const forecast = forecastPeriods.map((period, i) => {
    const scenariosOut = {};
    const raw = {};
    for (const scenario of scenarios) {
      raw[scenario] = forecastScenario({
        scenario,
        period,
        monthIndex: monthNum(period) - 1,
        step: i,
        ltmDemand,
        ltmProduction,
        ltmExports,
        sectorShares,
        sectorGrowth,
        demandProfiles,
        productionProfile,
        pipelineProfile,
        lngProfile,
        exportProfile,
        routeAnnual,
        scenarioInputs,
      });
      scenariosOut[scenario] = raw[scenario];
    }
    const changes = {};
    for (const scenario of ["Bull", "Bear"]) {
      changes[scenario] = explainChange(raw.Base, raw[scenario]);
    }
    return { period, scenarios: scenariosOut, changes };
  });

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      latestActualPeriod,
      forecastStart,
      forecastEnd: forecastPeriods.at(-1),
      units: "bcm unless otherwise stated",
      ltmDemand,
      ltmProduction,
      ltmPipeline,
      ltmLNG,
    },
    actuals,
    forecast,
    assumptions: { sectorShares, sectorGrowth, routeAnnual, scenarioInputs, scenarioNotes },
    sources: [
      { name: "JODI Gas World Database CSV", url: dataUrl, note: "Primary monthly China gas balance. M3 values are converted to bcm by dividing by 1,000." },
      { name: "JODI gas data downloads", url: "https://www.jodidata.org/gas/database/data-downloads.aspx", note: "Public download page for CSV and IVT gas datasets." },
      { name: "JODI-Gas item names", url: "https://www.jodidata.org/_resources/files/downloads/gas-data/jodi-gas-wdb-short--long-names-ver2025.pdf", note: "Defines flow codes such as INDPROD, IMPLNG, IMPPIP, TOTIMPSB, TOTEXPSB, and TOTDEMC." },
      { name: "JODI-Gas manual", url: "https://www.jodidata.org/_resources/files/downloads/manuals/jodi-gas-manual.pdf", note: "Explains that national administrations submit data through JODI partner organizations before IEF publication." },
      { name: "Model assumptions", url: "", note: "Sector splits, route-level pipeline flows, contracted LNG, weather, power output, policy, price, outage, and shipping fields are model assumptions, not JODI-reported fields." },
    ],
  };
}

function forecastScenario(input) {
  const {
    scenario, period, monthIndex, step, ltmDemand, ltmProduction, ltmExports,
    sectorShares, sectorGrowth, demandProfiles, productionProfile, pipelineProfile,
    lngProfile, exportProfile, routeAnnual, scenarioInputs,
  } = input;
  const drivers = driverValues(scenario, period);
  const s = scenarioInputs[scenario];
  const sectorBase = {};
  for (const sector of Object.keys(sectorShares)) {
    sectorBase[sector] = ltmDemand * sectorShares[sector] / 12
      * demandProfiles[sector][monthIndex]
      * annualizePct(sectorGrowth[scenario][sector], step);
  }
  const powerDemand = sectorBase.Power * (1 + 0.018 * drivers.weather + 0.014 * drivers.switching + 0.016 * drivers.powerOutputGap - 0.012 * drivers.price + 0.006 * drivers.policy);
  const industrialDemand = sectorBase.Industrial * (1 + 0.012 * drivers.industrial - 0.008 * drivers.price + 0.004 * drivers.policy);
  const buildingsDemand = sectorBase["Buildings/City Gas"] * (1 + 0.026 * drivers.weather - 0.009 * drivers.price + 0.005 * drivers.policy);
  const transportDemand = sectorBase.Transport * (1 - 0.005 * drivers.price + 0.003 * drivers.policy);
  const totalDemand = powerDemand + industrialDemand + buildingsDemand + transportDemand;
  const domesticBaseline = ltmProduction / 12 * productionProfile[monthIndex] * annualizePct(s.productionGrowth, step);
  const domesticProduction = domesticBaseline * (1 + s.productionAdj);
  const exports = ltmExports / 12 * exportProfile[monthIndex];
  const storageChange = storagePattern(period, s.storageNetAnnual, scenario);
  const centralAsiaPipeline = routeAnnual[scenario]["Central Asia Pipeline"] / 12 * pipelineProfile[monthIndex];
  const russiaPipeline = routeAnnual[scenario]["Russia Pipeline"] / 12 * pipelineProfile[monthIndex];
  const myanmarPipeline = routeAnnual[scenario]["Myanmar Pipeline"] / 12 * pipelineProfile[monthIndex];
  const totalPipeline = centralAsiaPipeline + russiaPipeline + myanmarPipeline;
  const contractedLNGScheduled = s.contractedLNGAnnual / 12 * lngProfile[monthIndex];
  const terminalOutageLoss = drivers.terminalOutage;
  const shippingAdjustment = drivers.shippingAdj;
  const contractedAvailable = Math.max(0, contractedLNGScheduled - terminalOutageLoss + shippingAdjustment);
  const importRequirement = totalDemand + storageChange + exports - domesticProduction;
  const lngRequirement = Math.max(0, importRequirement - totalPipeline);
  const contractedLNG = Math.min(contractedAvailable, lngRequirement);
  const spotLNG = Math.max(0, lngRequirement - contractedLNG);
  const totalImports = totalPipeline + contractedLNG + spotLNG;
  const netImports = totalImports - exports;
  const residual = domesticProduction + totalImports - exports - storageChange - totalDemand;
  return {
    powerDemand,
    industrialDemand,
    buildingsDemand,
    transportDemand,
    totalDemand,
    domesticProduction,
    storageChange,
    exports,
    centralAsiaPipeline,
    russiaPipeline,
    myanmarPipeline,
    totalPipeline,
    contractedLNG,
    spotLNG,
    totalImports,
    netImports,
    residual,
    drivers,
  };
}

function explainChange(base, current) {
  const demandChange = current.totalDemand - base.totalDemand;
  const domesticSupplyEffect = -(current.domesticProduction - base.domesticProduction);
  const storageExportEffect = (current.storageChange - base.storageChange) + (current.exports - base.exports);
  const pipelineChange = current.totalPipeline - base.totalPipeline;
  const contractedLNGChange = current.contractedLNG - base.contractedLNG;
  const spotLNGChange = current.spotLNG - base.spotLNG;
  const totalImportChange = current.totalImports - base.totalImports;
  return {
    totalImportChange,
    demandChange,
    domesticSupplyEffect,
    storageExportEffect,
    pipelineChange,
    contractedLNGChange,
    spotLNGChange,
    explanation: `Demand ${signed(demandChange)} bcm, domestic supply effect ${signed(domesticSupplyEffect)} bcm, storage/export effect ${signed(storageExportEffect)} bcm; pipeline ${signed(pipelineChange)} bcm, contracted LNG ${signed(contractedLNGChange)} bcm, spot LNG ${signed(spotLNGChange)} bcm.`,
  };
}

function driverValues(scenario, period) {
  const m = monthNum(period);
  if (scenario === "Base") return { weather: 0, switching: 0, powerOutputGap: 0, industrial: 0, policy: 0, price: 0, terminalOutage: 0, shippingAdj: 0 };
  if (scenario === "Bull") {
    const weather = [1, 2, 7, 8, 12].includes(m) ? 0.8 : [6, 9, 11].includes(m) ? 0.4 : 0.2;
    return { weather, switching: 0.45, powerOutputGap: [6, 7, 8, 9].includes(m) ? 0.6 : 0.25, industrial: 0.45, policy: 0.2, price: -0.35, terminalOutage: 0, shippingAdj: 0.05 };
  }
  const weather = [1, 2, 7, 8, 12].includes(m) ? -0.7 : [6, 9, 11].includes(m) ? -0.35 : -0.15;
  return { weather, switching: -0.5, powerOutputGap: [6, 7, 8, 9].includes(m) ? -0.55 : -0.25, industrial: -0.5, policy: -0.2, price: 0.6, terminalOutage: [7, 8, 9].includes(m) ? 0.25 : 0.05, shippingAdj: -0.03 };
}

function storagePattern(period, netAnnual, scenario) {
  const m = monthNum(period);
  const seasonal = { 1: -1.8, 2: -1.4, 3: 0.3, 4: 0.8, 5: 1.0, 6: 1.2, 7: 1.1, 8: 1.0, 9: 0.8, 10: 0.5, 11: -0.8, 12: -1.2 }[m];
  const zeroNet = seasonal - (0.125 / 12);
  const extraRefill = scenario === "Bull" && [5, 6, 7, 8, 9].includes(m) ? 0.15 : 0;
  return zeroNet + netAnnual / 12 + extraRefill;
}

function profileFromActual(ltmPeriods, flow, code) {
  const vals = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const matching = ltmPeriods.filter((p) => monthNum(p) === month);
    return matching.length ? matching.reduce((acc, p) => acc + flow(p, code), 0) / matching.length : 1;
  });
  return normalize(vals);
}

function normalize(vals) {
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  return vals.map((v) => v / avg);
}

function addMonths(period, months) {
  const [year, month] = period.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1 + months, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function monthNum(period) {
  return Number(period.slice(5, 7));
}

function annualizePct(rate, monthsFromStart) {
  return Math.pow(1 + rate, monthsFromStart / 12);
}

function signed(n) {
  return `${n >= 0 ? "+" : ""}${n.toFixed(1)}`;
}

