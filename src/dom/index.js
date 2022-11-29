import "./style.css";
//import "@mdi/font/css/materialdesignicons.css";
import { taskList } from "../app/index.js";

function renderUI() {
  const hidude = document.createElement("div");
  hidude.textContent = "Dude where is my party now";
  const cont = document.getElementById("content");
  cont.appendChild(hidude);
}

export { renderUI };
