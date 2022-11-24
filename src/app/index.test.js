//const { caesarCipher, analyzeArray } = require("./index.js");
const tF = require("./index.js");

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
  expect(testBoard.getShipsMap()).toEqual(eB);
});

test("Place a Carrier ship on the board", () => {
  let eB2 = new Array(10);
  for (let i = 0; i < eB2.length; i++) {
    eB2[i] = new Array(10);
  }
  for (let i = 0; i < 5; i++) {
    eB2[i][0] = 1;
  }
  const testBoard2 = tF.Gameboard();
  testBoard2.placeShip(1, [0, 0], "v");
  expect(testBoard2.getShipsMap()).toEqual(eB2);
});

test("Place a Carrier ship with wrong coordinates", () => {
  const testBoard3 = tF.Gameboard();
  function launchBoard() {
    testBoard3.placeShip(1, [9, 9], "v");
  }
  expect(launchBoard).toThrow(
    /^The ship must be placed within the board limits$/
  );
});

test("Hit a ship!", () => {
  const testBoard4 = tF.Gameboard();
  testBoard4.placeShip(1, [0, 0], "v");
  expect(testBoard4.receiveAttack([0, 0])).toBe("The attack has hit a ship!");
});

test("Miss a ship", () => {
  const testBoard5 = tF.Gameboard();
  testBoard5.placeShip(1, [0, 0], "v");
  expect(testBoard5.receiveAttack([1, 0])).toBe("The attack missed all ships!");
});

test("Sink a ship!", () => {
  const testBoard6 = tF.Gameboard();
  testBoard6.placeShip(1, [0, 0], "v");
  for (let i = 0; i < 4; i++) {
    testBoard6.receiveAttack([0, i]);
  }
  expect(testBoard6.allSunk()).toEqual(false);
  expect(testBoard6.receiveAttack([0, 4])).toBe(
    "The attack has hit and sunk a ship!"
  );
  expect(testBoard6.allSunk()).toEqual(true);
});

test("Generate automatic attack", () => {
  let hitsMap = new Array(10);
  for (let i = 0; i < hitsMap.length; i++) {
    let row = new Array(10);
    row.fill(true);
    hitsMap[i] = row;
  }
  hitsMap[6][4] = false;
  const testPlayer = tF.Player();
  expect(testPlayer.attack(hitsMap)).toEqual([6, 4]);
});
