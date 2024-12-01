import { player1 } from "./../logic/SubjectsGame.js"
import { placeShips } from "../placeShips/chooseCoordinates.js";
function bindPlayer() {
const firstPlayerGrid = document.querySelector('.firstPlayerGrid2').children;
let total = []

player1.gameboard.forEach(arr => arr.forEach(item => total.push(item)));
  
Array.from(firstPlayerGrid).forEach(grid => {
  if (total[0] === 'X') {
    grid.className = 'hit';
  } else if (total[0] === 2) {
    grid.className = 'miss';
  }
  total.shift();
 });
 console.log(player1.gameboard)
};




export { bindPlayer }