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

//const taskList = (() => {})();

export { Ship };
