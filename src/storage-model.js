(function attachStorageModel(root, factory) {
  const model = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = model;
  }
  root.StorageModel = model;
})(typeof globalThis !== "undefined" ? globalThis : this, function createStorageModel() {
  const EPSILON = 1e-9;

  function assertFinite(value, label) {
    if (!Number.isFinite(value)) {
      throw new Error(`${label} must be a finite number.`);
    }
  }

  function optimizeStorage(input) {
    const prices = input.prices || [];
    const capacity = Number(input.capacity);
    const minimumInventory = Number(input.minimumInventory || 0);
    const startingInventory = Number(input.startingInventory);
    const terminalInventory = Number(input.terminalInventory);
    const maxInjection = Number(input.maxInjection);
    const maxWithdrawal = Number(input.maxWithdrawal);
    const injectionEfficiency = Number(input.injectionEfficiency);
    const withdrawalEfficiency = Number(input.withdrawalEfficiency);
    const injectionCost = Number(input.injectionCost || 0);
    const withdrawalCost = Number(input.withdrawalCost || 0);
    const inventoryStep = Number(input.inventoryStep || 10);

    [
      [capacity, "Capacity"],
      [minimumInventory, "Minimum inventory"],
      [startingInventory, "Starting inventory"],
      [terminalInventory, "Terminal inventory"],
      [maxInjection, "Maximum injection"],
      [maxWithdrawal, "Maximum withdrawal"],
      [injectionEfficiency, "Injection efficiency"],
      [withdrawalEfficiency, "Withdrawal efficiency"],
      [injectionCost, "Injection cost"],
      [withdrawalCost, "Withdrawal cost"],
      [inventoryStep, "Inventory step"]
    ].forEach(([value, label]) => assertFinite(value, label));

    if (!prices.length) throw new Error("At least one forward price is required.");
    if (capacity <= minimumInventory) throw new Error("Capacity must exceed minimum inventory.");
    if (inventoryStep <= 0) throw new Error("Inventory step must be positive.");
    if (maxInjection <= 0 || maxWithdrawal <= 0) throw new Error("Injection and withdrawal rates must be positive.");
    if (injectionEfficiency <= 0 || injectionEfficiency > 1) throw new Error("Injection efficiency must be between 0 and 1.");
    if (withdrawalEfficiency <= 0 || withdrawalEfficiency > 1) throw new Error("Withdrawal efficiency must be between 0 and 1.");
    if (startingInventory < minimumInventory || startingInventory > capacity) throw new Error("Starting inventory is outside the storage bounds.");
    if (terminalInventory < minimumInventory || terminalInventory > capacity) throw new Error("Terminal inventory is outside the storage bounds.");

    const stateCount = Math.round((capacity - minimumInventory) / inventoryStep) + 1;
    const states = Array.from({ length: stateCount }, (_, index) => minimumInventory + index * inventoryStep);
    const stateIndex = (inventory) => Math.round((inventory - minimumInventory) / inventoryStep);
    const onGrid = (inventory) => Math.abs(states[stateIndex(inventory)] - inventory) < EPSILON;

    if (!onGrid(startingInventory) || !onGrid(terminalInventory) || Math.abs(states[stateCount - 1] - capacity) > EPSILON) {
      throw new Error(`Capacity, starting inventory, and terminal inventory must align to the ${inventoryStep} GWh optimization grid.`);
    }

    const normalizedPrices = prices.map((entry, index) => {
      const price = typeof entry === "number" ? entry : Number(entry.price);
      assertFinite(price, `Price ${index + 1}`);
      return {
        label: typeof entry === "number" ? `Period ${index + 1}` : entry.label,
        price
      };
    });

    const periods = normalizedPrices.length;
    const values = Array.from({ length: periods + 1 }, () => Array(stateCount).fill(Number.NEGATIVE_INFINITY));
    const decisions = Array.from({ length: periods }, () => Array(stateCount).fill(-1));
    values[periods][stateIndex(terminalInventory)] = 0;

    for (let period = periods - 1; period >= 0; period -= 1) {
      const price = normalizedPrices[period].price;
      for (let currentIndex = 0; currentIndex < stateCount; currentIndex += 1) {
        const currentInventory = states[currentIndex];
        let bestValue = Number.NEGATIVE_INFINITY;
        let bestNextIndex = -1;
        let bestMovement = Number.POSITIVE_INFINITY;

        for (let nextIndex = 0; nextIndex < stateCount; nextIndex += 1) {
          if (!Number.isFinite(values[period + 1][nextIndex])) continue;
          const nextInventory = states[nextIndex];
          const inventoryChange = nextInventory - currentInventory;
          if (inventoryChange > maxInjection + EPSILON || -inventoryChange > maxWithdrawal + EPSILON) continue;

          let cashflowK = 0;
          if (inventoryChange > EPSILON) {
            const purchasedGas = inventoryChange / injectionEfficiency;
            cashflowK = -purchasedGas * (price + injectionCost);
          } else if (inventoryChange < -EPSILON) {
            const deliveredGas = -inventoryChange * withdrawalEfficiency;
            cashflowK = deliveredGas * (price - withdrawalCost);
          }

          const candidateValue = cashflowK + values[period + 1][nextIndex];
          const movement = Math.abs(inventoryChange);
          if (candidateValue > bestValue + EPSILON || (Math.abs(candidateValue - bestValue) <= EPSILON && movement < bestMovement)) {
            bestValue = candidateValue;
            bestNextIndex = nextIndex;
            bestMovement = movement;
          }
        }

        values[period][currentIndex] = bestValue;
        decisions[period][currentIndex] = bestNextIndex;
      }
    }

    let currentIndex = stateIndex(startingInventory);
    if (!Number.isFinite(values[0][currentIndex])) {
      throw new Error("The terminal inventory cannot be reached with these rate limits and time periods.");
    }

    let cumulativeCashflowK = 0;
    const schedule = normalizedPrices.map((entry, period) => {
      const nextIndex = decisions[period][currentIndex];
      if (nextIndex < 0) throw new Error("No feasible storage decision was found.");

      const startInventory = states[currentIndex];
      const endInventory = states[nextIndex];
      const inventoryChange = endInventory - startInventory;
      const purchasedGas = inventoryChange > EPSILON ? inventoryChange / injectionEfficiency : 0;
      const deliveredGas = inventoryChange < -EPSILON ? -inventoryChange * withdrawalEfficiency : 0;
      const cashflowK = purchasedGas > 0
        ? -purchasedGas * (entry.price + injectionCost)
        : deliveredGas * (entry.price - withdrawalCost);
      cumulativeCashflowK += cashflowK;

      const row = {
        month: entry.label,
        price: entry.price,
        startInventory,
        endInventory,
        inventoryChange,
        purchasedGas,
        deliveredGas,
        cashflowK,
        cumulativeCashflowK,
        action: inventoryChange > EPSILON ? "Inject" : inventoryChange < -EPSILON ? "Withdraw" : "Hold"
      };
      currentIndex = nextIndex;
      return row;
    });

    const peakInventory = Math.max(startingInventory, ...schedule.map((row) => row.endInventory));
    const injectedInventory = schedule.reduce((sum, row) => sum + Math.max(0, row.inventoryChange), 0);
    const withdrawnInventory = schedule.reduce((sum, row) => sum + Math.max(0, -row.inventoryChange), 0);
    const activeMonths = schedule.filter((row) => row.action !== "Hold").length;

    return {
      valueK: values[0][stateIndex(startingInventory)],
      schedule,
      peakInventory,
      injectedInventory,
      withdrawnInventory,
      activeMonths,
      immediateAction: schedule[0].action,
      immediateVolume: Math.abs(schedule[0].inventoryChange)
    };
  }

  return { optimizeStorage };
});
