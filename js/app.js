import Dino from "./modules/dino.js";
import { handleFormSubmission } from "./modules/FormHandler.js";
import { renderGrid } from "./modules/gridManager.js";
import { saveGridHistory, loadGridHistory, renderGridHistory } from "./modules/gridHistory.js";
import { getRandomElement } from "./modules/utils.js";

const getDinoData = async () => {
  try {
    const res = await fetch("../data/dino.json");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.Dinos.map((dino) => new Dino(dino));
  } catch (error) {
    console.error("Error fetching dino data:", error);
    return [];
  }
};

const gridContainer = document.querySelector(".grid");
const historyContainer = document.getElementById("grid-history");
const historyBtn = document.getElementById("history-btn");

historyContainer.style.display = "none";

historyBtn.addEventListener("click", () => {
  if (historyContainer.style.display === "none") {
    historyContainer.style.display = "block";
    historyBtn.textContent = "Hide History";
  } else {
    historyContainer.style.display = "none";
    historyBtn.textContent = "Show History";
  }
});

(async () => {
  const dinos = await getDinoData();
  loadGridHistory();
  renderGridHistory(historyContainer);

  handleFormSubmission("dino-compare", (human) => {
    dinos.forEach((dino) => {
      const randomFact = getRandomElement(dino.getAllFacts(human));
      dino.facts = [randomFact];
    });

    const pigeonIndex = dinos.findIndex((dino) => dino.species.toLowerCase() === "pigeon");
    const pigeon = dinos.splice(pigeonIndex, 1)[0];

    const shuffledDinos = dinos.sort(() => Math.random() - 0.5);
    const selectedDinos = shuffledDinos.slice(0, 7);

    const tiles = [
      ...selectedDinos.slice(0, 3),
      ...selectedDinos.slice(3, 4),
      human,
      ...selectedDinos.slice(4, 6),
      ...selectedDinos.slice(6, 7),
      pigeon,
    ]

    renderGrid(gridContainer, tiles);

    const currentGrid = tiles.map((tile) => ({
      name: tile.name || tile.species,
      facts: tile.facts,
      image: tile.species ? `/img/${tile.species.toLowerCase()}.png` : "/img/human.png",
      roar: tile.roar || ""
    }));

    saveGridHistory(currentGrid);
  });
})();