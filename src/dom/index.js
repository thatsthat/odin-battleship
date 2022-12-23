import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { gameLoop } from "../app/index.js";

// Create module domInter to interact with the DOM and create UI
const domInter = (() => {
  const announceWinner = (playerName) => {
    // Show the modal
    let modal = document.getElementById("myModal");
    let modalText = document.querySelector(".modal-content > p");
    modalText.textContent = `${playerName} is the winner!`;
    modal.style.display = "block";
    // Click anywhere to start a new game
    const button = document.getElementById("buttonNewGame");
    button.addEventListener("click", () => {
      location.reload();
    });
  };
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
      </div>
      <div id="myModal" class="modal">
      <!-- Modal content -->
        <div class="modal-content">
          <p></p>
          <div id="newGame">
            <button id="buttonNewGame">New Game</button>
          </div>
        </div>
      </div>`;
    document.body.innerHTML = plainHTML;
    const gridP1 = document.getElementById("player1");
    const gridP2 = document.getElementById("player2");
    const evListen = () => {
      const cellID = event.target.id;
      const res = gameLoop.player2.board.receiveAttack(
        cellID,
        gameLoop.player2.name
      );
      // Change cell color depending on attack result
      if (res == 0) {
        event.target.style.backgroundColor = "grey";
      } else if (res == 1) {
        event.target.style.backgroundColor = "red";
      } else if (res == 2) {
        event.target.style.backgroundColor = "purple";
        // Check if this was last floating ship
        if (gameLoop.player2.board.allSunk()) {
          announceWinner(gameLoop.player1.name);
        }
      }
      event.target.style.color = event.target.style.backgroundColor;
      // Wait 1 second and make computer attack player 1
      const wait1Sec = new Promise((r) => setTimeout(r, 1000));
      wait1Sec.then(() => {
        // Generate automatic attack coords
        const attackCoords = gameLoop.player2.attack(
          gameLoop.player1.board.getShootsMap()
        );
        // Attack player1 using the coords
        const res2 = gameLoop.player1.board.receiveAttack(
          attackCoords,
          gameLoop.player1.name
        );
        // Change player 1 cell color depending on attack results,
        // change from coordinates to node id
        const cellInt = 10 * attackCoords[0] + attackCoords[1];
        const cell2ID = `a${cellInt}`;
        const attackedCell = document.getElementById(cell2ID);
        if (res2 == 0) {
          attackedCell.style.backgroundColor = "grey";
          attackedCell.style.color = "grey";
        } else if (res2 == 1) {
          attackedCell.style.backgroundColor = "red";
          attackedCell.style.color = "red";
        } else if (res2 == 2) {
          attackedCell.style.backgroundColor = "purple";
          attackedCell.style.color = "purple";
          // Check if this was last floating ship
          if (gameLoop.player1.board.allSunk()) {
            announceWinner(gameLoop.player2.name);
          }
        }
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
  const colorSunkShip = (coordsSet, playerName) => {
    coordsSet.forEach((coords) => {
      // change from coordinates to node id
      const cellInt = 10 * coords[0] + coords[1];
      let cell2ID = "";
      if (playerName == "Player 1") {
        cell2ID = `a${cellInt}`;
      }
      if (playerName == "Player 2") {
        cell2ID = `b${cellInt}`;
      }
      const cell = document.getElementById(cell2ID);
      cell.style.backgroundColor = "purple";
      cell.style.color = "purple";
    });
  };
  // Player 1 is active at start
  return {
    renderUI,
    colorSunkShip,
  };
})();

export { domInter };
