(function () {
  const data = window.CHINA_GAS_SWITCHING_DATA;
  const constants = data.constants;
  const scenarioByKey = new Map(data.scenarios.map((scenario) => [scenario.key, scenario]));
  let scenarioKey = data.defaultScenarioKey;
  let inputs = { ...scenarioByKey.get(scenarioKey) };

  const fmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
  const fmt0 = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });
  const pctFmt = new Intl.NumberFormat("en", { maximumFractionDigits: 1, minimumFractionDigits: 1 });

  const colors = {
    gas: "#3268a8",
    coal: "#917338",
    gasPower: "#7b5bc7",
    coalPower: "#3d4f80",
    fuel: "#3c78b5",
    vom: "#16837a",
    carbon: "#b14b4b",
    saving: "#16837a",
    envelope: "#c4821e",
    feasible: "#3268a8",
    grid: "#e5ebf1",
    muted: "#5d6b78",
  };

  const inputDefs = [
    { key: "gasPriceUsdMmbtu", label: "Gas Price", unit: "USD/MBtu", min: 2, max: 30, step: 0.5, digits: 1 },
    { key: "coalPriceUsdTonne", label: "Coal Price", unit: "USD/t", min: 50, max: 180, step: 5, digits: 0 },
    { key: "carbonPriceUsdTonne", label: "CO2 Price", unit: "USD/t", min: 0, max: 150, step: 5, digits: 0 },
    { key: "gasEfficiency", label: "Gas Efficiency", unit: "%", min: 0.42, max: 0.62, step: 0.01, digits: 0, percent: true },
    { key: "coalEfficiency", label: "Coal Efficiency", unit: "%", min: 0.32, max: 0.45, step: 0.01, digits: 0, percent: true },
    { key: "operatingAvailability", label: "Coal Availability", unit: "%", min: 0, max: 1, step: 0.01, digits: 0, percent: true },
    { key: "peakGasReservation", label: "Peak Gas Reserved", unit: "%", min: 0, max: 0.6, step: 0.01, digits: 0, percent: true },
    { key: "renewableNuclearStress", label: "Thermal Stress", unit: "%", min: 0, max: 0.5, step: 0.01, digits: 0, percent: true },
    { key: "policySupport", label: "Policy Support", unit: "%", min: 0, max: 1, step: 0.01, digits: 0, percent: true },
  ];

  function byId(id) {
    return document.getElementById(id);
  }

  function number(value) {
    return value == null || Number.isNaN(value) ? 0 : Number(value);
  }

  function clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(min, value));
  }

  function round(value, digits = 3) {
    const scale = 10 ** digits;
    return Math.round(value * scale) / scale;
  }

  function pct(value) {
    return `${pctFmt.format(number(value) * 100)}%`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatInputValue(def, value) {
    if (def.percent) return pct(value);
    return `${new Intl.NumberFormat("en", { maximumFractionDigits: def.digits }).format(value)} ${def.unit}`;
  }

  function compute(rawInputs) {
    const coalThermal = constants.defaultCoalMwhThermalPerTonne;
    const gasFuel = rawInputs.gasPriceUsdMmbtu * constants.mmbtuPerMwhThermal / rawInputs.gasEfficiency;
    const coalFuel = rawInputs.coalPriceUsdTonne / coalThermal / rawInputs.coalEfficiency;
    const gasCarbon = rawInputs.carbonPriceUsdTonne * constants.gasEmissionTco2PerMwhThermal / rawInputs.gasEfficiency;
    const coalCarbon = rawInputs.carbonPriceUsdTonne * constants.coalEmissionTco2PerMwhThermal / rawInputs.coalEfficiency;
    const gasVom = constants.defaultGasVariableOMUsdMwh;
    const coalVom = constants.defaultCoalVariableOMUsdMwh;
    const gasSrmc = gasFuel + gasCarbon + gasVom;
    const coalSrmc = coalFuel + coalCarbon + coalVom;
    const costGap = gasSrmc - coalSrmc;
    const priceActivation = clamp(costGap / constants.fullSwitchCostGapUsdMwh);
    const systemFactor = clamp(rawInputs.operatingAvailability)
      * (1 - clamp(rawInputs.peakGasReservation))
      * (1 - clamp(rawInputs.renewableNuclearStress))
      * clamp(rawInputs.policySupport);
    const factor = priceActivation * systemFactor;
    const gasSavingMidBcm = data.chinaEnvelope.chinaMidBcm * factor;
    const gasSavingLowBcm = data.chinaEnvelope.chinaLowBcm * factor;
    const gasSavingHighBcm = data.chinaEnvelope.chinaHighBcm * factor;
    const generationTwh = gasSavingMidBcm * constants.gasTwhThermalPerBcm * rawInputs.gasEfficiency;
    const coalRequiredMt = generationTwh / (coalThermal * rawInputs.coalEfficiency);
    const gasCo2AvoidedMt = gasSavingMidBcm * constants.gasTwhThermalPerBcm * constants.gasEmissionTco2PerMwhThermal;
    const coalCo2AddedMt = coalRequiredMt * coalThermal * constants.coalEmissionTco2PerMwhThermal;
    const co2DeltaMt = coalCo2AddedMt - gasCo2AvoidedMt;
    const gasCarbonNoFuel = rawInputs.carbonPriceUsdTonne * constants.gasEmissionTco2PerMwhThermal / rawInputs.gasEfficiency;
    const parityGasPrice = Math.max(0, (coalSrmc - gasVom - gasCarbonNoFuel) * rawInputs.gasEfficiency / constants.mmbtuPerMwhThermal);
    const carbonDenominator = (constants.coalEmissionTco2PerMwhThermal / rawInputs.coalEfficiency) - (constants.gasEmissionTco2PerMwhThermal / rawInputs.gasEfficiency);
    const carbonParity = carbonDenominator > 0
      ? Math.max(0, (gasFuel + gasVom - coalFuel - coalVom) / carbonDenominator)
      : null;
    const latestCarbonGasGenerationTwh = data.carbonPower?.latestTwelveMonths?.gasGenerationTwh ?? null;
    const latestCarbonGasBurnBcm = latestCarbonGasGenerationTwh
      ? latestCarbonGasGenerationTwh / constants.gasTwhThermalPerBcm / rawInputs.gasEfficiency
      : null;
    const gasSavingShareOfObservedGasPowerBurn = latestCarbonGasBurnBcm
      ? gasSavingMidBcm / latestCarbonGasBurnBcm
      : null;
    const powerShiftShareOfObservedGasGeneration = latestCarbonGasGenerationTwh
      ? generationTwh / latestCarbonGasGenerationTwh
      : null;

    const monthly = data.monthlyShape.map((row) => {
      const gasSavingBcm = gasSavingMidBcm * row.normalizedWeight;
      const powerShiftTwh = gasSavingBcm * constants.gasTwhThermalPerBcm * rawInputs.gasEfficiency;
      const coalMt = powerShiftTwh / (coalThermal * rawInputs.coalEfficiency);
      const gasAvoided = gasSavingBcm * constants.gasTwhThermalPerBcm * constants.gasEmissionTco2PerMwhThermal;
      const coalAdded = coalMt * coalThermal * constants.coalEmissionTco2PerMwhThermal;
      return {
        ...row,
        gasSavingBcm,
        powerShiftTwh,
        coalMt,
        co2DeltaMt: coalAdded - gasAvoided,
      };
    });

    const regions = data.regionalClusters.map((cluster) => ({
      ...cluster,
      feasibleMidBcm: gasSavingMidBcm * cluster.share,
      feasibleLowBcm: gasSavingLowBcm * cluster.share,
      feasibleHighBcm: gasSavingHighBcm * cluster.share,
    }));

    return {
      gasFuel,
      gasCarbon,
      gasVom,
      gasSrmc,
      coalFuel,
      coalCarbon,
      coalVom,
      coalSrmc,
      costGap,
      priceActivation,
      systemFactor,
      factor,
      gasSavingMidBcm,
      gasSavingLowBcm,
      gasSavingHighBcm,
      generationTwh,
      coalRequiredMt,
      gasCo2AvoidedMt,
      coalCo2AddedMt,
      co2DeltaMt,
      parityGasPrice,
      carbonParity,
      latestCarbonGasBurnBcm,
      gasSavingShareOfObservedGasPowerBurn,
      powerShiftShareOfObservedGasGeneration,
      direction: costGap > 0 ? "Gas-to-coal" : "Coal-to-gas",
      monthly,
      regions,
    };
  }

  function init() {
    byId("switch-latest").textContent = `Latest actual: ${data.meta.latestActualPeriod}`;
    byId("switch-report").textContent = data.meta.report;
    const select = byId("switch-scenario");
    select.innerHTML = data.scenarios.map((scenario) => `
      <option value="${scenario.key}" ${scenario.key === scenarioKey ? "selected" : ""}>${scenario.label}</option>
    `).join("");
    select.addEventListener("change", () => {
      scenarioKey = select.value;
      inputs = { ...scenarioByKey.get(scenarioKey) };
      renderInputs();
      render();
    });

    renderInputs();
    renderStatic();
    render();
  }

  function renderInputs() {
    byId("switch-inputs").innerHTML = inputDefs.map((def) => {
      const value = inputs[def.key];
      return `
        <article class="input-card">
          <div class="input-head">
            <label for="input-${def.key}">${def.label}</label>
            <strong id="value-${def.key}">${formatInputValue(def, value)}</strong>
          </div>
          <input id="input-${def.key}" type="range" min="${def.min}" max="${def.max}" step="${def.step}" value="${value}">
        </article>
      `;
    }).join("");

    for (const def of inputDefs) {
      byId(`input-${def.key}`).addEventListener("input", (event) => {
        inputs[def.key] = Number(event.target.value);
        byId(`value-${def.key}`).textContent = formatInputValue(def, inputs[def.key]);
        render();
      });
    }
  }

  function render() {
    const scenario = scenarioByKey.get(scenarioKey);
    const result = compute(inputs);
    byId("switch-note").textContent = `${scenario.note} Cost direction: ${result.direction}.`;
    renderKpis(result);
    renderCarbonPowerContext(result);
    byId("switch-cost-chart").innerHTML = costChart(result);
    byId("switch-monthly-chart").innerHTML = monthlyChart(result);
    byId("switch-region-chart").innerHTML = regionChart(result);
    byId("switch-sensitivity-chart").innerHTML = sensitivityChart(result);
    renderMethodology(result);
    renderTable(result.monthly);
  }

  function renderKpis(result) {
    const items = [
      [
        "Cost Gap",
        `${fmt.format(result.costGap)} USD/MWh`,
        result.costGap > 0 ? "Gas generation screens above coal" : "Gas screens below coal",
      ],
      [
        "Feasible Gas Saving",
        `${fmt.format(result.gasSavingMidBcm)} bcm/yr`,
        `${fmt.format(result.gasSavingLowBcm)}-${fmt.format(result.gasSavingHighBcm)} bcm/yr range`,
      ],
      [
        "Power Shift",
        `${fmt.format(result.generationTwh)} TWh/yr`,
        `${fmt.format(result.coalRequiredMt)} Mt coal required`,
      ],
      [
        "CO2 Delta",
        `${fmt.format(result.co2DeltaMt)} Mt/yr`,
        `${fmt.format(result.gasCo2AvoidedMt)} avoided, ${fmt.format(result.coalCo2AddedMt)} added`,
      ],
    ];
    byId("switch-kpis").innerHTML = items.map(([label, value, sub]) => `
      <article class="kpi">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
        <div class="sub">${sub}</div>
      </article>
    `).join("");
  }

  function renderStatic() {
    byId("switch-carbon-power-chart").innerHTML = carbonPowerChart();
    byId("switch-carbon-power-note").textContent = `Carbon Monitor-Power daily GWh aggregated to monthly TWh. Coal uses the left axis; gas uses the right axis. Latest month: ${data.carbonPower.latestPeriod}.`;

    byId("switch-report-findings").innerHTML = data.reportFindings.map((item) => `
      <div class="assumption">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join("");

    byId("switch-github").innerHTML = data.githubReview.map((item) => `
      <div class="source">
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.note)}</p>
        <p><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.url)}</a></p>
      </div>
    `).join("");

    byId("switch-sources").innerHTML = data.sources.map((source) => {
      const url = source.url.startsWith("local:")
        ? `<p class="local-source">${escapeHtml(source.url.replace("local:", ""))}</p>`
        : `<p><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.url)}</a></p>`;
      return `
        <div class="source">
          <h3>${escapeHtml(source.name)}</h3>
          <p>${escapeHtml(source.note)}</p>
          ${url}
        </div>
      `;
    }).join("");
  }

  function renderCarbonPowerContext(result) {
    const latest = data.carbonPower.latestTwelveMonths;
    const completeYear = data.context.carbonPowerLatestCompleteYear;
    const items = [
      {
        title: "Historical scale",
        text: `From ${latest.startPeriod} to ${latest.endPeriod}, Carbon Monitor-Power reports ${fmt.format(latest.coalGenerationTwh)} TWh of China coal generation and ${fmt.format(latest.gasGenerationTwh)} TWh of gas generation. Gas is ${pct(latest.gasShareCoalGas)} of coal-plus-gas generation.`,
      },
      {
        title: "Observed gas-power base",
        text: `At the current gas efficiency setting, the latest twelve months of gas-fired generation imply about ${fmt.format(result.latestCarbonGasBurnBcm)} bcm of gas burn in power. This scenario saves ${fmt.format(result.gasSavingMidBcm)} bcm, or ${pct(result.gasSavingShareOfObservedGasPowerBurn)} of that observed gas-power base.`,
      },
      {
        title: "Monthly shape",
        text: "The monthly allocation now uses recent Carbon Monitor-Power gas generation by month before the peak-season feasibility adjustment. The older Power / residual bucket remains only as a fallback if the power-generation file is unavailable.",
      },
      {
        title: "Latest complete year",
        text: completeYear
          ? `In ${completeYear.year}, gas generation was ${fmt.format(completeYear.gasGenerationTwh)} TWh and coal generation was ${fmt.format(completeYear.coalGenerationTwh)} TWh; gas was ${pct(completeYear.gasShareCoalGas)} of coal-plus-gas generation.`
          : "No complete calendar year is available in the Carbon Monitor-Power extract.",
      },
    ];
    byId("switch-carbon-power-context").innerHTML = items.map((item) => `
      <div class="assumption">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join("");
  }

  function renderMethodology(result) {
    const context = data.context;
    const items = [
      {
        title: "China envelope",
        text: `The technical envelope is ${fmt.format(data.chinaEnvelope.chinaLowBcm)}-${fmt.format(data.chinaEnvelope.chinaHighBcm)} bcm/yr, derived as almost half of the report's ${fmt0.format(data.chinaEnvelope.globalLngImportMarketGasSavingLowBcm)}-${fmt0.format(data.chinaEnvelope.globalLngImportMarketGasSavingHighBcm)} bcm/yr range for key LNG import markets. The current scenario uses ${pct(result.factor)} of the midpoint after price and system constraints.`,
      },
      {
        title: "Fuel economics",
        text: `Gas SRMC is gas price times ${constants.mmbtuPerMwhThermal.toFixed(3)} MMBtu/MWh thermal divided by gas efficiency, plus variable O&M and carbon. Coal SRMC converts ${fmt0.format(constants.defaultCoalHeatContentKcalKg)} kcal/kg coal to ${fmt.format(constants.defaultCoalMwhThermalPerTonne)} MWh thermal per tonne before applying coal efficiency, O&M, and carbon.`,
      },
      {
        title: "Activation",
        text: `Gas-to-coal activation is zero when gas is cheaper than coal and reaches full price activation when gas SRMC exceeds coal SRMC by ${fmt0.format(constants.fullSwitchCostGapUsdMwh)} USD/MWh. The current price activation is ${pct(result.priceActivation)} and the non-price system factor is ${pct(result.systemFactor)}.`,
      },
      {
        title: "Monthly shape",
        text: `The annual result is distributed across gas-year months using recent Carbon Monitor-Power gas-fired generation, then adjusted down in summer and winter peak months. This is a direct power-generation shape rather than the older JODI Power / residual proxy. Context: JODI 2025 apparent gas demand is ${fmt.format(context.calendar2025ApparentDemandBcm)} bcm and LNG imports are ${fmt.format(context.calendar2025LNGImportsBcm)} bcm.`,
      },
      {
        title: "Break-even checks",
        text: `At the current coal and plant assumptions, gas-to-coal cost parity occurs near ${fmt.format(result.parityGasPrice)} USD/MBtu gas. The implied carbon price needed to make gas and coal equal is ${result.carbonParity == null ? "not defined" : `${fmt.format(result.carbonParity)} USD/tCO2`}.`,
      },
    ];
    byId("switch-methodology").innerHTML = items.map((item) => `
      <div class="assumption">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    `).join("");
  }

  function renderTable(rows) {
    byId("switch-table").querySelector("tbody").innerHTML = rows.map((row) => `
      <tr>
        <td>${row.label}</td>
        <td class="num">${fmt.format(row.gasSavingBcm)} bcm</td>
        <td class="num">${fmt.format(row.powerShiftTwh)} TWh</td>
        <td class="num">${fmt.format(row.coalMt)} Mt</td>
        <td class="num">${fmt.format(row.co2DeltaMt)} Mt</td>
        <td class="num">${pct(row.feasibility)}</td>
        <td>${escapeHtml(row.note)}</td>
      </tr>
    `).join("");
  }

  function chartScales(values, width, height, pad, options = {}) {
    const numeric = values.filter((value) => value != null && !Number.isNaN(value)).map(number);
    const max = Math.max(...numeric, options.max ?? 1);
    const min = options.min ?? Math.min(0, ...numeric);
    const paddedMax = max === min ? max + 1 : max * (options.padMax ?? 1.08);
    const x = (i, count) => pad.left + (count === 1 ? 0 : (i / (count - 1)) * (width - pad.left - pad.right));
    const y = (value) => pad.top + (paddedMax - number(value)) / (paddedMax - min) * (height - pad.top - pad.bottom);
    return { max: paddedMax, min, x, y };
  }

  function costChart(result) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 24, bottom: 54, left: 58 };
    const fuels = [
      {
        label: "Gas CCGT",
        total: result.gasSrmc,
        parts: [
          { label: "Fuel", value: result.gasFuel, color: colors.fuel },
          { label: "O&M", value: result.gasVom, color: colors.vom },
          { label: "CO2", value: result.gasCarbon, color: colors.carbon },
        ],
      },
      {
        label: "Coal",
        total: result.coalSrmc,
        parts: [
          { label: "Fuel", value: result.coalFuel, color: colors.fuel },
          { label: "O&M", value: result.coalVom, color: colors.vom },
          { label: "CO2", value: result.coalCarbon, color: colors.carbon },
        ],
      },
    ];
    const scale = chartScales(fuels.map((fuel) => fuel.total), width, height, pad, { min: 0 });
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const band = (width - pad.left - pad.right) / fuels.length;
    const barWidth = Math.min(120, band * 0.38);
    const bars = fuels.map((fuel, i) => {
      const x = pad.left + i * band + (band - barWidth) / 2;
      let yTop = height - pad.bottom;
      return fuel.parts.map((part) => {
        const h = part.value / (scale.max - scale.min) * (height - pad.top - pad.bottom);
        yTop -= h;
        return `<rect x="${x}" y="${yTop}" width="${barWidth}" height="${Math.max(0, h)}" fill="${part.color}"><title>${fuel.label} ${part.label}: ${fmt.format(part.value)} USD/MWh</title></rect>`;
      }).join("") + `
        <text x="${x + barWidth / 2}" y="${yTop - 7}" text-anchor="middle" class="chart-value">${fmt.format(fuel.total)}</text>
        <text x="${x + barWidth / 2}" y="${height - 18}" text-anchor="middle" class="chart-label">${fuel.label}</text>
      `;
    }).join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
      </svg>
      ${legend([
        { label: "Fuel", color: colors.fuel },
        { label: "O&M", color: colors.vom },
        { label: "CO2", color: colors.carbon },
      ])}
    `;
  }

  function monthlyChart(result) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 18, bottom: 52, left: 52 };
    const scale = chartScales(result.monthly.map((row) => row.gasSavingBcm), width, height, pad, { min: 0 });
    const band = (width - pad.left - pad.right) / result.monthly.length;
    const barWidth = Math.max(16, band * 0.58);
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const bars = result.monthly.map((row, i) => {
      const x = pad.left + i * band + (band - barWidth) / 2;
      const y = scale.y(row.gasSavingBcm);
      const h = height - pad.bottom - y;
      return `
        <rect x="${x}" y="${y}" width="${barWidth}" height="${Math.max(0, h)}" fill="${colors.saving}">
          <title>${row.label}: ${fmt.format(row.gasSavingBcm)} bcm</title>
        </rect>
        <text x="${x + barWidth / 2}" y="${height - 16}" text-anchor="middle" class="chart-label">${row.label}</text>
      `;
    }).join("");
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="8" y="${scale.y(tick) + 4}" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${bars}
      </svg>
      ${legend([{ label: "Gas saving, bcm", color: colors.saving }])}
    `;
  }

  function carbonPowerChart() {
    const rows = data.carbonPower.monthly;
    const width = 760;
    const height = 340;
    const pad = { top: 20, right: 76, bottom: 64, left: 72 };
    const x = (i) => pad.left + (i / Math.max(rows.length - 1, 1)) * (width - pad.left - pad.right);
    const coalScale = chartScales(rows.map((row) => row.coalGenerationTwh), width, height, pad, { min: 0 });
    const gasScale = chartScales(rows.map((row) => row.gasGenerationTwh), width, height, pad, { min: 0 });
    const yAt = (t) => pad.top + (1 - t) * (height - pad.top - pad.bottom);
    const tickFractions = [0, 0.25, 0.5, 0.75, 1];
    const ticks = tickFractions.map((t) => ({
      y: yAt(t),
      coal: coalScale.min + (coalScale.max - coalScale.min) * t,
      gas: gasScale.min + (gasScale.max - gasScale.min) * t,
    }));
    const yearTicks = rows
      .map((row, i) => ({ row, i }))
      .filter(({ row }) => row.period.endsWith("-01"));
    const linePath = (key, scale) => rows
      .map((row, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${scale.y(row[key])}`)
      .join(" ");
    const latest = rows.at(-1);
    const latestX = x(rows.length - 1);
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `
          <line class="grid-line" x1="${pad.left}" y1="${tick.y}" x2="${width - pad.right}" y2="${tick.y}"></line>
          <text x="${pad.left - 10}" y="${tick.y + 4}" text-anchor="end" class="chart-label">${fmt0.format(tick.coal)}</text>
          <text x="${width - pad.right + 10}" y="${tick.y + 4}" class="chart-label">${fmt.format(tick.gas)}</text>
        `).join("")}
        ${yearTicks.map(({ row, i }) => `
          <line class="grid-line" x1="${x(i)}" y1="${pad.top}" x2="${x(i)}" y2="${height - pad.bottom}" opacity="0.45"></line>
          <text x="${x(i)}" y="${height - 36}" text-anchor="middle" class="chart-label">${row.period.slice(0, 4)}</text>
        `).join("")}
        <path d="${linePath("coalGenerationTwh", coalScale)}" fill="none" stroke="${colors.coalPower}" stroke-width="3"></path>
        <path d="${linePath("gasGenerationTwh", gasScale)}" fill="none" stroke="${colors.gasPower}" stroke-width="3"></path>
        <circle cx="${latestX}" cy="${coalScale.y(latest.coalGenerationTwh)}" r="4" fill="${colors.coalPower}">
          <title>Latest coal generation: ${fmt.format(latest.coalGenerationTwh)} TWh in ${latest.period}</title>
        </circle>
        <circle cx="${latestX}" cy="${gasScale.y(latest.gasGenerationTwh)}" r="4" fill="${colors.gasPower}">
          <title>Latest gas generation: ${fmt.format(latest.gasGenerationTwh)} TWh in ${latest.period}</title>
        </circle>
        <text x="${pad.left + (width - pad.left - pad.right) / 2}" y="${height - 12}" text-anchor="middle" class="chart-label">Month</text>
        <text x="17" y="${pad.top + (height - pad.top - pad.bottom) / 2}" text-anchor="middle" class="chart-label" transform="rotate(-90 17 ${pad.top + (height - pad.top - pad.bottom) / 2})">Coal generation (TWh/month)</text>
        <text x="${width - 17}" y="${pad.top + (height - pad.top - pad.bottom) / 2}" text-anchor="middle" class="chart-label" transform="rotate(90 ${width - 17} ${pad.top + (height - pad.top - pad.bottom) / 2})">Gas generation (TWh/month)</text>
      </svg>
      ${legend([
        { label: "Coal generation, left axis", color: colors.coalPower, line: true },
        { label: "Gas generation, right axis", color: colors.gasPower, line: true },
      ])}
    `;
  }

  function regionChart(result) {
    const width = 760;
    const height = 320;
    const pad = { top: 20, right: 26, bottom: 46, left: 164 };
    const max = Math.max(...data.regionalClusters.map((row) => row.envelopeHighBcm), 1);
    const x = (value) => pad.left + (value / (max * 1.1)) * (width - pad.left - pad.right);
    const yStep = (height - pad.top - pad.bottom) / result.regions.length;
    const rows = result.regions.map((row, i) => {
      const y = pad.top + i * yStep + yStep * 0.24;
      const h = Math.min(34, yStep * 0.3);
      return `
        <text x="8" y="${y + h + 4}" class="chart-label">${escapeHtml(row.label)}</text>
        <rect x="${pad.left}" y="${y}" width="${x(row.envelopeMidBcm) - pad.left}" height="${h}" fill="${colors.envelope}" opacity="0.35">
          <title>${row.label} technical midpoint: ${fmt.format(row.envelopeMidBcm)} bcm</title>
        </rect>
        <rect x="${pad.left}" y="${y + h + 5}" width="${x(row.feasibleMidBcm) - pad.left}" height="${h}" fill="${colors.feasible}">
          <title>${row.label} feasible midpoint: ${fmt.format(row.feasibleMidBcm)} bcm</title>
        </rect>
        <text x="${Math.min(width - 38, x(Math.max(row.envelopeMidBcm, row.feasibleMidBcm)) + 7)}" y="${y + h + 20}" class="chart-value">${fmt.format(row.feasibleMidBcm)}</text>
      `;
    }).join("");
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => max * 1.1 * t);
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `<line class="grid-line" x1="${x(tick)}" y1="${pad.top}" x2="${x(tick)}" y2="${height - pad.bottom}"></line><text x="${x(tick)}" y="${height - 14}" text-anchor="middle" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${rows}
      </svg>
      ${legend([
        { label: "Technical midpoint", color: colors.envelope, opacity: true },
        { label: "Scenario feasible", color: colors.feasible },
      ])}
    `;
  }

  function sensitivityChart(result) {
    const width = 760;
    const height = 320;
    const pad = { top: 18, right: 18, bottom: 68, left: 70 };
    const gasPrices = Array.from({ length: 25 }, (_, i) => 4 + i);
    const points = gasPrices.map((price) => {
      const point = compute({ ...inputs, gasPriceUsdMmbtu: price });
      return { gasPrice: price, value: point.gasSavingMidBcm };
    });
    const scale = chartScales(points.map((point) => point.value), width, height, pad, { min: 0, max: data.chinaEnvelope.chinaMidBcm });
    const xScale = (value) => pad.left + ((value - 4) / 24) * (width - pad.left - pad.right);
    const line = points.map((point) => `${xScale(point.gasPrice)},${scale.y(point.value)}`).join(" ");
    const ticksY = [0, 0.25, 0.5, 0.75, 1].map((t) => scale.min + (scale.max - scale.min) * t);
    const ticksX = [4, 8, 12, 16, 20, 24, 28];
    const currentX = xScale(clamp(inputs.gasPriceUsdMmbtu, 4, 28));
    const parityX = xScale(clamp(result.parityGasPrice, 4, 28));
    const plotMiddleY = pad.top + (height - pad.top - pad.bottom) / 2;
    return `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticksY.map((tick) => `<line class="grid-line" x1="${pad.left}" y1="${scale.y(tick)}" x2="${width - pad.right}" y2="${scale.y(tick)}"></line><text x="${pad.left - 10}" y="${scale.y(tick) + 4}" text-anchor="end" class="chart-label">${fmt.format(tick)}</text>`).join("")}
        ${ticksX.map((tick) => `<line class="grid-line" x1="${xScale(tick)}" y1="${pad.top}" x2="${xScale(tick)}" y2="${height - pad.bottom}" opacity="0.55"></line><text x="${xScale(tick)}" y="${height - 34}" text-anchor="middle" class="chart-label">${tick}</text>`).join("")}
        <polyline fill="none" stroke="${colors.feasible}" stroke-width="3" points="${line}"></polyline>
        <line x1="${parityX}" y1="${pad.top}" x2="${parityX}" y2="${height - pad.bottom}" stroke="${colors.envelope}" stroke-width="2" stroke-dasharray="5 5"><title>Parity gas price: ${fmt.format(result.parityGasPrice)} USD/MBtu</title></line>
        <line x1="${currentX}" y1="${pad.top}" x2="${currentX}" y2="${height - pad.bottom}" stroke="${colors.coal}" stroke-width="2"><title>Current gas price: ${fmt.format(inputs.gasPriceUsdMmbtu)} USD/MBtu</title></line>
        <text x="${pad.left + (width - pad.left - pad.right) / 2}" y="${height - 10}" text-anchor="middle" class="chart-label">Gas price (USD/MBtu)</text>
        <text x="16" y="${plotMiddleY}" text-anchor="middle" class="chart-label" transform="rotate(-90 16 ${plotMiddleY})">Feasible gas saving (bcm/yr)</text>
      </svg>
      ${legend([
        { label: "Feasible gas saving", color: colors.feasible, line: true },
        { label: "Gas parity", color: colors.envelope, line: true, dash: true },
        { label: "Current gas price", color: colors.coal, line: true },
      ])}
    `;
  }

  function legend(items) {
    return `<div class="legend">${items.map((item) => {
      const style = item.line
        ? `background:transparent;border-top:3px ${item.dash ? "dashed" : "solid"} ${item.color};width:18px;height:0;border-radius:0`
        : `background:${item.color};${item.opacity ? "opacity:0.45;" : ""}`;
      return `<span><i class="swatch" style="${style}"></i>${item.label}</span>`;
    }).join("")}</div>`;
  }

  init();
})();
