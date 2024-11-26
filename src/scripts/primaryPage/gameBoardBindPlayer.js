import { player1, Ship } from "./../logic/SubjectsGame.js"
function bindPlayer() {
const firstPlayerGrid = document.querySelector('.firstPlayerGrid2').children;
let total = []

player1.gameboard.forEach(arr => arr.forEach(item => total.push(item)));
  
Array.from(firstPlayerGrid).forEach(grid => {
  grid.textContent = total[0];
  total.shift()
 });
};




export { bindPlayer }