import { getRandomElement } from "./utils.js";

function createTile(data) {
  const tile = document.createElement("div");
  tile.className = "grid-item";

  const name = document.createElement("h3");
  name.textContent = data.name || data.species;
  tile.appendChild(name);

  const image = document.createElement("img");
  const imgName = data.species ? data.species.toLowerCase() : "human";
  image.src = `/img/${imgName}.png`;
  image.alt = data.name || data.species;
  tile.appendChild(image);

  const fact = document.createElement("p");
  fact.textContent = data.facts?.at(-1) || "No facts available.";
  tile.appendChild(fact);

  if (data.species && typeof data.playRoar === "function") {
    tile.addEventListener("click", () => {
      data.playRoar();
    });
  }

  return tile;
}

export function renderGrid(container, tiles) {
  container.innerHTML = "";
  tiles.forEach((tileData) => {
    const tile = createTile(tileData);
    container.appendChild(tile);
  });
}
