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
    byId("dashboard-note").textContent = `JODI actuals only. Charts compare ${years.join(", ")} by gas-year month; ${gasYear} currently has ${rows.length} reported month${rows.length === 1 ? "" : "s"}.`;
    byId("line-chart-title").textContent = `Total Imports, ${years[0]} to ${years.at(-1)}`;
    byId("supply-title").textContent = `LNG and Pipeline Imports, ${years[0]} to ${years.at(-1)}`;
    byId("balance-title").textContent = `Demand, Production, Imports, ${years[0]} to ${years.at(-1)}`;
    renderKpis(rows);
    renderLineChart(years);
    renderStackedImports(years);
    renderBalanceChart(years);
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

  function renderStackedImports(years) {
    const rowsByYear = rowsByGasYear(years);
    const groups = data.gasYearMonths.map((month) => {
      return {
        label: month.label,
        bars: years.map((year, yearIndex) => {
          const row = rowForGasYearMonth(rowsByYear.get(year), month.index);
          const hasData = row && [row.totalImports, row.lngImports, row.pipelineImports].some((value) => value != null);
          const lng = number(row?.lngImports);
          const pipeline = number(row?.pipelineImports);
          const total = row?.totalImports != null ? number(row.totalImports) : lng + pipeline;
          const other = hasData ? Math.max(0, total - lng - pipeline) : null;
          return {
            year,
            yearIndex,
            yearColor: gasYearColors[yearIndex % gasYearColors.length],
            period: row?.period ?? `${year} ${month.label}`,
            total: hasData ? total : null,
            values: hasData ? [
              { key: "LNG", value: lng, color: colors.lng },
              { key: "Pipeline", value: pipeline, color: colors.pipeline },
              { key: "Other / rounding", value: other, color: colors.other },
            ] : [],
          };
        }),
      };
    });
    byId("stack-chart").innerHTML = groupedStackedBar(groups, ["LNG", "Pipeline", "Other / rounding"], years, "bcm", data.gasYearMonths.map((month) => month.label));
  }

  function renderBalanceChart(years) {
    const rowsByYear = rowsByGasYear(years);
    const metrics = [
      { name: "Calculated Demand", key: "calculatedDemand" },
      { name: "Production", key: "production" },
      { name: "Total Imports", key: "totalImports" },
    ];
    byId("balance-chart").innerHTML = balanceFacetChart(metrics, years, rowsByYear, "bcm", data.gasYearMonths.map((month) => month.label));
  }

  function rowsByGasYear(years) {
    return new Map(years.map((year) => [
      year,
      data.actuals.filter((row) => row.gasYear === year),
    ]));
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

  function groupedStackedBar(groups, keys, years, unit, xLabels) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 18, bottom: 48, left: 50 };
    const totals = groups.flatMap((group) => group.bars.map((bar) => bar.total));
    const scale = chartScales(totals, width, height, pad);
    const groupBand = (width - pad.left - pad.right) / Math.max(groups.length, 1);
    const barGap = 2;
    const maxBars = Math.max(...groups.map((group) => group.bars.length), 1);
    const barWidth = Math.max(4, (groupBand - 12 - barGap * (maxBars - 1)) / maxBars);
    const bars = groups.map((group, groupIndex) => {
      const barSetWidth = maxBars * barWidth + (maxBars - 1) * barGap;
      const groupX = pad.left + groupIndex * groupBand + (groupBand - barSetWidth) / 2;
      return group.bars.map((bar, barIndex) => {
        if (bar.total == null) return "";
        const x = groupX + barIndex * (barWidth + barGap);
        const baseline = height - pad.bottom;
        let yTop = baseline;
        const segments = bar.values.map((part) => {
          const h = (number(part.value) / (scale.max - scale.min)) * (height - pad.top - pad.bottom);
          yTop -= h;
          return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${part.key} ${bar.year} ${bar.period}: ${fmt.format(number(part.value))} ${unit}</title></rect>`;
        }).join("");
        const outlineHeight = Math.max(0, baseline - yTop);
        const outline = `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${outlineHeight}" fill="none" stroke="${bar.yearColor}" stroke-width="1.3"><title>${bar.year} ${bar.period}: ${fmt.format(number(bar.total))} ${unit}</title></rect>`;
        return `${segments}${outline}`;
      }).join("");
    }).join("");
    const monthLabels = (xLabels ?? groups.map((group) => group.label)).map((label, i) => `
      <text x="${pad.left + i * groupBand + groupBand / 2}" y="${height - 12}" text-anchor="middle" class="chart-label">${label}</text>
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
    const yearLegend = years.map((year, index) => ({
      label: year,
      color: gasYearColors[index % gasYearColors.length],
      outline: true,
    }));
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${tickVals.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
        ${monthLabels}
      </svg>
      ${legend(componentLegend)}
      ${legend(yearLegend)}
    `;
  }

  function balanceFacetChart(metrics, years, rowsByYear, unit, xLabels) {
    const width = 760;
    const height = 370;
    const pad = { top: 16, right: 18, bottom: 44, left: 50 };
    const facetGap = 24;
    const facetHeight = (height - pad.top - pad.bottom - facetGap * (metrics.length - 1)) / metrics.length;
    const plotWidth = width - pad.left - pad.right;
    const allValues = metrics.flatMap((metric) => years.flatMap((year) => {
      const rows = rowsByYear.get(year) ?? [];
      return data.gasYearMonths.map((month) => rowForGasYearMonth(rows, month.index)?.[metric.key] ?? null);
    }));
    const numeric = allValues.filter((value) => value != null && !Number.isNaN(value)).map(number);
    const max = Math.max(...numeric, 1);
    const min = 0;
    const count = xLabels?.length ?? data.gasYearMonths.length;
    const x = (i) => pad.left + (count === 1 ? 0 : (i / (count - 1)) * plotWidth);
    const y = (value, top) => top + (max - number(value)) / (max - min) * facetHeight;
    const tickVals = [0, max * 0.5, max];
    const facets = metrics.map((metric, metricIndex) => {
      const top = pad.top + metricIndex * (facetHeight + facetGap);
      const labelWidth = metric.name.length * 7.2 + 12;
      const grid = tickVals.map((tick) => `
        <line class="grid-line" x1="${pad.left}" y1="${y(tick, top)}" x2="${width - pad.right}" y2="${y(tick, top)}"></line>
        <text x="8" y="${y(tick, top) + 4}" class="chart-label">${fmt.format(tick)}</text>
      `).join("");
      const lines = years.map((year, yearIndex) => {
        const rows = rowsByYear.get(year) ?? [];
        const points = data.gasYearMonths.map((month, xIndex) => {
          const row = rowForGasYearMonth(rows, month.index);
          return {
            xIndex,
            period: row?.period ?? `${year} ${month.label}`,
            value: row?.[metric.key] ?? null,
          };
        }).filter((point) => point.value != null && !Number.isNaN(point.value));
        const polyline = points.map((point) => `${x(point.xIndex)},${y(point.value, top)}`).join(" ");
        const dots = points.map((point) => `
          <circle cx="${x(point.xIndex)}" cy="${y(point.value, top)}" r="2.4" fill="${gasYearColors[yearIndex % gasYearColors.length]}">
            <title>${metric.name} ${year} ${point.period}: ${fmt.format(number(point.value))} ${unit}</title>
          </circle>
        `).join("");
        return `
          <polyline fill="none" stroke="${gasYearColors[yearIndex % gasYearColors.length]}" stroke-width="2.3" points="${polyline}"></polyline>
          ${dots}
        `;
      }).join("");
      return `
        ${grid}
        ${lines}
        <rect x="${pad.left + 3}" y="${top + 2}" width="${labelWidth}" height="16" fill="#fff"></rect>
        <text x="${pad.left + 6}" y="${top + 13}" class="chart-label chart-facet-label">${metric.name}</text>
      `;
    }).join("");
    const monthLabels = (xLabels ?? data.gasYearMonths.map((month) => month.label)).map((label, i) => `
      <text x="${x(i)}" y="${height - 12}" text-anchor="middle" class="chart-label">${label}</text>
    `).join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${facets}
        ${monthLabels}
      </svg>
      ${legend(years.map((year, index) => ({ label: year, color: gasYearColors[index % gasYearColors.length] })))}
    `;
  }

  function legend(items) {
    return `<div class="legend">${items.map((item) => {
      const style = item.outline ? `background:transparent;border:2px solid ${item.color}` : `background:${item.color}`;
      return `<span><i class="swatch" style="${style}"></i>${item.label}</span>`;
    }).join("")}</div>`;
  }

  init();
})();
