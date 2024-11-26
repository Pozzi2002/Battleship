import { player2 } from "./../logic/SubjectsGame.js"
import { bindEnemy } from "./gameBoardBindEnemy.js";
function attackEnemyDom() {
  const secondPlayerGrid2 = document.querySelector('.secondPlayerGrid2').children;

  Array.from(secondPlayerGrid2).forEach(grid => {
    let y = Number(grid.id.split('-')[0]);
    let x = Number(grid.id.split('-')[1]);
    grid.addEventListener('click', () => {
      player2.receiveAttack(x, y);
      bindEnemy();
    })
  });
  
};

export { attackEnemyDom }