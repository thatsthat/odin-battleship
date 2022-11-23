// Task factory function
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

const Gameboard = () => {
  // Ship types: 1-Carrier, 2-Battleship, 3-Destroyer, 4-Submarine
  // 5-Patrol Boat
  const shipSizes = [5, 4, 3, 3, 2];
  // Create a 10 x 10 board
  let board_ships = new Array(10);
  let board_hits = new Array(10);
  for (let i = 0; i < board_ships.length; i++) {
    board_ships[i] = new Array(10);
    const falses = new Array(10);
    falses.fill(false);
    board_hits[i] = falses;
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
        ships.push(new Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          board_ships[startCoords[1]][startCoords[0] + i] = ships.length;
        }
      }
    } else if (orientation == "v") {
      const endCoords = [startCoords[0], startCoords[1] + shipSize];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be placed within the board limits";
      } else {
        ships.push(new Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          board_ships[startCoords[1] + i][startCoords[0]] = ships.length;
        }
      }
    }
  };
  const getBoard = () => {
    return board_ships;
  };
  const receiveAttack = (attackCoords) => {
    const outsideBoard = (v) => v < 0 || v >= 10;
    if (attackCoords.some(outsideBoard)) {
      throw "Invalid attack coordinates";
    }
    if (board_hits[attackCoords[1]][attackCoords[0]] === true) {
      throw "You can't attack the same coordinates twice";
    }
    board_hits[attackCoords[1]][attackCoords[0]] = true;
    const attackVal = board_ships[attackCoords[1]][attackCoords[0]];
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

  return { getBoard, placeShip, receiveAttack, allSunk };
};

const Player = () => {
  // Players can attack other players board
  // Players know which moves have already been made to avoid repeating
  const board = new Gameboard();
};

export { Ship, Gameboard, Player };
