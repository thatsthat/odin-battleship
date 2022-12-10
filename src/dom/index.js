import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { taskList } from "../app/index.js";

// Create module domInter to interact with the DOM and create UI
const domInter = (() => {
  const renderUI = () => {
    const plainHTML = `
      <div id="content">
        <div id="boards">
          <div id="player1"></div>
          <div id="player2"></div>
        </div>
      </div>`;
    document.body.innerHTML = plainHTML;
    const gridP1 = document.getElementById("player1");
    const gridP2 = document.getElementById("player2");
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `a${i}`;
      cell.textContent = cell.id;
      // Add click listener to register attacks
      cell.addEventListener("click", (event) => {
        const a = event.target.id;
      });
      gridP1.appendChild(cell);
    }
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = `b${i}`;
      cell.textContent = cell.id;
      gridP2.appendChild(cell);
    }
  };

  return {
    renderUI,
  };
})();

export { domInter };
