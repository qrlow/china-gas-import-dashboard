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

const monthRows = parseJodi(csvText);
const data = buildDashboardData(monthRows);
await fs.writeFile(outPath, `window.CHINA_GAS_DATA = ${JSON.stringify(data, null, 2)};\n`);
console.log(`Wrote ${path.relative(repoRoot, outPath)}`);

function parseJodi(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  const headers = lines[0].split(",");
  const idx = Object.fromEntries(headers.map((header, index) => [header, index]));
  const monthRows = new Map();

  for (const line of lines.slice(1)) {
    if (!line) continue;
    const cols = line.split(",");
    if (cols[idx.REF_AREA] !== "CN") continue;
    if (cols[idx.ENERGY_PRODUCT] !== "NATGAS") continue;

    const period = cols[idx.TIME_PERIOD];
    const flow = cols[idx.FLOW_BREAKDOWN];
    const unit = cols[idx.UNIT_MEASURE];
    const value = Number(cols[idx.OBS_VALUE]);
    const assessmentCode = cols[idx.ASSESSMENT_CODE];

    if (!monthRows.has(period)) {
      monthRows.set(period, {
        period,
        m3: {},
        ktons: {},
        assessmentCodes: new Set(),
      });
    }

    const row = monthRows.get(period);
    row.assessmentCodes.add(assessmentCode);
    if (unit === "M3") row.m3[flow] = value / 1000;
    if (unit === "KTONS") row.ktons[flow] = value / 1000;
  }

  return monthRows;
}

function buildDashboardData(monthRows) {
  const periods = [...monthRows.keys()].sort();
  const latestActualPeriod = periods.at(-1);
  const earliestActualPeriod = periods[0];
  const currentGasYear = gasYearLabel(latestActualPeriod);
  const gasYears = [...new Set(periods.map(gasYearLabel))].sort((a, b) => gasYearStart(a).localeCompare(gasYearStart(b)));

  const actuals = periods.map((period) => {
    const row = monthRows.get(period);
    const stockChange = row.m3.STOCKCH ?? null;
    const production = row.m3.INDPROD ?? null;
    const totalImports = row.m3.TOTIMPSB ?? null;
    const totalExports = row.m3.TOTEXPSB ?? null;
    const calculatedDemand = row.m3.TOTDEMC ?? null;
    return {
      period,
      gasYear: gasYearLabel(period),
      gasYearMonth: gasYearMonth(period),
      production,
      lngImports: row.m3.IMPLNG ?? null,
      lngImportsMt: row.ktons.IMPLNG ?? null,
      pipelineImports: row.m3.IMPPIP ?? null,
      totalImports,
      lngExports: row.m3.EXPLNG ?? null,
      pipelineExports: row.m3.EXPPIP ?? null,
      totalExports,
      stockChange,
      netImports: nullableSubtract(totalImports, totalExports),
      calculatedDemand,
      residual: balanceResidual({ production, totalImports, totalExports, stockChange, calculatedDemand }),
      assessmentCodes: [...row.assessmentCodes].sort(),
    };
  });

  return {
    meta: {
      generatedAt: new Date().toISOString(),
      earliestActualPeriod,
      latestActualPeriod,
      currentGasYear,
      units: "bcm unless otherwise stated",
      note: "JODI actuals only. Gas years run October through September.",
    },
    gasYears,
    gasYearMonths: [
      { index: 1, label: "Oct" },
      { index: 2, label: "Nov" },
      { index: 3, label: "Dec" },
      { index: 4, label: "Jan" },
      { index: 5, label: "Feb" },
      { index: 6, label: "Mar" },
      { index: 7, label: "Apr" },
      { index: 8, label: "May" },
      { index: 9, label: "Jun" },
      { index: 10, label: "Jul" },
      { index: 11, label: "Aug" },
      { index: 12, label: "Sep" },
    ],
    actuals,
    flowDefinitions: [
      { code: "INDPROD", label: "Domestic production", note: "JODI production flow." },
      { code: "IMPLNG", label: "LNG imports", note: "Reported in M3 and KTONS. Dashboard shows bcm and mt." },
      { code: "IMPPIP", label: "Pipeline imports", note: "Total pipeline imports. JODI does not split Central Asia, Russia, and Myanmar." },
      { code: "TOTIMPSB", label: "Total imports", note: "Gross imports before exports." },
      { code: "TOTEXPSB", label: "Total exports", note: "Gross exports and re-exports where reported." },
      { code: "TOTDEMC", label: "Calculated demand", note: "JODI gross inland deliveries / calculated demand." },
      { code: "STOCKCH", label: "Stock change", note: "Only populated where the reporting economy submits it." },
    ],
    sources: [
      {
        name: "JODI Gas World Database CSV",
        url: dataUrl,
        note: "Primary source for monthly China natural gas actuals. M3 rows are converted to bcm by dividing by 1,000.",
      },
      {
        name: "JODI gas data downloads",
        url: "https://www.jodidata.org/gas/database/data-downloads.aspx",
        note: "Public download page for CSV and IVT gas datasets.",
      },
      {
        name: "JODI-Gas item names",
        url: "https://www.jodidata.org/_resources/files/downloads/gas-data/jodi-gas-wdb-short--long-names-ver2025.pdf",
        note: "Defines flow codes such as INDPROD, IMPLNG, IMPPIP, TOTIMPSB, TOTEXPSB, and TOTDEMC.",
      },
      {
        name: "JODI-Gas manual",
        url: "https://www.jodidata.org/_resources/files/downloads/manuals/jodi-gas-manual.pdf",
        note: "Explains that national administrations submit data through JODI partner organizations before IEF publication.",
      },
    ],
  };
}

function balanceResidual({ production, totalImports, totalExports, stockChange, calculatedDemand }) {
  if ([production, totalImports, totalExports, calculatedDemand].some((value) => value == null)) return null;
  return production + totalImports - totalExports - (stockChange ?? 0) - calculatedDemand;
}

function nullableSubtract(left, right) {
  if (left == null || right == null) return null;
  return left - right;
}

function gasYearLabel(period) {
  const year = Number(period.slice(0, 4));
  const month = Number(period.slice(5, 7));
  const startYear = month >= 10 ? year : year - 1;
  return `${startYear}/${String(startYear + 1).slice(2)}`;
}

function gasYearStart(label) {
  return `${label.slice(0, 4)}-10`;
}

function gasYearMonth(period) {
  const month = Number(period.slice(5, 7));
  return month >= 10 ? month - 9 : month + 3;
}
