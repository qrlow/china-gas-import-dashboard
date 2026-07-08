(function () {
  const data = window.CHINA_GAS_DATA;
  const YEAR_BASIS_STORAGE_KEY = "chinaGasYearBasis";
  const calendarMonths = [
    { index: 1, label: "Jan" },
    { index: 2, label: "Feb" },
    { index: 3, label: "Mar" },
    { index: 4, label: "Apr" },
    { index: 5, label: "May" },
    { index: 6, label: "Jun" },
    { index: 7, label: "Jul" },
    { index: 8, label: "Aug" },
    { index: 9, label: "Sep" },
    { index: 10, label: "Oct" },
    { index: 11, label: "Nov" },
    { index: 12, label: "Dec" },
  ];
  let yearBasis = localStorage.getItem(YEAR_BASIS_STORAGE_KEY) === "calendar" ? "calendar" : "gas";
  let selectedYear = defaultYear(yearBasis);

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

  function calendarYear(period) {
    return period.slice(0, 4);
  }

  function calendarMonth(period) {
    return Number(period.slice(5, 7));
  }

  function calendarYears() {
    return [...new Set(data.actuals.map((row) => calendarYear(row.period)))].sort();
  }

  function yearOptions() {
    return yearBasis === "gas" ? data.gasYears : calendarYears();
  }

  function defaultYear(basis) {
    return basis === "gas" ? data.meta.currentGasYear : calendarYear(data.meta.latestActualPeriod);
  }

  function periodLabel() {
    return yearBasis === "gas" ? "Gas year" : "Calendar year";
  }

  function basisRangeText() {
    return yearBasis === "gas" ? "Oct-Sep" : "Jan-Dec";
  }

  function monthAxis() {
    return yearBasis === "gas" ? data.gasYearMonths : calendarMonths;
  }

  function rowYear(row) {
    return yearBasis === "gas" ? row.gasYear : calendarYear(row.period);
  }

  function rowMonthIndex(row) {
    return yearBasis === "gas" ? row.gasYearMonth : calendarMonth(row.period);
  }

  function periodFallback(year, month) {
    if (yearBasis === "gas") return `${year} ${month.label}`;
    return `${year}-${String(month.index).padStart(2, "0")}`;
  }

  function sum(rows, getter) {
    return rows.reduce((acc, row) => acc + number(getter(row)), 0);
  }

  function activeRows() {
    return data.actuals
      .filter((row) => rowYear(row) === selectedYear)
      .sort((a, b) => rowMonthIndex(a) - rowMonthIndex(b));
  }

  function activeYears() {
    const options = yearOptions();
    const index = options.indexOf(selectedYear);
    return options.slice(Math.max(0, index - 4), index + 1);
  }

  function averageYears() {
    const options = yearOptions();
    const index = options.indexOf(selectedYear);
    return options.slice(Math.max(0, index - 5), index);
  }

  function rowForMonth(rows, monthIndex) {
    return rows?.find((row) => rowMonthIndex(row) === monthIndex);
  }

  function yearRangeLabel(years) {
    if (!years.length) return "history";
    return years.length === 1 ? years[0] : `${years[0]}-${years.at(-1)}`;
  }

  function init() {
    byId("latest-actual").textContent = `Latest actual: ${data.meta.latestActualPeriod}`;

    const select = byId("gas-year-select");
    select.addEventListener("change", () => {
      selectedYear = select.value;
      render();
    });
    for (const button of document.querySelectorAll("[data-year-basis]")) {
      button.addEventListener("click", () => {
        if (button.dataset.yearBasis === yearBasis) return;
        yearBasis = button.dataset.yearBasis;
        localStorage.setItem(YEAR_BASIS_STORAGE_KEY, yearBasis);
        selectedYear = defaultYear(yearBasis);
        render();
      });
    }

    renderSources();
    renderDefinitions();
    render();
  }

  function render() {
    renderControls();
    const rows = activeRows();
    const years = activeYears();
    const avgYears = averageYears();
    const first = rows[0]?.period ?? "";
    const last = rows.at(-1)?.period ?? "";
    byId("gas-year-range").textContent = `${periodLabel()} ${selectedYear}: ${first} to ${last}`;
    byId("dashboard-note").textContent = `JODI actuals only. ${periodLabel()} view (${basisRangeText()}). Gross imports and balance compare ${years.join(", ")}; the import stack shows ${selectedYear} against the prior-five-year monthly average.`;
    byId("line-chart-title").textContent = `Total Imports, ${years[0]} to ${years.at(-1)}`;
    byId("supply-title").textContent = `LNG and Pipeline Imports, ${selectedYear} vs ${yearRangeLabel(avgYears)} Avg`;
    byId("balance-title").textContent = `Calculated Demand, ${years[0]} to ${years.at(-1)}`;
    renderKpis(rows);
    renderLineChart(years);
    renderStackedImports(rows, avgYears);
    renderBalanceChart(years);
    renderTable(rows);
  }

  function renderControls() {
    const options = yearOptions();
    if (!options.includes(selectedYear)) selectedYear = options.at(-1);
    byId("period-select-label").textContent = periodLabel();
    byId("gas-year-select").innerHTML = options.map((year) => `
      <option value="${year}" ${year === selectedYear ? "selected" : ""}>${year}</option>
    `).join("");
    for (const button of document.querySelectorAll("[data-year-basis]")) {
      const active = button.dataset.yearBasis === yearBasis;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function renderKpis(rows) {
    const items = [
      [`${periodLabel()} Gross Imports`, `${fmt.format(sum(rows, (row) => row.totalImports))} bcm`, `${rows.length} reported month${rows.length === 1 ? "" : "s"}`],
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
    const months = monthAxis();
    const series = years.map((year, index) => {
      const rows = data.actuals.filter((row) => rowYear(row) === year);
      return {
        name: year,
        color: gasYearColors[index % gasYearColors.length],
        values: months.map((month, xIndex) => {
          const row = rowForMonth(rows, month.index);
          return {
            xIndex,
            label: month.label,
            period: row?.period ?? periodFallback(year, month),
            value: row?.totalImports ?? null,
          };
        }),
      };
    });
    byId("line-chart").innerHTML = lineChart(series, "bcm", months.map((month) => month.label));
  }

  function renderStackedImports(rows, avgYears) {
    const months = monthAxis();
    const chartRows = months.map((month, xIndex) => {
      const row = rowForMonth(rows, month.index);
      const hasData = row && [row.totalImports, row.lngImports, row.pipelineImports].some((value) => value != null);
      const lng = number(row?.lngImports);
      const pipeline = number(row?.pipelineImports);
      const total = row?.totalImports != null ? number(row.totalImports) : lng + pipeline;
      const other = hasData ? Math.max(0, total - lng - pipeline) : null;
      return {
        xIndex,
        period: row?.period ?? periodFallback(selectedYear, month),
        label: month.label,
        total: hasData ? total : null,
        values: hasData ? [
          { key: "LNG", value: lng, color: colors.lng },
          { key: "Pipeline", value: pipeline, color: colors.pipeline },
          { key: "Other / rounding", value: other, color: colors.other },
        ] : [],
      };
    });
    const avgSeries = [
      { label: "Prior 5-year avg total", color: colors.total, dash: "7 5", points: monthlyAverageSeries(avgYears, "totalImports") },
      { label: "Prior 5-year avg LNG", color: colors.lng, dash: "3 4", points: monthlyAverageSeries(avgYears, "lngImports") },
    ];
    byId("stack-chart").innerHTML = stackedBarWithAverage(chartRows, avgSeries, ["LNG", "Pipeline", "Other / rounding"], "bcm", months.map((month) => month.label));
  }

  function renderBalanceChart(years) {
    const months = monthAxis();
    const series = years.map((year, index) => {
      const rows = data.actuals.filter((row) => rowYear(row) === year);
      return {
        name: year,
        color: gasYearColors[index % gasYearColors.length],
        values: months.map((month, xIndex) => {
          const row = rowForMonth(rows, month.index);
          return {
            xIndex,
            label: month.label,
            period: row?.period ?? periodFallback(year, month),
            value: row?.calculatedDemand ?? null,
          };
        }),
      };
    });
    byId("balance-chart").innerHTML = lineChart(series, "bcm", months.map((month) => month.label));
  }

  function rowsByYear(years) {
    return new Map(years.map((year) => [
      year,
      data.actuals.filter((row) => rowYear(row) === year),
    ]));
  }

  function monthlyAverageSeries(years, key) {
    const groupedRows = rowsByYear(years);
    return monthAxis().map((month, xIndex) => {
      const values = years
        .map((year) => rowForMonth(groupedRows.get(year), month.index)?.[key])
        .filter((value) => value != null && !Number.isNaN(value));
      return {
        xIndex,
        label: month.label,
        period: `${yearRangeLabel(years)} ${month.label}`,
        yearsUsed: values.length,
        value: values.length ? values.reduce((acc, value) => acc + number(value), 0) / values.length : null,
      };
    });
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

  function stackedBarWithAverage(rows, avgSeries, keys, unit, xLabels) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 18, bottom: 48, left: 50 };
    const totals = rows.map((row) => row.total).concat(avgSeries.flatMap((series) => series.points.map((point) => point.value)));
    const scale = chartScales(totals, width, height, pad);
    const count = xLabels?.length ?? rows.length;
    const band = (width - pad.left - pad.right) / Math.max(rows.length, 1);
    const barWidth = Math.max(16, band * 0.58);
    const bars = rows.map((row, i) => {
      if (row.total == null) return "";
      const x = pad.left + i * band + (band - barWidth) / 2;
      let yTop = height - pad.bottom;
      return row.values.map((part) => {
        const h = (number(part.value) / (scale.max - scale.min)) * (height - pad.top - pad.bottom);
        yTop -= h;
        return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${part.key} ${row.period}: ${fmt.format(number(part.value))} ${unit}</title></rect>`;
      }).join("");
    }).join("");
    const avgLines = avgSeries.map((series) => {
      const points = series.points
        .filter((point) => point.value != null && !Number.isNaN(point.value))
        .map((point) => `${scale.x(point.xIndex, count)},${scale.y(point.value)}`)
        .join(" ");
      return `<polyline fill="none" stroke="${series.color}" stroke-width="3" stroke-dasharray="${series.dash}" points="${points}"></polyline>`;
    }).join("");
    const avgDots = avgSeries.map((series) => series.points
      .filter((point) => point.value != null && !Number.isNaN(point.value))
      .map((point) => `
        <circle cx="${scale.x(point.xIndex, count)}" cy="${scale.y(point.value)}" r="3" fill="${series.color}">
          <title>${series.label} (${point.yearsUsed} years) ${point.period}: ${fmt.format(number(point.value))} ${unit}</title>
        </circle>
      `).join("")).join("");
    const monthLabels = (xLabels ?? rows.map((row) => row.label)).map((label, i) => `
      <text x="${scale.x(i, count)}" y="${height - 12}" text-anchor="middle" class="chart-label">${label}</text>
    `).join("");
    const tickVals = [0, scale.max * 0.25, scale.max * 0.5, scale.max * 0.75, scale.max];
    const componentLegend = keys.map((key) => {
      const componentColors = {
        LNG: colors.lng,
        Pipeline: colors.pipeline,
        "Other / rounding": colors.other,
      };
      return { label: key, color: componentColors[key] ?? colors.other };
    });
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${tickVals.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
        ${avgLines}
        ${avgDots}
        ${monthLabels}
      </svg>
      ${legend(componentLegend.concat(avgSeries.map((series) => ({ label: series.label, color: series.color, line: true, dash: true }))))}
    `;
  }

  function legend(items) {
    return `<div class="legend">${items.map((item) => {
      const style = item.line
        ? `background:transparent;border-top:3px ${item.dash ? "dashed" : "solid"} ${item.color};width:18px;height:0;border-radius:0`
        : item.outline ? `background:transparent;border:2px solid ${item.color}` : `background:${item.color}`;
      return `<span><i class="swatch" style="${style}"></i>${item.label}</span>`;
    }).join("")}</div>`;
  }

  init();
})();
