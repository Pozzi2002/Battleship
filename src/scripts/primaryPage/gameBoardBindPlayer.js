import { player1, Ship } from "./../logic/SubjectsGame.js"
function bindPlayer() {
firstPlayerGrid.forEach(renderContent)

player1.gameboard.forEach(arr => arr.forEach(item => {
    let i = 0;
    let j = 0
    document.getElementById(`${i}-${j}`).textContent = item
 })
);

}




export { bindPlayer }