import { Player, player1, player2, Ship } from "../logic/SubjectsGame";
import Ship1 from './ships/ship1y.png';
import Ship3 from './ships/ship3.png';
import Ship4 from './ships/ship5.png';

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

function randomCoordinatesPlayer(player) {
    player.gameboard = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
    ];
    let ship1 = new Ship(2);
    let ship2 = new Ship(2);  
    let ship3 = new Ship(3);
    let ship5 = new Ship(4);
    let ship4 = new Ship(3);

    let coor1 = 0 + Math.round(Math.random() * 4);
    let coor2 = 5 + Math.round(Math.random() * 3);
    let coor3 = 0 + Math.round(Math.random() * 6);
    let coor4 = 0 + Math.round(Math.random() * 6);
    let coor41 = 3 + Math.round(Math.random() * 2)
    let coor5 = 6 + Math.round(Math.random() * 2)

    player.place(ship1, coor1, 0, 'y');
    player.place(ship2, coor2, 0, 'y');
    player.place(ship3, coor3, 2, 'x');
    player.place(ship4, coor4 , coor41, 'x');
    player.place(ship5, 4, coor5, 'x');

    return { coor1, coor2, coor3, coor4, coor41, coor5 }
};

function sendShips() {
    player1.ships = [];
    player2.ships = [];
    let player1Function = randomCoordinatesPlayer(player1);
    let player2Function = randomCoordinatesPlayer(player2);
    placeShips(player1Function.coor1, player1Function.coor2, player1Function.coor3, player1Function.coor4, player1Function.coor41, player1Function.coor5);
};

function placeShips(coor1, coor2, coor3, coor4, coor41, coor5) {
  document.querySelector('.firstPlayerGrid2').childNodes.forEach(grid => {
    if (grid.id.split('-')[1] == coor1 && grid.id.split('-')[0] == 0) {
        document.getElementById(`${grid.id}`).appendChild(ships1)    
    }
    if (grid.id.split('-')[1] == coor2 && grid.id.split('-')[0] == 0) {
        document.getElementById(`${grid.id}`).appendChild(ships2)    
    }
    if (grid.id.split('-')[1] == coor3 && grid.id.split('-')[0] == 2) {
        document.getElementById(`${grid.id}`).appendChild(ships3)    
    }
    if (grid.id.split('-')[1] == coor4 && grid.id.split('-')[0] == coor41) {
        document.getElementById(`${grid.id}`).appendChild(ships4)    
    }
    if (grid.id.split('-')[1] == 4 && grid.id.split('-')[0] == coor5) {
        document.getElementById(`${grid.id}`).appendChild(ships5)    
    }
 })
}

export { sendShips, placeShips };