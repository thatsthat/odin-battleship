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
  expect(testBoard.getBoard()).toEqual(eB);
});

test("Place a Carrier ship on the board", () => {
  let eB = new Array(10);
  for (let i = 0; i < eB.length; i++) {
    eB[i] = new Array(10);
  }
  for (let i = 0; i < 5; i++) {
    eB[i][0] = 1;
  }
  const testBoard = tF.Gameboard();
  testBoard.placeShip(1, [0, 0], "v");
  expect(testBoard.getBoard()).toEqual(eB);
});

test("Place a Carrier ship with wrong coordinates", () => {
  const testBoard = tF.Gameboard();
  function launchBoard() {
    testBoard.placeShip(1, [9, 9], "v");
  }
  expect(launchBoard).toThrow(
    /^The ship must be placed within the board limits$/
  );
});

test("Hit a ship!", () => {
  const testBoard = tF.Gameboard();
  testBoard.placeShip(1, [0, 0], "v");
  expect(testBoard.receiveAttack([0, 0])).toBe("The attack has hit a ship!");
});

test("Miss a ship", () => {
  const testBoard = tF.Gameboard();
  testBoard.placeShip(1, [0, 0], "v");
  expect(testBoard.receiveAttack([1, 0])).toBe("The attack missed all ships!");
});

test("Sink a ship!", () => {
  const testBoard = tF.Gameboard();
  testBoard.placeShip(1, [0, 0], "v");
  for (let i = 0; i < 4; i++) {
    testBoard.receiveAttack([0, i]);
  }
  expect(testBoard.receiveAttack([0, 4])).toBe(
    "The attack has hit and sunk a ship!"
  );
});
