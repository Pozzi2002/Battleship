import { player1, Ship } from "./../logic/SubjectsGame.js"
function bindPlayer() {
let firstPlayerGrid = document.querySelector(".firstPlayerGrid2").children;
firstPlayerGrid.forEach(renderContent)


player1.gameboard.forEach(arr => arr.forEach(item => {
   
 })
);

}




export { bindPlayer }