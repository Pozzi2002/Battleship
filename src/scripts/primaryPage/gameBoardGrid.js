import { bindPlayer } from './gameBoardBindPlayer.js'
function createGrid() {
const primary = document.querySelector('.primary2');
const firstPlayerGrid = document.createElement('div');
const secondPlayerGrid = document.createElement('div');

firstPlayerGrid.className = 'firstPlayerGrid2';
secondPlayerGrid.className = 'secondPlayerGrid2';

primary.appendChild(firstPlayerGrid);
primary.appendChild(secondPlayerGrid);

appendsGrid(firstPlayerGrid);
appendsGrid(secondPlayerGrid);

bindPlayer()

};

function appendsGrid(playerGrid) {
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      const grid = document.createElement('div');
      grid.setAttribute('id', `${i}-${j}`)
      playerGrid.append(grid);
     }
   }
};


export { createGrid }