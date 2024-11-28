import { player1 } from "./SubjectsGame.js";
import { bindPlayer } from "../primaryPage/gameBoardBindPlayer.js";
import { endPlay } from "../primaryPage/endPlay/endPlay.js";
let xData;
let yData;
let hit = [];


function logicEnemyAttack(n = 0) {
  let [x, y] = randomNumber();
  if (x < 0 || x > 8) x = 1;
  if (y < 0 || y > 8) y = 1;
  if (n > 2000) return;
  if (player1.gameboard[x][y] === 0) {
      player1.receiveAttack(y, x);
      bindPlayer();
      hit.push(false);
  } else if (player1.gameboard[x][y] === 1) {
      player1.receiveAttack(y, x);
      bindPlayer();
      xData = x;
      yData = y;
      hit.push(true);
  } else if (
      player1.gameboard[x][y] === 2 ||
      player1.gameboard[x][y] === 'X'
  ) {
      hit.push(false);
      logicEnemyAttack(n + 1);
  };

};

function randomNumber() {
  if ((hit[hit.length - 1] === true ||
      hit[hit.length - 2] === true ||
      hit[hit.length - 3] === true)
  ) {
    if (Math.random() < 0.25) {
      return [ xData + 1, yData ];
    } else if (Math.random() < 0.5) {
      return [ xData, yData + 1 ];
    } else if (Math.random() < 0.75) {
      return [ xData - 2, yData ];
    } else {
      return [ xData, yData - 2 ];
    }
  } else {
    let randomX = Math.round(Math.random() * 8); 
    let randomY = Math.round(Math.random() * 8);
  return [ randomX, randomY ]
 };
};



export { logicEnemyAttack }