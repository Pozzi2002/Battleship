import { player1 } from "./SubjectsGame.js";
import { bindPlayer } from "../primaryPage/gameBoardBindPlayer.js";

let xData;
let yData;
let hit = false;

function logicEnemyAttack(n = 0) {
  let [x, y] = randomNumber();
  if (n > 2000) return;
  if (player1.gameboard[x][y] === 0) {
      player1.receiveAttack(y, x);
      bindPlayer();
      hit = false;
  } else if (player1.gameboard[x][y] === 1) {
      player1.receiveAttack(y, x);
      bindPlayer();
      xData = x;
      yData = y;
      hit = true;
  } else if (
      player1.gameboard[x][y] === 2 ||
      player1.gameboard[x][y] === 'X'
  ) {
      hit = false;
      logicEnemyAttack(n + 1);
  }
};

function randomNumber() {
  if (hit === true) {
    if (Math.random() > 0.5) {
      return [ xData += 1, yData ];
    } else {
      return [ xData, yData += 1 ];
    }
  } else {
    let randomX = Math.round(Math.random() * 8); 
    let randomY = Math.round(Math.random() * 8);
  return [ randomX, randomY ]
 }
};

/*Logic enemy

*/
export { logicEnemyAttack }