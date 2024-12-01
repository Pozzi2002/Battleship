class Ship {
  constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
  };

  hit() {
    this.hits++;
    this.isSunk();
  };
  
  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  };

};

class Gameboard {
  constructor() {
      this.gameboard = [
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
      this.ships = [];
  };

  place(ship, x, y, direction) {
    this.ships.push([ship, [x], [y], direction])
    for (let i = 1; i < ship.length; i++) {
      if (direction === 'x') {
        this.gameboard[y][x] = 1;
        x++;
        this.gameboard[y][x] = 1;
        this.ships[this.ships.length-1][1].push(x);
      } else if (direction === 'y'){
        this.gameboard[y][x] = 1;
        y++;
        this.gameboard[y][x] = 1;
        this.ships[this.ships.length-1][2].push(y);
      }
    };
  };

  receiveAttack(x, y) {
    let total = [];
    this.ships.forEach(ship => {
      this.gameboard[y][x] = 2;
      if (
          ship[1].indexOf(x) !== -1 && 
          ship[2].indexOf(y) !== -1
      ) {
          console.log('test1')
          total.push(y)
          total.push(x)
          this.gameboard[y][x] = 2
          ship[0].hit();
       }
     });
       if (total.length > 0) {
         this.gameboard[total[0]][total[1]] = 'X';
         total = [];
    }
  };

  reportEnd() {
      if (this.ships.every(item => item[0].sunk === true)) {
          return true
      }
  };
};

class Player extends Gameboard{
  constructor(type) {
      super()
      this.type = type;
  };
};


let player1 = new Player('Player');
let player2 = new Player('Computer');


export {Player, Ship, player1, player2}