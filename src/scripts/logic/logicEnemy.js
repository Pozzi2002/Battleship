import { player1 } from "./SubjectsGame.js";
import { bindPlayer } from "../primaryPage/gameBoardBindPlayer.js";

let xData;
let yData;
let hit = false;

function logicEnemyAttack(n = 0) {
  let x = randomNumber();
  let y = randomNumber();

  if (n > 2000) return;
  console.log(x, y)
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
      return xData += 1;
    } else {
      return yData += 1;
    }
  } else {
  return Math.round(Math.random() * 8);
 }
};
/*Logic enemy
xData;
yData;
hit;

if player1 gameboard == 1
xData = x
yData = y
hit = true;

if player1 gameboard == 'X' || 2 || 0 
hit = false

randomNumber
if (hit === true) {
  if (Math.random() > 0.5) {
  return xData += 1
  } else {
   return yData += 1
  }
} else {
 xData = 0;
 yData = 0;
return random
}
*/
export { logicEnemyAttack }