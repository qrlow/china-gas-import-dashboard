(function () {
  const data = window.CHINA_GAS_DATA;
  let gasYear = data.meta.currentGasYear;

  const colors = {
    total: "#1c3f5f",
    lng: "#16837a",
    pipeline: "#3c78b5",
    other: "#c4821e",
    demand: "#7d5fb2",
    production: "#3f7d45",
    exports: "#b14b4b",
  };
  const gasYearColors = ["#1c3f5f", "#3c78b5", "#16837a", "#c4821e", "#b14b4b"];

  const fmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  const fmt0 = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });

  function byId(id) {
    return document.getElementById(id);
  }

  function number(value) {
    return value == null || Number.isNaN(value) ? 0 : value;
  }

  function display(value) {
    return value == null || Number.isNaN(value) ? "" : fmt.format(value);
  }

  function formatMonth(period) {
    const [year, month] = period.split("-");
    return `${year}-${month}`;
  }

  function sum(rows, getter) {
    return rows.reduce((acc, row) => acc + number(getter(row)), 0);
  }

  function activeRows() {
    return data.actuals
      .filter((row) => row.gasYear === gasYear)
      .sort((a, b) => a.gasYearMonth - b.gasYearMonth);
  }

  function activeGasYears() {
    const index = data.gasYears.indexOf(gasYear);
    return data.gasYears.slice(Math.max(0, index - 4), index + 1);
  }

  function rowForGasYearMonth(rows, monthIndex) {
    return rows.find((row) => row.gasYearMonth === monthIndex);
  }

  function init() {
    byId("latest-actual").textContent = `Latest actual: ${data.meta.latestActualPeriod}`;

    const select = byId("gas-year-select");
    select.innerHTML = data.gasYears.map((year) => `
      <option value="${year}" ${year === gasYear ? "selected" : ""}>${year}</option>
    `).join("");
    select.addEventListener("change", () => {
      gasYear = select.value;
      render();
    });

    renderSources();
    renderDefinitions();
    render();
  }

  function render() {
    const rows = activeRows();
    const years = activeGasYears();
    const first = rows[0]?.period ?? "";
    const last = rows.at(-1)?.period ?? "";
    byId("gas-year-range").textContent = `${gasYear}: ${first} to ${last}`;
    byId("dashboard-note").textContent = `JODI actuals only. The main chart shows ${years.join(", ")} by gas-year month; ${gasYear} currently has ${rows.length} reported month${rows.length === 1 ? "" : "s"}.`;
    byId("line-chart-title").textContent = `Total Imports, ${years[0]} to ${years.at(-1)}`;
    renderKpis(rows);
    renderLineChart(years);
    renderStackedImports(rows);
    renderBalanceChart(rows);
    renderTable(rows);
  }

  function renderKpis(rows) {
    const items = [
      ["Gas-Year Gross Imports", `${fmt.format(sum(rows, (row) => row.totalImports))} bcm`, `${rows.length} reported month${rows.length === 1 ? "" : "s"}`],
      ["LNG Imports", `${fmt.format(sum(rows, (row) => row.lngImports))} bcm`, `${fmt.format(sum(rows, (row) => row.lngImportsMt))} mt`],
      ["Pipeline Imports", `${fmt.format(sum(rows, (row) => row.pipelineImports))} bcm`, "JODI total pipeline imports"],
      ["Calculated Demand", `${fmt.format(sum(rows, (row) => row.calculatedDemand))} bcm`, "JODI gross inland deliveries"],
    ];
    byId("kpi-grid").innerHTML = items.map(([label, value, sub]) => `
      <article class="kpi">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
        <div class="sub">${sub}</div>
      </article>
    `).join("");
  }

  function renderLineChart(years) {
    const series = years.map((year, index) => {
      const rows = data.actuals.filter((row) => row.gasYear === year);
      return {
        name: year,
        color: gasYearColors[index % gasYearColors.length],
        values: data.gasYearMonths.map((month, xIndex) => {
          const row = rowForGasYearMonth(rows, month.index);
          return {
            xIndex,
            label: month.label,
            period: row?.period ?? `${year} ${month.label}`,
            value: row?.totalImports ?? null,
          };
        }),
      };
    });
    byId("line-chart").innerHTML = lineChart(series, "bcm", data.gasYearMonths.map((month) => month.label));
  }

  function renderStackedImports(rows) {
    const chartRows = data.gasYearMonths.map((month) => {
      const row = rowForGasYearMonth(rows, month.index);
      const lng = number(row?.lngImports);
      const pipeline = number(row?.pipelineImports);
      const other = Math.max(0, number(row?.totalImports) - lng - pipeline);
      return {
        period: row?.period ?? `${gasYear} ${month.label}`,
        label: month.label,
        values: [
          { key: "LNG", value: lng, color: colors.lng },
          { key: "Pipeline", value: pipeline, color: colors.pipeline },
          { key: "Other / rounding", value: other, color: colors.other },
        ],
      };
    });
    byId("stack-chart").innerHTML = stackedBar(chartRows, ["LNG", "Pipeline", "Other / rounding"], "bcm", data.gasYearMonths.map((month) => month.label));
  }

  function renderBalanceChart(rows) {
    const valuesFor = (key) => data.gasYearMonths.map((month, xIndex) => {
      const row = rowForGasYearMonth(rows, month.index);
      return {
        xIndex,
        label: month.label,
        period: row?.period ?? `${gasYear} ${month.label}`,
        value: row?.[key] ?? null,
      };
    });
    const series = [
      { name: "Calculated Demand", color: colors.demand, values: valuesFor("calculatedDemand") },
      { name: "Production", color: colors.production, values: valuesFor("production") },
      { name: "Total Imports", color: colors.total, values: valuesFor("totalImports") },
    ];
    byId("balance-chart").innerHTML = lineChart(series, "bcm", data.gasYearMonths.map((month) => month.label));
  }

  function renderTable(rows) {
    const tbody = byId("actuals-table").querySelector("tbody");
    tbody.innerHTML = rows.map((row) => `
      <tr>
        <td>${formatMonth(row.period)}</td>
        <td class="num">${display(row.totalImports)}</td>
        <td class="num">${display(row.lngImports)}</td>
        <td class="num">${display(row.lngImportsMt)}</td>
        <td class="num">${display(row.pipelineImports)}</td>
        <td class="num">${display(row.production)}</td>
        <td class="num">${display(row.calculatedDemand)}</td>
        <td class="num">${display(row.totalExports)}</td>
        <td class="num">${display(row.netImports)}</td>
        <td class="num">${display(row.residual)}</td>
        <td>${row.assessmentCodes.join(", ")}</td>
      </tr>
    `).join("");
  }

  function renderDefinitions() {
    byId("definitions").innerHTML = data.flowDefinitions.map((item) => `
      <div class="assumption">
        <h3>${item.code}: ${item.label}</h3>
        <p>${item.note}</p>
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
    const numeric = values.filter((value) => value != null && !Number.isNaN(value)).map(number);
    const max = Math.max(...numeric, 1);
    const min = Math.min(0, ...numeric);
    const x = (i, count) => pad.left + (count === 1 ? 0 : (i / (count - 1)) * (width - pad.left - pad.right));
    const y = (value) => pad.top + (max - number(value)) / (max - min) * (height - pad.top - pad.bottom);
    return { max, min, x, y };
  }

  function lineChart(series, unit, xLabels) {
    const width = 760;
    const height = 300;
    const pad = { top: 18, right: 18, bottom: 44, left: 50 };
    const allValues = series.flatMap((item) => item.values.map((point) => point.value));
    const scale = chartScales(allValues, width, height, pad);
    const count = xLabels?.length ?? series[0]?.values.length ?? 0;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const lines = series.map((item) => {
      const points = item.values
        .filter((point) => point.value != null && !Number.isNaN(point.value))
        .map((point, i) => `${scale.x(point.xIndex ?? i, count)},${scale.y(point.value)}`)
        .join(" ");
      return `<polyline fill="none" stroke="${item.color}" stroke-width="3" points="${points}"></polyline>`;
    }).join("");
    const dots = series.map((item) => item.values
      .filter((point) => point.value != null && !Number.isNaN(point.value))
      .map((point, i) => `
      <circle cx="${scale.x(point.xIndex ?? i, count)}" cy="${scale.y(point.value)}" r="3" fill="${item.color}">
        <title>${item.name} ${point.period}: ${fmt.format(number(point.value))} ${unit}</title>
      </circle>
    `).join("")).join("");
    const monthLabels = (xLabels ?? (series[0]?.values ?? []).map((point) => point.label ?? point.period.slice(5))).map((label, i) => `
      <text x="${scale.x(i, count)}" y="${height - 12}" text-anchor="middle" class="chart-label">${label}</text>
    `).join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${lines}
        ${dots}
        ${monthLabels}
      </svg>
      ${legend(series.map((item) => ({ label: item.name, color: item.color })))}
    `;
  }

  function stackedBar(rows, keys, unit, xLabels) {
    const width = 760;
    const height = 300;
    const pad = { top: 18, right: 18, bottom: 44, left: 50 };
    const totals = rows.map((row) => row.values.reduce((acc, item) => acc + number(item.value), 0));
    const scale = chartScales(totals, width, height, pad);
    const band = (width - pad.left - pad.right) / Math.max(rows.length, 1);
    const barWidth = Math.max(16, band * 0.58);
    const bars = rows.map((row, i) => {
      const x = pad.left + i * band + (band - barWidth) / 2;
      let yTop = height - pad.bottom;
      return row.values.map((part) => {
        const h = (number(part.value) / (scale.max - scale.min)) * (height - pad.top - pad.bottom);
        yTop -= h;
        return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${part.key} ${row.period}: ${fmt.format(number(part.value))} ${unit}</title></rect>`;
      }).join("");
    }).join("");
    const monthLabels = (xLabels ?? rows.map((row) => row.label ?? row.period.slice(5))).map((label, i) => `
      <text x="${pad.left + i * band + band / 2}" y="${height - 12}" text-anchor="middle" class="chart-label">${label}</text>
    `).join("");
    const tickVals = [0, scale.max * 0.25, scale.max * 0.5, scale.max * 0.75, scale.max];
    const legendItems = keys.map((key) => {
      const found = rows[0]?.values.find((item) => item.key === key);
      return { label: key, color: found?.color ?? colors.other };
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
