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

test("Create an empty Gameboard", () => {
  const eB = new Array(10);
  eB.fill(new Array(10));
  const testBoard = tF.Gameboard();
  console.log(testBoard);
  expect(testBoard.getBoard()).toEqual(eB);
});

test("Place a Carrier ship on the board", () => {
  const eB = new Array(10);
  eB.fill(new Array(10));
  eB[0][0] = 1;
  for (let i = 0; i < 5; i++) {
    //eB[0][i] = 1;
  }
  console.log(eB);
  const testBoard = tF.Gameboard();
  testBoard.placeShip(1, [0, 0], "v");
  expect(testBoard.getBoard()).toEqual(eB);
});
