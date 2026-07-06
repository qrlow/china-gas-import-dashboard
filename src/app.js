(function () {
  const data = window.CHINA_GAS_MODEL;
  let scenario = "Base";

  const colors = {
    Base: "#1c3f5f",
    Bull: "#b14b4b",
    Bear: "#3f7d45",
    pipeline: "#3c78b5",
    contracted: "#16837a",
    spot: "#c4821e",
    power: "#3c78b5",
    industrial: "#7d5fb2",
    buildings: "#16837a",
    transport: "#c4821e",
  };

  const fmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  const fmt0 = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

  function byId(id) {
    return document.getElementById(id);
  }

  function formatMonth(period) {
    const [year, month] = period.split("-");
    return `${year}-${month}`;
  }

  function sum(rows, getter) {
    return rows.reduce((acc, row) => acc + getter(row), 0);
  }

  function activeRows() {
    return data.forecast.map((row) => ({ period: row.period, ...row.scenarios[scenario] }));
  }

  function init() {
    byId("latest-actual").textContent = `Latest actual: ${data.meta.latestActualPeriod}`;
    byId("forecast-range").textContent = `Forecast: ${data.meta.forecastStart} to ${data.meta.forecastEnd}`;
    document.querySelectorAll(".segment").forEach((button) => {
      button.addEventListener("click", () => {
        scenario = button.dataset.scenario;
        document.querySelectorAll(".segment").forEach((b) => {
          b.classList.toggle("is-active", b === button);
          b.setAttribute("aria-pressed", b === button ? "true" : "false");
        });
        render();
      });
    });
    renderSources();
    renderAssumptions();
    render();
  }

  function render() {
    byId("scenario-note").textContent = data.assumptions.scenarioNotes[scenario];
    byId("supply-title").textContent = `${scenario} Import Components`;
    byId("demand-title").textContent = `${scenario} Sector Demand`;
    renderKpis();
    renderLineChart();
    renderStackedImports();
    renderDemandChart();
    renderTable();
  }

  function renderKpis() {
    const rows = activeRows();
    const imports = sum(rows, (r) => r.totalImports);
    const spot = sum(rows, (r) => r.spotLNG);
    const demand = sum(rows, (r) => r.totalDemand);
    const production = sum(rows, (r) => r.domesticProduction);
    const baseImports = sum(data.forecast, (r) => r.scenarios.Base.totalImports);
    const delta = imports - baseImports;
    const items = [
      ["12M Gross Imports", `${fmt.format(imports)} bcm`, `${delta >= 0 ? "+" : ""}${fmt.format(delta)} bcm vs base`],
      ["12M Spot LNG Need", `${fmt.format(spot)} bcm`, "Residual after pipeline and contracted LNG"],
      ["12M Demand", `${fmt.format(demand)} bcm`, "Power, industrial, buildings/city gas, transport"],
      ["Domestic Production", `${fmt.format(production)} bcm`, "Scenario-adjusted supply"],
    ];
    byId("kpi-grid").innerHTML = items.map(([label, value, sub]) => `
      <article class="kpi">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
        <div class="sub">${sub}</div>
      </article>
    `).join("");
  }

  function renderLineChart() {
    const series = ["Base", "Bull", "Bear"].map((name) => ({
      name,
      color: colors[name],
      values: data.forecast.map((row) => ({ period: row.period, value: row.scenarios[name].totalImports })),
    }));
    byId("line-chart").innerHTML = lineChart(series, "bcm");
  }

  function renderStackedImports() {
    const rows = activeRows().map((row) => ({
      period: row.period,
      values: [
        { key: "Pipeline", value: row.totalPipeline, color: colors.pipeline },
        { key: "Contracted LNG", value: row.contractedLNG, color: colors.contracted },
        { key: "Spot LNG", value: row.spotLNG, color: colors.spot },
      ],
    }));
    byId("stack-chart").innerHTML = stackedBar(rows, ["Pipeline", "Contracted LNG", "Spot LNG"], "bcm");
  }

  function renderDemandChart() {
    const rows = activeRows().map((row) => ({
      period: row.period,
      values: [
        { key: "Power", value: row.powerDemand, color: colors.power },
        { key: "Industrial", value: row.industrialDemand, color: colors.industrial },
        { key: "Buildings/City Gas", value: row.buildingsDemand, color: colors.buildings },
        { key: "Transport", value: row.transportDemand, color: colors.transport },
      ],
    }));
    byId("demand-chart").innerHTML = stackedBar(rows, ["Power", "Industrial", "Buildings/City Gas", "Transport"], "bcm");
  }

  function renderTable() {
    const rows = activeRows();
    const tbody = byId("forecast-table").querySelector("tbody");
    tbody.innerHTML = rows.map((row) => {
      const change = scenario === "Base" ? 0 : data.forecast.find((r) => r.period === row.period).changes[scenario].totalImportChange;
      const note = scenario === "Base"
        ? "Base case uses normal weather, steady activity, scheduled pipeline supply, contracted LNG first, and spot LNG as residual."
        : data.forecast.find((r) => r.period === row.period).changes[scenario].explanation;
      return `
        <tr>
          <td>${formatMonth(row.period)}</td>
          <td class="num">${fmt.format(row.totalImports)}</td>
          <td class="num">${fmt.format(row.totalPipeline)}</td>
          <td class="num">${fmt.format(row.contractedLNG)}</td>
          <td class="num">${fmt.format(row.spotLNG)}</td>
          <td class="num">${fmt.format(row.totalDemand)}</td>
          <td class="num">${fmt.format(row.domesticProduction)}</td>
          <td class="num">${change >= 0 ? "+" : ""}${fmt.format(change)}</td>
          <td class="explain">${note}</td>
        </tr>
      `;
    }).join("");
  }

  function renderAssumptions() {
    const s = data.assumptions;
    const sectorLines = Object.entries(s.sectorShares)
      .map(([key, value]) => `${key}: ${fmt0.format(value * 100)}%`)
      .join(" · ");
    const routes = Object.entries(s.routeAnnual.Base)
      .map(([key, value]) => `${key}: ${fmt.format(value)} bcm/y`)
      .join(" · ");
    byId("assumptions").innerHTML = [
      ["Sector demand split", sectorLines],
      ["Route-level pipeline split", routes],
      ["Contracted LNG", `Base scheduled contracted LNG is ${fmt.format(s.scenarioInputs.Base.contractedLNGAnnual)} bcm/y; spot LNG is the residual requirement.`],
      ["Scenario drivers", "Bull raises weather-sensitive demand, power gas burn, industrial activity, and storage refill. Bear does the reverse and adds mild terminal/shipping constraints."],
      ["Forecast identity", "Demand + storage change + exports - domestic production = import requirement; pipeline and contracted LNG are used before spot LNG."],
    ].map(([title, body]) => `
      <div class="assumption">
        <h3>${title}</h3>
        <p>${body}</p>
      </div>
    `).join("");
  }

  function renderSources() {
    byId("sources").innerHTML = data.sources.map((source) => `
      <div class="source">
        <h3>${source.name}</h3>
        <p>${source.note}</p>
        ${source.url ? `<p><a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a></p>` : ""}
      </div>
    `).join("");
  }

  function chartScales(values, width, height, pad) {
    const max = Math.max(...values, 1);
    const min = Math.min(0, ...values);
    const x = (i, count) => pad.left + (count === 1 ? 0 : (i / (count - 1)) * (width - pad.left - pad.right));
    const y = (value) => pad.top + (max - value) / (max - min) * (height - pad.top - pad.bottom);
    return { max, min, x, y };
  }

  function lineChart(series, unit) {
    const width = 760;
    const height = 300;
    const pad = { top: 18, right: 18, bottom: 44, left: 50 };
    const allValues = series.flatMap((s) => s.values.map((v) => v.value));
    const scale = chartScales(allValues, width, height, pad);
    const count = series[0].values.length;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const lines = series.map((s) => {
      const points = s.values.map((v, i) => `${scale.x(i, count)},${scale.y(v.value)}`).join(" ");
      return `<polyline fill="none" stroke="${s.color}" stroke-width="3" points="${points}"></polyline>`;
    }).join("");
    const dots = series.map((s) => s.values.map((v, i) => `<circle cx="${scale.x(i, count)}" cy="${scale.y(v.value)}" r="3" fill="${s.color}"><title>${s.name} ${v.period}: ${fmt.format(v.value)} ${unit}</title></circle>`).join("")).join("");
    const monthLabels = series[0].values.map((v, i) => i % 2 === 0 ? `<text x="${scale.x(i, count)}" y="${height - 12}" text-anchor="middle" class="chart-label">${v.period.slice(5)}</text>` : "").join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${lines}
        ${dots}
        ${monthLabels}
      </svg>
      ${legend(series.map((s) => ({ label: s.name, color: s.color })))}
    `;
  }

  function stackedBar(rows, keys, unit) {
    const width = 760;
    const height = 300;
    const pad = { top: 18, right: 18, bottom: 44, left: 50 };
    const totals = rows.map((r) => r.values.reduce((a, v) => a + v.value, 0));
    const scale = chartScales(totals, width, height, pad);
    const band = (width - pad.left - pad.right) / rows.length;
    const barWidth = Math.max(16, band * 0.58);
    const bars = rows.map((row, i) => {
      const x = pad.left + i * band + (band - barWidth) / 2;
      let yTop = height - pad.bottom;
      return row.values.map((part) => {
        const h = (part.value / (scale.max - scale.min)) * (height - pad.top - pad.bottom);
        yTop -= h;
        return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${part.key} ${row.period}: ${fmt.format(part.value)} ${unit}</title></rect>`;
      }).join("");
    }).join("");
    const monthLabels = rows.map((r, i) => i % 2 === 0 ? `<text x="${pad.left + i * band + band / 2}" y="${height - 12}" text-anchor="middle" class="chart-label">${r.period.slice(5)}</text>` : "").join("");
    const tickVals = [0, scale.max * 0.25, scale.max * 0.5, scale.max * 0.75, scale.max];
    const legendItems = keys.map((key) => {
      const found = rows[0].values.find((v) => v.key === key);
      return { label: key, color: found.color };
    });
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${tickVals.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
        ${monthLabels}
      </svg>
      ${legend(legendItems)}
    `;
  }

  function legend(items) {
    return `<div class="legend">${items.map((item) => `<span><i class="swatch" style="background:${item.color}"></i>${item.label}</span>`).join("")}</div>`;
  }

  init();
})();

