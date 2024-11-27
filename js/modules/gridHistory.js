let gridHistory = [];

export function saveGridHistory(grid) {
  gridHistory.push(grid);
  if (gridHistory.length > 2) {
    gridHistory.shift();
  }
  localStorage.setItem("gridHistory", JSON.stringify(gridHistory));
}

export function loadGridHistory() {
  const history = localStorage.getItem("gridHistory");
  if (history) {
    gridHistory = JSON.parse(history).map((grid) =>
      grid.map((tile) => ({
        ...tile,
        playRoar: function () {
          if (tile.roar) {
            const audio = new Audio(tile.roar);
            audio.play();
          }
        },
      }))
    );
  }
  return gridHistory;
}

export function renderGridHistory(container) {
  container.innerHTML = "";
  gridHistory.forEach((grid) => {
		const label = document.createElement("h2");
		label.textContent = `History Grid ${gridHistory.indexOf(grid) + 1}`;
    container.appendChild(label);
    const gridElement = document.createElement("div");
    gridElement.className = "grid";
    grid.forEach((tile) => {
      const tileElement = document.createElement("div");
      tileElement.className = "grid-item";
      tileElement.innerHTML = `
        <h3>${tile.name}</h3>
        <img src="${tile.image}" alt="${tile.name}" />
        <p>${tile.facts ? tile.facts[0] : "No facts available."}</p>
      `;
			if (tile.playRoar && typeof tile.playRoar === "function") {
        tileElement.addEventListener("click", () => {
          tile.playRoar();
        });
      }
      gridElement.appendChild(tileElement);
    });
    container.appendChild(gridElement);
  });
}