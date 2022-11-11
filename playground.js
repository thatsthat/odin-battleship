const iep = [9, 14];

const outsideBoard = (v) => v < 0 || v >= 10;

console.log(iep.some(outsideBoard));
console.log(outsideBoard(14));
