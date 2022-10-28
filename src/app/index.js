// Task factory function
const Ship = (shipLength, numHits = 0, sunk = false) => {
  const isSunk = () => {
    return numHits >= shipLength;
  };
  const hit = () => {
    numHits += 1;
    sunk = isSunk();
  };
  return { shipLength, numHits, sunk, hit };
};

//const taskList = (() => {})();

export { Ship };
