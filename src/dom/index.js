import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { taskList } from "../app/index.js";

const plainHTML = `
  <div id="content">
    <div id="boards">
      <div id="player1"></div>
      <div id="player2"></div>
    </div>
  </div>
  <script src="index.js"></script>`;

function renderUI() {
  document.body.innerHTML = plainHTML;

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
}

export { renderUI };
