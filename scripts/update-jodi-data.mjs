import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const cacheDir = path.join(repoRoot, ".cache");

const supportDownloads = [
  {
    url: "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=carbon_china",
    path: path.join(cacheDir, "carbon_china.csv"),
  },
  {
    url: "https://datas.carbonmonitor.org/API/downloadFullDataset.php?source=energy_global",
    path: path.join(cacheDir, "carbon_power.csv"),
  },
];

const generatedFiles = [
  path.join(repoRoot, "src", "data.js"),
  path.join(repoRoot, "src", "sector-data.js"),
  path.join(repoRoot, "src", "switching-data.js"),
];

await fs.mkdir(cacheDir, { recursive: true });

const before = new Map();
for (const filePath of generatedFiles) {
  if (existsSync(filePath)) {
    before.set(filePath, await fs.readFile(filePath, "utf8"));
  }
}

runNodeScript("build-dashboard-data.mjs", ["--force-download"]);

for (const item of supportDownloads) {
  await download(item.url, item.path);
}

runNodeScript("build-sector-data.mjs");
if (existsSync(path.join(repoRoot, "scripts", "build-switching-data.mjs"))) {
  runNodeScript("build-switching-data.mjs");
}

for (const filePath of generatedFiles) {
  if (!before.has(filePath) || !existsSync(filePath)) continue;
  const oldText = before.get(filePath);
  const newText = await fs.readFile(filePath, "utf8");
  if (equivalentIgnoringGeneratedAt(oldText, newText)) {
    await fs.writeFile(filePath, oldText);
    console.log(`No substantive data change in ${path.relative(repoRoot, filePath)}; restored previous generatedAt.`);
  }
}

const jodi = readWindowData(path.join(repoRoot, "src", "data.js"));
console.log(`Latest JODI China actual period: ${jodi.meta.latestActualPeriod}`);

function runNodeScript(scriptName, args = []) {
  execFileSync(process.execPath, [path.join(repoRoot, "scripts", scriptName), ...args], {
    cwd: repoRoot,
    stdio: "inherit",
  });
}

async function download(url, outPath) {
  const tmpPath = `${outPath}.tmp`;
  execFileSync("curl", ["-L", "--fail", "--retry", "3", "--retry-delay", "5", "-o", tmpPath, url], {
    cwd: repoRoot,
    stdio: "inherit",
  });
  await fs.rename(tmpPath, outPath);
}

function readWindowData(filePath) {
  return parseWindowAssignment(readFileSync(filePath, "utf8"));
}

function equivalentIgnoringGeneratedAt(leftText, rightText) {
  try {
    const left = stripGeneratedAt(parseWindowAssignment(leftText));
    const right = stripGeneratedAt(parseWindowAssignment(rightText));
    return JSON.stringify(left) === JSON.stringify(right);
  } catch {
    return false;
  }
}

function parseWindowAssignment(text) {
  const match = text.trim().match(/^window\.[A-Z0-9_]+\s*=\s*([\s\S]*);\s*$/);
  if (!match) throw new Error("File is not a window assignment data file.");
  return JSON.parse(match[1]);
}

function stripGeneratedAt(value) {
  if (Array.isArray(value)) return value.map(stripGeneratedAt);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== "generatedAt")
        .map(([key, child]) => [key, stripGeneratedAt(child)]),
    );
  }
  return value;
}
