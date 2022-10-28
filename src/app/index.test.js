//const { caesarCipher, analyzeArray } = require("./index.js");
const tF = require("./index.js");

test("Create a ship of a certain length", () => {
  const testShip = tF.Ship(5);
  expect(testShip.shipLength).toBe(5);
});

test("Hit a ship", () => {
  const testShip2 = tF.Ship(5);
  expect(testShip2.showHits()).toBe(0);
  testShip2.hit();
  expect(testShip2.showHits()).toBe(1);
});
