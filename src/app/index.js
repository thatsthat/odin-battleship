// Task factory function
const Ship = (shipLength, numHits = 0, sunk = false) => {
  const isSunk = () => {
    return numHits >= shipLength;
  };
  const hit = () => {
    numHits += 1;
    sunk = isSunk();
  };
  const showHits = () => {
    return numHits;
  };
  return { shipLength, showHits, sunk, hit };
};

const Gameboard = () => {
  // Ship types: 1-Carrier, 2-Battleship, 3-Destroyer, 4-Submarine
  // 5-Patrol Boat
  const shipSizes = [5, 4, 3, 3, 2];
  // Create a 10 x 10 board
  let board = new Array(10);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(10);
  }
  // Create an array to store all ships on the board
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
          board[startCoords[1]][startCoords[0] + i] = ships.length;
        }
      }
    } else if (orientation == "v") {
      const endCoords = [startCoords[0], startCoords[1] + shipSize];
      // Check that the ship is placed within the board limits
      if (endCoords.some(outsideBoard)) {
        throw "The ship must be place within the board limits";
      } else {
        ships.push(new Ship(shipSizes[shipType - 1]));
        for (let i = 0; i < shipSize; i++) {
          board[startCoords[1] + i][startCoords[0]] = ships.length;
        }
      }
    }
  };
  const getBoard = () => {
    return board;
  };
  const receiveAttach = (attackCoords) => {
    const attackVal = board[attackCoords[1]][attackCoords[0]];
    if (typeof attackVal == "undefined") return "The attack missed all ships!";
    else {
      const hitShip = ships[attackVal - 1];
      hitShip.hit();
      if (hitShip.sunk) return "The attack has hit and sunk a ship!";
      else return "The attack has hit a ship!";
    }
  };

  return { getBoard, placeShip, receiveAttach };
};
export { Ship, Gameboard };
