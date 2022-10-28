const Ship = (shipLength, sunk = false) => {
  let numHits = 0;
  const isSunk = () => {
    return numHits >= shipLength;
  };
  const hit = () => {
    numHits += 1;
    console.log(numHits);
    sunk = isSunk();
  };
  return { shipLength, numHits, sunk, hit };
};

const testShip = Ship(5);
testShip.hit();
console.log(testShip.numHits);
testShip.hit();
