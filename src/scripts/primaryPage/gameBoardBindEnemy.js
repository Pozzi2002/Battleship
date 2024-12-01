import { player2 } from "./../logic/SubjectsGame.js";
function bindEnemy() {
const secondPlayerGrid2 = document.querySelector('.secondPlayerGrid2').children;
let total = [];

player2.gameboard.forEach(arr => arr.forEach(item => total.push(item)));
  
Array.from(secondPlayerGrid2).forEach(grid => {
    if (total[0] === 'X') {
      grid.className = 'hit';
    } else if (total[0] === 2) {
      grid.className = 'miss';
    }
  total.shift()
 });
 console.log(player2)
};



export { bindEnemy }