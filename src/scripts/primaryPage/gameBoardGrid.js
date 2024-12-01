import { bindPlayer } from './gameBoardBindPlayer.js'
import { bindEnemy } from './gameBoardBindEnemy.js';
import { attackEnemyDom } from './gameBoardAttackEnemy.js';
import { player1 } from '../logic/SubjectsGame.js';
import { placeShips } from '../placeShips/chooseCoordinates.js';
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

attackEnemyDom();
placeShips(player1.ships[0][1], player1.ships[1][1], player1.ships[2][1][0], player1.ships[3][1][0], player1.ships[3][2][0], player1.ships[4][2][0])
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