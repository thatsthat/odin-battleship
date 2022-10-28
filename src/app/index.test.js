//const { caesarCipher, analyzeArray } = require("./index.js");
const tF = require("./index.js");

test.only("Create a ship of a certain length", () => {
  const testShip = tF.Ship(5);
  expect(testShip.shipLength).toBe(5);
  testShip.hit();
  expect(testShip.numHits).toBe(0);
});

test("Hit a ship", () => {
  const testShip2 = tF.Ship(5);
  testShip2.hit();
  expect(testShip2.shipLength).toBe(5);
  expect(testShip2.numHits).toBe(1);
});
