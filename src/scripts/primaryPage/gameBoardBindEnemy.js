import { player2 } from "./../logic/SubjectsGame.js";
import { placeShips } from "../placeShips/chooseCoordinates.js";
import Ship1 from './../placeShips/ships/ship1y.png';
import Ship3 from './../placeShips/ships/ship3.png';
import Ship4 from './../placeShips/ships/ship5.png';

let ships1 = new Image();
let ships2 = new Image();
let ships3 = new Image();
let ships4 = new Image();
let ships5 = new Image();

ships1.src = Ship1;
ships2.src = Ship1;
ships3.src = Ship3;
ships4.src = Ship3;
ships5.src = Ship4;

ships1.className = 'ships20';
ships2.className = 'ships20';
ships3.className = 'ships30'
ships4.className = 'ships30'
ships5.className = 'ships40'

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

 document.querySelector('.secondPlayerGrid2').childNodes.forEach(grid => {
  if (grid.id.split('-')[1] == player2.ships[0][1] && grid.id.split('-')[0] == 0 && player2.ships[0][0].sunk) {
    document.querySelector('.secondPlayerGrid2').querySelector(`[id="${grid.id}"]`).appendChild(ships1)    
  }
  if (grid.id.split('-')[1] == player2.ships[1][1] && grid.id.split('-')[0] == 0 && player2.ships[1][0].sunk) {
    document.querySelector('.secondPlayerGrid2').querySelector(`[id="${grid.id}"]`).appendChild(ships2)    
  }
  if (grid.id.split('-')[1] == player2.ships[2][1][0] && grid.id.split('-')[0] == 2 && player2.ships[2][0].sunk) {
    document.querySelector('.secondPlayerGrid2').querySelector(`[id="${grid.id}"]`).appendChild(ships3)    
  }
  if (grid.id.split('-')[1] == player2.ships[3][1][0] && grid.id.split('-')[0] ==  player2.ships[3][2][0] && player2.ships[3][0].sunk) {
    document.querySelector('.secondPlayerGrid2').querySelector(`[id="${grid.id}"]`).appendChild(ships4)    
  }
  if (grid.id.split('-')[1] == 4 && grid.id.split('-')[0] == player2.ships[4][2][0] && player2.ships[4][0].sunk) {
    document.querySelector('.secondPlayerGrid2').querySelector(`[id="${grid.id}"]`).appendChild(ships5)    
  }
})
};



export { bindEnemy }