(function () {
  const data = window.CHINA_GAS_SECTOR_DATA;
  const sectors = data.sectorDefinitions;
  let gasYear = data.meta.currentGasYear;

  const fmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  const fmt0 = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });
  const pctFmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });

  function byId(id) {
    return document.getElementById(id);
  }

  function number(value) {
    return value == null || Number.isNaN(value) ? 0 : value;
  }

  function display(value) {
    return value == null || Number.isNaN(value) ? "" : fmt.format(value);
  }

  function percent(value) {
    return value == null || Number.isNaN(value) ? "" : `${pctFmt.format(value * 100)}%`;
  }

  function sector(key) {
    return sectors.find((item) => item.key === key);
  }

  function activeRows() {
    return data.monthly
      .filter((row) => row.gasYear === gasYear)
      .sort((a, b) => a.gasYearMonth - b.gasYearMonth);
  }

  function sum(rows, getter) {
    return rows.reduce((acc, row) => acc + number(getter(row)), 0);
  }

  function rowForGasYearMonth(rows, monthIndex) {
    return rows.find((row) => row.gasYearMonth === monthIndex);
  }

  function gasYearStart(gasYearLabel) {
    return Number(gasYearLabel.slice(0, 4));
  }

  function periodForGasYearMonth(gasYearLabel, index) {
    const start = gasYearStart(gasYearLabel);
    const month = index <= 3 ? index + 9 : index - 3;
    const year = index <= 3 ? start : start + 1;
    return `${year}-${String(month).padStart(2, "0")}`;
  }

  function formatPeriodShort(period) {
    const [year, month] = period.split("-");
    const date = new Date(`${year}-${month}-01T00:00:00Z`);
    const label = date.toLocaleString("en", { month: "short", timeZone: "UTC" });
    return `${label} '${year.slice(2)}`;
  }

  function init() {
    byId("latest-modeled").textContent = `Latest modeled: ${data.meta.latestModeledPeriod}`;
    const select = byId("sector-gas-year-select");
    select.innerHTML = data.gasYears.map((year) => `
      <option value="${year}" ${year === gasYear ? "selected" : ""}>${year}</option>
    `).join("");
    select.addEventListener("change", () => {
      gasYear = select.value;
      render();
    });

    renderMethodology();
    renderAnchorShares();
    renderSectorDefinitions();
    renderSources();
    render();
  }

  function render() {
    const rows = activeRows();
    const first = rows[0]?.period ?? "";
    const last = rows.at(-1)?.period ?? "";
    byId("sector-gas-year-range").textContent = `${gasYear}: ${first} to ${last}`;
    byId("sector-dashboard-note").textContent = "Historical model only. JODI TOTDEMC is treated as apparent demand; storage builds/withdrawals are not separated from the sector allocation.";
    byId("sector-stack-title").textContent = `Modeled Apparent Sector Stack, ${gasYear}`;
    byId("sector-share-title").textContent = `Monthly Sector Shares, ${gasYear}`;
    byId("proxy-title").textContent = `Carbon Monitor Monthly Index, ${gasYear}`;
    byId("sector-table-title").textContent = `Modeled Monthly Apparent Sector Demand, ${gasYear}`;
    renderKpis(rows);
    renderSectorStack(rows);
    renderShareChart(rows);
    renderProxyChart(rows);
    renderTable(rows);
  }

  function renderKpis(rows) {
    const total = sum(rows, (row) => row.totalDemand);
    const latest = rows.at(-1);
    const sectorTotals = sectors.map((item) => ({
      ...item,
      value: sum(rows, (row) => row.sectors[item.key]),
    }));
    const largest = sectorTotals.reduce((best, item) => (item.value > best.value ? item : best), sectorTotals[0]);
    const latestSectorValues = latest ? sectors.map((item) => ({ ...item, value: latest.sectors[item.key] })) : [];
    const latestSector = latestSectorValues.length
      ? latestSectorValues.reduce((best, item) => (item.value > best.value ? item : best), latestSectorValues[0])
      : null;
    const items = [
      ["Modeled Apparent Demand", `${fmt.format(total)} bcm`, `${rows.length} modeled month${rows.length === 1 ? "" : "s"}`],
      [largest.shortLabel, `${fmt.format(largest.value)} bcm`, `${percent(total ? largest.value / total : null)} of selected gas year`],
      ["Latest Month", latest ? `${fmt.format(latest.totalDemand)} bcm` : "", latest ? `${latest.period}, JODI apparent total` : ""],
      ["Latest Lead Sector", latestSector ? latestSector.shortLabel : "", latestSector && latest ? `${fmt.format(latestSector.value)} bcm in ${latest.period}` : ""],
    ];
    byId("sector-kpis").innerHTML = items.map(([label, value, sub]) => `
      <article class="kpi">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
        <div class="sub">${sub}</div>
      </article>
    `).join("");
  }

  function completeRows(rows) {
    return data.gasYearMonths.map((month, xIndex) => {
      const row = rowForGasYearMonth(rows, month.index);
      const period = row?.period ?? periodForGasYearMonth(gasYear, month.index);
      return {
        ...row,
        xIndex,
        period,
        label: formatPeriodShort(period),
        hasData: Boolean(row),
      };
    });
  }

  function renderSectorStack(rows) {
    const chartRows = completeRows(rows).map((row) => ({
      ...row,
      total: row.hasData ? row.totalDemand : null,
      parts: row.hasData ? sectors.map((item) => ({
        key: item.key,
        label: item.shortLabel,
        color: item.color,
        value: row.sectors[item.key],
      })) : [],
    }));
    byId("sector-stack-chart").innerHTML = stackedBarChart(chartRows, "bcm");
  }

  function renderShareChart(rows) {
    const chartRows = completeRows(rows);
    const series = sectors.map((item) => ({
      name: item.shortLabel,
      color: item.color,
      values: chartRows.map((row) => ({
        xIndex: row.xIndex,
        period: row.period,
        label: row.label,
        value: row.hasData ? row.shares[item.key] * 100 : null,
      })),
    }));
    byId("sector-share-chart").innerHTML = lineChart(series, "%", chartRows.map((row) => row.label), { minZero: true });
  }

  function renderProxyChart(rows) {
    const chartRows = completeRows(rows);
    const series = sectors.map((item) => ({
      name: item.shortLabel,
      color: item.color,
      values: chartRows.map((row) => ({
        xIndex: row.xIndex,
        period: row.period,
        label: row.label,
        value: row.hasData ? row.proxyIndex[item.key] : null,
      })),
    }));
    byId("proxy-chart").innerHTML = lineChart(series, "index", chartRows.map((row) => row.label), { minZero: false, reference: 1 });
  }

  function renderMethodology() {
    byId("methodology").innerHTML = data.methodology.map((item) => `
      <div class="assumption">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `).join("");
  }

  function renderAnchorShares() {
    const anchorRows = data.annualAnchors.map((item) => {
      const def = sector(item.sector);
      return `
        <div class="anchor-row">
          <span><i class="swatch" style="background:${def.color}"></i>${def.label}</span>
          <strong>${pctFmt.format(item.normalizedShare * 100)}%</strong>
        </div>
      `;
    }).join("");
    const sourceRows = (data.ieaFinalConsumptionRows ?? []).map((item) => `
      <div class="source-row">
        <span>${item.sector}</span>
        <strong>${fmt0.format(item.valueTJ)}</strong>
        <span>${percent(item.shareOfFinalConsumption)}</span>
        <span>${item.dashboardBucket}</span>
      </div>
    `).join("");
    const anchorCalc = data.anchorCalculation;
    const calculationRows = (anchorCalc?.rows ?? []).map((item) => `
      <div class="source-row">
        <span>${item.bucket}</span>
        <strong>${fmt.format(item.valueBcm)}</strong>
        <span>${percent(item.share)}</span>
        <span>${item.note}</span>
      </div>
    `).join("");
    byId("anchor-shares").innerHTML = `
      ${anchorRows}
      <p class="panel-note">Source-visible annual anchor. Power is now a residual bucket, not a separately reported IEA power value.</p>
      <h3 class="subhead">Anchor calculation, 2023</h3>
      <p class="panel-note">JODI apparent demand: ${fmt.format(anchorCalc?.jodiApparentDemandBcm)} bcm. IEA conversion: ${fmt0.format(anchorCalc?.grossHeatValueTJPerBcm)} TJ per bcm.</p>
      <div class="source-grid" aria-label="Annual anchor calculation">
        <div class="source-row source-row-head">
          <span>Bucket</span>
          <span>bcm</span>
          <span>Share</span>
          <span>Method</span>
        </div>
        ${calculationRows}
      </div>
      <h3 class="subhead">IEA final consumption input, 2023</h3>
      <div class="source-grid" aria-label="IEA final consumption values">
        <div class="source-row source-row-head">
          <span>IEA sector</span>
          <span>TJ gross</span>
          <span>Share</span>
          <span>Dashboard bucket</span>
        </div>
        ${sourceRows}
      </div>
    `;
  }

  function renderSectorDefinitions() {
    byId("sector-definitions").innerHTML = sectors.map((item) => `
      <div class="assumption">
        <h3><i class="swatch" style="background:${item.color}"></i>${item.label}</h3>
        <p>${item.method}</p>
      </div>
    `).join("");
  }

  function renderSources() {
    byId("sector-sources").innerHTML = data.sources.map((source) => `
      <div class="source">
        <h3>${source.name}</h3>
        <p>${source.note}</p>
        ${source.url ? `<p><a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a></p>` : ""}
      </div>
    `).join("");
  }

  function renderTable(rows) {
    const tbody = byId("sector-table").querySelector("tbody");
    tbody.innerHTML = rows.map((row) => `
      <tr>
        <td>${row.period}</td>
        <td class="num">${display(row.totalDemand)}</td>
        <td class="num">${display(row.sectors.power)}</td>
        <td class="num">${display(row.sectors.industrial)}</td>
        <td class="num">${display(row.sectors.buildings)}</td>
        <td class="num">${display(row.sectors.transport)}</td>
        <td class="num">${percent(row.shares.power)}</td>
        <td class="num">${percent(row.shares.industrial)}</td>
        <td class="num">${percent(row.shares.buildings)}</td>
        <td class="num">${percent(row.shares.transport)}</td>
      </tr>
    `).join("");
  }

  function chartScales(values, width, height, pad, options = {}) {
    const numeric = values.filter((value) => value != null && !Number.isNaN(value)).map(number);
    const max = Math.max(...numeric, options.reference ?? 1);
    const min = options.minZero === false ? Math.min(...numeric, options.reference ?? max) : 0;
    const paddedMax = max === min ? max + 1 : max * 1.08;
    const x = (i, count) => pad.left + (count === 1 ? 0 : (i / (count - 1)) * (width - pad.left - pad.right));
    const y = (value) => pad.top + (paddedMax - number(value)) / (paddedMax - min) * (height - pad.top - pad.bottom);
    return { max: paddedMax, min, x, y };
  }

  function lineChart(series, unit, xLabels, options = {}) {
    const width = 760;
    const height = 300;
    const pad = { top: 18, right: 18, bottom: 48, left: 50 };
    const allValues = series.flatMap((item) => item.values.map((point) => point.value));
    const scale = chartScales(allValues, width, height, pad, options);
    const count = xLabels.length;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const reference = options.reference == null ? "" : `
      <line x1="${pad.left}" y1="${scale.y(options.reference)}" x2="${width - pad.right}" y2="${scale.y(options.reference)}" stroke="#9aa8b5" stroke-width="1.5" stroke-dasharray="5 5"></line>
    `;
    const lines = series.map((item) => {
      const points = item.values
        .filter((point) => point.value != null && !Number.isNaN(point.value))
        .map((point) => `${scale.x(point.xIndex, count)},${scale.y(point.value)}`)
        .join(" ");
      return `<polyline fill="none" stroke="${item.color}" stroke-width="3" points="${points}"></polyline>`;
    }).join("");
    const dots = series.map((item) => item.values
      .filter((point) => point.value != null && !Number.isNaN(point.value))
      .map((point) => `
        <circle cx="${scale.x(point.xIndex, count)}" cy="${scale.y(point.value)}" r="3" fill="${item.color}">
          <title>${item.name} ${point.period}: ${fmt.format(number(point.value))} ${unit}</title>
        </circle>
      `).join("")).join("");
    const monthLabels = xLabels.map((label, i) => `
      <text x="${scale.x(i, count)}" y="${height - 14}" text-anchor="middle" class="chart-label">${label}</text>
    `).join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${reference}
        ${lines}
        ${dots}
        ${monthLabels}
      </svg>
      ${legend(series.map((item) => ({ label: item.name, color: item.color })))}
    `;
  }

  function stackedBarChart(rows, unit) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 18, bottom: 52, left: 50 };
    const scale = chartScales(rows.map((row) => row.total), width, height, pad, { minZero: true });
    const band = (width - pad.left - pad.right) / Math.max(rows.length, 1);
    const barWidth = Math.max(16, band * 0.58);
    const bars = rows.map((row, i) => {
      if (row.total == null) return "";
      const x = pad.left + i * band + (band - barWidth) / 2;
      let yTop = height - pad.bottom;
      return row.parts.map((part) => {
        const h = (number(part.value) / (scale.max - scale.min)) * (height - pad.top - pad.bottom);
        yTop -= h;
        return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${part.label} ${row.period}: ${fmt.format(number(part.value))} ${unit}</title></rect>`;
      }).join("");
    }).join("");
    const labels = rows.map((row, i) => `
      <text x="${pad.left + i * band + band / 2}" y="${height - 16}" text-anchor="middle" class="chart-label">${row.label}</text>
    `).join("");
    const ticks = [0, scale.max * 0.25, scale.max * 0.5, scale.max * 0.75, scale.max];
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
        ${labels}
      </svg>
      ${legend(sectors.map((item) => ({ label: item.shortLabel, color: item.color })))}
    `;
  }

  function legend(items) {
    return `<div class="legend">${items.map((item) => `
      <span><i class="swatch" style="background:${item.color}"></i>${item.label}</span>
    `).join("")}</div>`;
  }

  init();
})();
