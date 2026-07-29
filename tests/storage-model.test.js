const test = require("node:test");
const assert = require("node:assert/strict");
const { optimizeStorage } = require("../src/storage-model.js");

function baseInput(overrides = {}) {
  return {
    prices: [
      { label: "M1", price: 10 },
      { label: "M2", price: 30 },
      { label: "M3", price: 10 }
    ],
    capacity: 100,
    minimumInventory: 0,
    startingInventory: 0,
    terminalInventory: 0,
    maxInjection: 100,
    maxWithdrawal: 100,
    injectionEfficiency: 1,
    withdrawalEfficiency: 1,
    injectionCost: 0,
    withdrawalCost: 0,
    inventoryStep: 10,
    ...overrides
  };
}

test("captures an available forward spread and returns to terminal inventory", () => {
  const result = optimizeStorage(baseInput());

  assert.equal(result.valueK, 2000);
  assert.deepEqual(result.schedule.map((row) => row.action), ["Inject", "Withdraw", "Hold"]);
  assert.equal(result.schedule.at(-1).endInventory, 0);
});

test("holds inventory when a flat curve cannot cover losses and costs", () => {
  const result = optimizeStorage(baseInput({
    prices: [30, 30, 30],
    startingInventory: 50,
    terminalInventory: 50,
    injectionEfficiency: 0.97,
    withdrawalEfficiency: 0.98,
    injectionCost: 0.3,
    withdrawalCost: 0.2
  }));

  assert.equal(result.valueK, 0);
  assert.deepEqual(result.schedule.map((row) => row.action), ["Hold", "Hold", "Hold"]);
});

test("rejects a terminal target that cannot be reached", () => {
  assert.throws(() => optimizeStorage(baseInput({
    prices: [30],
    terminalInventory: 100,
    maxInjection: 50
  })), /cannot be reached/);
});
