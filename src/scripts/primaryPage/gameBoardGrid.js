import { bindPlayer } from './gameBoardBindPlayer.js'
import { bindEnemy } from './gameBoardBindEnemy.js';
import { attackEnemyDom } from './gameBoardAttackEnemy.js'
import { logicEnemyAttack } from '../logic/logicEnemy.js';
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

bindPlayer();
bindEnemy();
attackEnemyDom();
logicEnemyAttack();
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