(function initializeStorageOptimizer() {
  const MONTHS = ["Aug 26", "Sep 26", "Oct 26", "Nov 26", "Dec 26", "Jan 27", "Feb 27", "Mar 27", "Apr 27", "May 27", "Jun 27", "Jul 27"];
  const SCENARIOS = {
    seasonal: [30.8, 31.4, 33.1, 36.6, 39.2, 40.5, 39.0, 35.8, 31.7, 29.9, 29.5, 30.2],
    backwardation: [42.8, 41.1, 39.5, 38.0, 36.4, 34.7, 33.2, 31.8, 30.7, 29.8, 29.2, 28.9],
    flat: [33.0, 33.1, 32.9, 33.0, 33.2, 33.1, 33.0, 32.8, 32.9, 33.0, 33.1, 33.0],
    volatile: [31.2, 35.8, 32.4, 40.6, 36.1, 44.0, 38.2, 34.3, 29.7, 33.6, 28.8, 32.1]
  };
  const DEFAULTS = {
    capacity: 1000,
    minimumInventory: 50,
    startingInventory: 350,
    terminalInventory: 350,
    maxInjection: 100,
    maxWithdrawal: 140,
    injectionEfficiency: 97,
    withdrawalEfficiency: 98,
    injectionCost: 0.35,
    withdrawalCost: 0.25
  };

  const curveInputs = document.getElementById("curve-inputs");
  const scenarioSelect = document.getElementById("scenario-select");
  const errorBox = document.getElementById("model-error");
  const fieldIds = {
    capacity: "capacity",
    minimumInventory: "minimum-inventory",
    startingInventory: "starting-inventory",
    terminalInventory: "terminal-inventory",
    maxInjection: "max-injection",
    maxWithdrawal: "max-withdrawal",
    injectionEfficiency: "injection-efficiency",
    withdrawalEfficiency: "withdrawal-efficiency",
    injectionCost: "injection-cost",
    withdrawalCost: "withdrawal-cost"
  };

  function createCurveInputs(prices) {
    curveInputs.innerHTML = "";
    MONTHS.forEach((month, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "curve-field";
      const label = document.createElement("label");
      label.htmlFor = `curve-price-${index}`;
      label.textContent = month;
      const input = document.createElement("input");
      input.id = `curve-price-${index}`;
      input.type = "number";
      input.min = "0";
      input.step = "0.1";
      input.value = prices[index].toFixed(1);
      input.addEventListener("input", render);
      wrapper.append(label, input);
      curveInputs.append(wrapper);
    });
  }

  function readNumber(key) {
    return Number(document.getElementById(fieldIds[key]).value);
  }

  function readModelInput() {
    return {
      prices: MONTHS.map((label, index) => ({
        label,
        price: Number(document.getElementById(`curve-price-${index}`).value)
      })),
      capacity: readNumber("capacity"),
      minimumInventory: readNumber("minimumInventory"),
      startingInventory: readNumber("startingInventory"),
      terminalInventory: readNumber("terminalInventory"),
      maxInjection: readNumber("maxInjection"),
      maxWithdrawal: readNumber("maxWithdrawal"),
      injectionEfficiency: readNumber("injectionEfficiency") / 100,
      withdrawalEfficiency: readNumber("withdrawalEfficiency") / 100,
      injectionCost: readNumber("injectionCost"),
      withdrawalCost: readNumber("withdrawalCost"),
      inventoryStep: 10
    };
  }

  function formatNumber(value, digits = 0) {
    return new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(value);
  }

  function formatSigned(value, digits = 0) {
    if (Math.abs(value) < 1e-9) return formatNumber(0, digits);
    return `${value > 0 ? "+" : "−"}${formatNumber(Math.abs(value), digits)}`;
  }

  function actionClass(action) {
    return action === "Inject" ? "is-inject" : action === "Withdraw" ? "is-withdraw" : "is-hold";
  }

  function renderKpis(result) {
    const immediate = result.immediateAction === "Hold"
      ? "Hold"
      : `${result.immediateAction} ${formatNumber(result.immediateVolume)} GWh`;
    const kpis = [
      {
        label: "Intrinsic value",
        value: `€${formatNumber(result.valueK / 1000, 2)}m`,
        sub: "Forward cash value after variable costs"
      },
      {
        label: "Next decision",
        value: immediate,
        sub: `${result.schedule[0].month} at €${formatNumber(result.schedule[0].price, 1)}/MWh`,
        className: actionClass(result.immediateAction)
      },
      {
        label: "Peak inventory",
        value: `${formatNumber(result.peakInventory)} GWh`,
        sub: `${formatNumber((result.peakInventory / readNumber("capacity")) * 100)}% of working capacity`
      },
      {
        label: "Active months",
        value: `${result.activeMonths} / ${MONTHS.length}`,
        sub: `${formatNumber(result.injectedInventory)} GWh injected, ${formatNumber(result.withdrawnInventory)} GWh withdrawn`
      }
    ];

    document.getElementById("storage-kpis").innerHTML = kpis.map((kpi) => `
      <article class="kpi ${kpi.className || ""}">
        <div class="label">${kpi.label}</div>
        <div class="value">${kpi.value}</div>
        <div class="sub">${kpi.sub}</div>
      </article>
    `).join("");
  }

  function renderActionChart(schedule) {
    const width = 760;
    const height = 330;
    const left = 54;
    const right = 18;
    const plotWidth = width - left - right;
    const step = plotWidth / schedule.length;
    const priceTop = 22;
    const priceBottom = 170;
    const actionTop = 205;
    const actionBottom = 291;
    const actionZero = (actionTop + actionBottom) / 2;
    const prices = schedule.map((row) => row.price);
    const minPrice = Math.floor(Math.min(...prices) - 2);
    const maxPrice = Math.ceil(Math.max(...prices) + 2);
    const maxAction = Math.max(10, ...schedule.map((row) => Math.abs(row.inventoryChange)));
    const x = (index) => left + step * index + step / 2;
    const priceY = (price) => priceBottom - ((price - minPrice) / (maxPrice - minPrice)) * (priceBottom - priceTop);
    const actionY = (value) => actionZero - (value / maxAction) * ((actionBottom - actionTop) / 2 - 4);
    const line = schedule.map((row, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${priceY(row.price)}`).join(" ");
    const priceTicks = [minPrice, Math.round((minPrice + maxPrice) / 2), maxPrice];

    const grid = priceTicks.map((tick) => `
      <line class="grid-line" x1="${left}" x2="${width - right}" y1="${priceY(tick)}" y2="${priceY(tick)}"></line>
      <text class="axis-label" x="${left - 9}" y="${priceY(tick) + 4}" text-anchor="end">€${tick}</text>
    `).join("");
    const bars = schedule.map((row, index) => {
      const chartValue = -row.inventoryChange;
      const y = actionY(chartValue);
      const top = Math.min(y, actionZero);
      const barHeight = Math.max(1, Math.abs(y - actionZero));
      const className = row.action === "Inject" ? "inject-bar" : row.action === "Withdraw" ? "withdraw-bar" : "hold-bar";
      return `<rect class="${className}" x="${x(index) - step * 0.27}" y="${top}" width="${step * 0.54}" height="${barHeight}" rx="2"></rect>`;
    }).join("");
    const labels = schedule.map((row, index) => `<text class="axis-label" x="${x(index)}" y="316" text-anchor="middle">${row.month.replace(" ", " ’")}</text>`).join("");

    document.getElementById("action-chart").innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${grid}
        <path class="price-line" d="${line}"></path>
        ${schedule.map((row, index) => `<circle class="price-point" cx="${x(index)}" cy="${priceY(row.price)}" r="3.5"><title>${row.month}: €${formatNumber(row.price, 1)}/MWh</title></circle>`).join("")}
        <line class="action-zero" x1="${left}" x2="${width - right}" y1="${actionZero}" y2="${actionZero}"></line>
        <text class="axis-label action-axis-title" x="${left}" y="194">Withdraw</text>
        <text class="axis-label action-axis-title" x="${left}" y="304">Inject</text>
        ${bars}
        ${labels}
      </svg>
      <div class="legend storage-legend">
        <span><i class="swatch price-swatch"></i>TTF forward</span>
        <span><i class="swatch withdrawal-swatch"></i>Withdraw</span>
        <span><i class="swatch injection-swatch"></i>Inject</span>
      </div>
    `;
  }

  function renderInventoryChart(result, input) {
    const width = 760;
    const height = 330;
    const left = 58;
    const right = 18;
    const top = 25;
    const bottom = 284;
    const plotWidth = width - left - right;
    const inventories = [input.startingInventory, ...result.schedule.map((row) => row.endInventory)];
    const x = (index) => left + (index / (inventories.length - 1)) * plotWidth;
    const y = (inventory) => bottom - (inventory / input.capacity) * (bottom - top);
    const line = inventories.map((inventory, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(inventory)}`).join(" ");
    const area = `${line} L ${x(inventories.length - 1)} ${bottom} L ${x(0)} ${bottom} Z`;
    const ticks = [0, input.capacity / 2, input.capacity];
    const labels = ["Start", ...MONTHS].map((label, index) => `<text class="axis-label" x="${x(index)}" y="310" text-anchor="middle">${label === "Start" ? label : label.replace(" ", " ’")}</text>`).join("");

    document.getElementById("inventory-chart").innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${ticks.map((tick) => `
          <line class="grid-line" x1="${left}" x2="${width - right}" y1="${y(tick)}" y2="${y(tick)}"></line>
          <text class="axis-label" x="${left - 9}" y="${y(tick) + 4}" text-anchor="end">${formatNumber(tick)}</text>
        `).join("")}
        <line class="minimum-line" x1="${left}" x2="${width - right}" y1="${y(input.minimumInventory)}" y2="${y(input.minimumInventory)}"></line>
        <path class="inventory-area" d="${area}"></path>
        <path class="inventory-line" d="${line}"></path>
        ${inventories.map((inventory, index) => `<circle class="inventory-point" cx="${x(index)}" cy="${y(inventory)}" r="3.5"><title>${index === 0 ? "Start" : MONTHS[index - 1]}: ${formatNumber(inventory)} GWh</title></circle>`).join("")}
        ${labels}
        <text class="axis-label" x="${width - right}" y="${y(input.minimumInventory) - 6}" text-anchor="end">Minimum</text>
      </svg>
      <div class="legend storage-legend">
        <span><i class="swatch inventory-swatch"></i>Ending inventory</span>
        <span><i class="swatch minimum-swatch"></i>Minimum inventory</span>
      </div>
    `;
  }

  function renderSchedule(schedule) {
    document.getElementById("schedule-body").innerHTML = schedule.map((row) => {
      const marketVolume = row.action === "Inject" ? row.purchasedGas : row.deliveredGas;
      return `
        <tr>
          <td><strong>${row.month}</strong></td>
          <td class="num">€${formatNumber(row.price, 1)}</td>
          <td><span class="action-badge ${actionClass(row.action)}">${row.action}</span></td>
          <td class="num">${formatSigned(row.inventoryChange)} GWh</td>
          <td class="num">${formatNumber(row.endInventory)} GWh</td>
          <td class="num">${formatNumber(marketVolume, 1)} GWh</td>
          <td class="num ${row.cashflowK < 0 ? "negative-value" : row.cashflowK > 0 ? "positive-value" : ""}">${formatSigned(row.cashflowK, 0)} €k</td>
          <td class="num">${formatSigned(row.cumulativeCashflowK, 0)} €k</td>
        </tr>
      `;
    }).join("");
  }

  function render() {
    try {
      const input = readModelInput();
      const result = StorageModel.optimizeStorage(input);
      errorBox.hidden = true;
      renderKpis(result);
      renderActionChart(result.schedule);
      renderInventoryChart(result, input);
      renderSchedule(result.schedule);
    } catch (error) {
      errorBox.textContent = error.message;
      errorBox.hidden = false;
    }
  }

  function applyScenario(name) {
    createCurveInputs(SCENARIOS[name]);
    render();
  }

  function resetAssumptions() {
    Object.entries(DEFAULTS).forEach(([key, value]) => {
      document.getElementById(fieldIds[key]).value = value;
    });
    scenarioSelect.value = "seasonal";
    applyScenario("seasonal");
  }

  Object.values(fieldIds).forEach((id) => document.getElementById(id).addEventListener("input", render));
  scenarioSelect.addEventListener("change", () => applyScenario(scenarioSelect.value));
  document.getElementById("reset-button").addEventListener("click", resetAssumptions);
  createCurveInputs(SCENARIOS.seasonal);
  render();
})();
