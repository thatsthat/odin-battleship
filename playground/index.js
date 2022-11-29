const gridP1 = document.getElementById("player1");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.id = `a${i}`;
  cell.textContent = "0";
  gridP1.appendChild(cell);
}

const gridP2 = document.getElementById("player2");

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.id = `b${i}`;
  cell.textContent = "1";
  gridP2.appendChild(cell);
}
