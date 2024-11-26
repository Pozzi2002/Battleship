import { player1 } from "./SubjectsGame.js"
import { bindPlayer } from "../primaryPage/gameBoardBindPlayer.js"
function logicEnemyAttack() {
  let x = Math.round(Math.random() * 8)
  let y = Math.round(Math.random() * 8)
  
  if (player1.gameboard[y][x] = 1) {
    player1.receiveAttack(y, x);
    bindPlayer();
  } else {
    logicEnemy()
  }
}

export { logicEnemyAttack }