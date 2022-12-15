import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { gameLoop } from "../app/index.js";

// Create module domInter to interact with the DOM and create UI
const domInter = (() => {
  const renderUI = () => {
    const plainHTML = `
      <div id="content">
        <div id="boards">
          <div class="zone">
            <div class="title">Player 1</div>
            <div id="player1" class="player"></div>
          </div>
          <div class="zone">
            <div class="title">Computer</div>  
            <div id="player2" class="player"></div>
          </div>
        </div>
      </div>`;
    document.body.innerHTML = plainHTML;
    const gridP1 = document.getElementById("player1");
    const gridP2 = document.getElementById("player2");
    const evListen = () => {
      const cellID = event.target.id;
      const res = gameLoop.player2.board.receiveAttack(cellID);

      // Change cell color depending on attack result
      if (res == 0) {
        event.target.style.backgroundColor = "grey";
      } else if (res == 1) {
        event.target.style.backgroundColor = "red";
      } else if (res == 2) {
        event.target.style.backgroundColor = "red";
      }
      event.target.style.color = event.target.style.backgroundColor;
      // Wait 1 second and make computer attack player 1
      const wait1Sec = new Promise((r) => setTimeout(r, 1000));
      wait1Sec.then(() => {
        // Generate automatic attack coords
        const attackCoords = gameLoop.player2.attack(
          gameLoop.player1.board.getHitsMap()
        );
        //console.log(attackCoords);
        // Attack player1 using the coords
        const res2 = gameLoop.player1.board.receiveAttack(attackCoords);
        console.log(res2);
        // Change player 1 cell collor depending on attack results
      });
    };
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `a${i}`;
      cell.textContent = cell.id;
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
