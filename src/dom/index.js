import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { gameLoop } from "../app/index.js";

// Create module domInter to interact with the DOM and create UI
const domInter = (() => {
  const renderUI = () => {
    const plainHTML = `
      <div id="content">
        <div id="boards">
          <div id="player1" class="player"></div>
          <div id="player2" class="player, hidden"></div>
        </div>
      </div>`;
    document.body.innerHTML = plainHTML;
    const gridP1 = document.getElementById("player1");
    const gridP2 = document.getElementById("player2");
    const evListen = () => {
      const cellID = event.target.id;
      const player = event.target.parentNode.id;
      let res = "";
      // Call the receiveAttack method of corresponding player
      if (player == "player1") {
        res = gameLoop.player1.board.receiveAttack(cellID);
      } else if (player == "player2") {
        res = gameLoop.player2.board.receiveAttack(cellID);
      }
      // Change cell color depending on attack result
      if (res == 0) {
        event.target.style.backgroundColor = "grey";
      } else if (res == 1) {
        event.target.style.backgroundColor = "red";
      } else if (res == 2) {
        event.target.style.backgroundColor = "red";
      }
    };
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `a${i}`;
      cell.textContent = cell.id;
      // Add click listener to register attacks
      cell.addEventListener("click", evListen);
      gridP1.appendChild(cell);
    }
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `b${i}`;
      cell.textContent = cell.id;
      // Add click listener to register attacks
      cell.addEventListener("click", evListen);
      gridP2.appendChild(cell);
    }
  };
  // Player 1 is active at start
  return {
    renderUI,
  };
})();

export { domInter };
