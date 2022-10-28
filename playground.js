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
  const showHits = () => {
    return numHits;
  };
  return { shipLength, hit, sunk, showHits };
};

const testShip = Ship(5);
testShip.hit();
console.log(testShip.showHits());
testShip.hit();
console.log(testShip.showHits());
