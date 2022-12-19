import { domInter } from "../dom/index.js";

// Ship factory function
const Ship = (shipLength) => {
  let numHits = 0;
  const isSunk = () => {
    return numHits >= shipLength;
  };
  const hit = () => {
    numHits += 1;
  };
  const showHits = () => {
    return numHits;
  };
  return { showHits, isSunk, hit };
};

// Gameboard factory function
const Gameboard = () => {
  // Ship types: 1-Carrier, 2-Battleship, 3-Destroyer, 4-Submarine
  // 5-Patrol Boat
  const shipSizes = [5, 4, 3, 3, 2];
  // Create a 10 x 10 board
  let map_ships = new Array(10);
  let map_shoots = new Array(10);
  for (let i = 0; i < map_ships.length; i++) {
    map_ships[i] = new Array(10);
    const falses = new Array(10);
    falses.fill(false);
    map_shoots[i] = falses;
  }
  // Create an array to store all ships objects on the board
  const ships = [];

  const placeShip = (shipType, startCoords, orientation) => {
    if (shipType < 1 || shipType > 5) {
      throw "Invalid ship type";
    }
    const shipSize = shipSizes[shipType - 1];
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (startCoords.some(outsideBoard)) {
      throw "Invalid start coordinates";
    }
    if (orientation == "h") {
      const endCoords = [startCoords[0] + shipSize, startCoords[1]];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be place within the board limits";
      } else {
        ships.push(Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          map_ships[startCoords[0]][startCoords[1] + i] = ships.length;
        }
      }
    } else if (orientation == "v") {
      const endCoords = [startCoords[0], startCoords[1] + shipSize];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be placed within the board limits";
      } else {
        ships.push(Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          map_ships[startCoords[0] + i][startCoords[1]] = ships.length;
        }
      }
    }
  };

  const getShipsMap = () => {
    return map_ships;
  };

  const getShootsMap = () => {
    return map_shoots;
  };

  const receiveAttack = (attackCoords) => {
    // Handle the case of cell ID instead of cell coordinates
    // Return codes:
    // 0: "The attack missed all ships!"
    // 1: "The attack has hit a ship!"
    // 2: "The attack has hit and sunk a ship!"
    const nonDigit = /\D/;
    let aCoords = "";
    if (nonDigit.test(attackCoords[0])) {
      const cellNum = attackCoords.match(/\d/g).join("");
      aCoords = [(cellNum - (cellNum % 10)) / 10, cellNum % 10];
    } else {
      aCoords = attackCoords;
    }
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (aCoords.some(outsideBoard)) {
      throw "Invalid attack coordinates";
    }
    if (map_shoots[aCoords[0]][aCoords[1]] === true) {
      throw "You can't attack the same coordinates twice";
    }
    map_shoots[aCoords[0]][aCoords[1]] = true;
    const attackVal = map_ships[aCoords[0]][aCoords[1]];
    if (typeof attackVal == "undefined") return 0;
    else {
      const hitShip = ships[attackVal - 1];
      hitShip.hit();
      if (hitShip.isSunk()) return 2;
      else return 1;
    }
  };

  const allSunk = () => {
    const sunkShips = ships.map((elem) => elem.isSunk());
    return sunkShips.every(Boolean);
  };

  return { getShipsMap, getShootsMap, placeShip, receiveAttack, allSunk };
};

// Player factory function
const Player = (name = null) => {
  // Players can attack other players board
  // Players know which moves have already been made to avoid repeating
  const board = Gameboard();
  const attack = (opShootsMap) => {
    let attackCoords = null;
    opShootsMap.forEach((row, indRow) => {
      if (attackCoords == null) {
        row.forEach((pos, indCol) => {
          if (attackCoords == null) {
            if (pos == false) {
              // Attack the first unattacked position
              attackCoords = [indRow, indCol];
            }
          }
        });
      }
    });
    return attackCoords;
  };
  return { board, attack, name };
};

// Module that controls the game flow
const gameLoop = (() => {
  // Initialize DOM
  domInter.renderUI();
  // Initialize player 1 and 2
  const player1 = Player("Player 1");
  const player2 = Player("Player 2");
  // hardcode some ships on p1 and p2 boards
  player1.board.placeShip(1, [0, 0], "h");
  console.log(player1.board.getShipsMap());
  player1.board.placeShip(1, [1, 3], "h");
  console.log(player1.board.getShipsMap());
  player2.board.placeShip(1, [1, 1], "v");
  //player2.board.placeShip(1, [0, 7], "v");
  let activePlayer = player1;
  return { player1, player2, activePlayer };
})();

export { Ship, Gameboard, Player, gameLoop };
