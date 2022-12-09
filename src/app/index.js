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
  let map_hits = new Array(10);
  for (let i = 0; i < map_ships.length; i++) {
    map_ships[i] = new Array(10);
    const falses = new Array(10);
    falses.fill(false);
    map_hits[i] = falses;
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
          map_ships[startCoords[1]][startCoords[0] + i] = ships.length;
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
          map_ships[startCoords[1] + i][startCoords[0]] = ships.length;
        }
      }
    }
  };

  const getShipsMap = () => {
    return map_ships;
  };

  const getHitsMap = () => {
    return map_hits;
  };

  const receiveAttack = (attackCoords) => {
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (attackCoords.some(outsideBoard)) {
      throw "Invalid attack coordinates";
    }
    if (map_hits[attackCoords[1]][attackCoords[0]] === true) {
      throw "You can't attack the same coordinates twice";
    }
    map_hits[attackCoords[1]][attackCoords[0]] = true;
    const attackVal = map_ships[attackCoords[1]][attackCoords[0]];
    if (typeof attackVal == "undefined") return "The attack missed all ships!";
    else {
      const hitShip = ships[attackVal - 1];
      hitShip.hit();
      if (hitShip.isSunk()) return "The attack has hit and sunk a ship!";
      else return "The attack has hit a ship!";
    }
  };

  const allSunk = () => {
    const sunkShips = ships.map((elem) => elem.isSunk());
    return sunkShips.every(Boolean);
  };

  return { getShipsMap, getHitsMap, placeShip, receiveAttack, allSunk };
};

// Player factory function
const Player = (name = null) => {
  // Players can attack other players board
  // Players know which moves have already been made to avoid repeating
  const board = Gameboard();
  const attack = (opHitsMap) => {
    let attackCoords = null;
    opHitsMap.forEach((row, indRow) => {
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
  // Initialize player 1 and 2
  const p1 = Player("Player 1");
  const p2 = Player("Player 2");
  // hardcode some ships on p1 and p2 boards
  p1.board.placeShip(1, [0, 0], "v");
  p2.board.placeShip(3, [1, 1], "h");

  let activePlayer = p1;
})();

export { Ship, Gameboard, Player, gameLoop };
