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
    this.ships.forEach(ship => {
      if (
          ship[1].indexOf(x) !== -1 && 
          ship[2].indexOf(y) !== -1
      ) {
          this.gameboard[y][x] = 'X'
          ship[0].hit();
      } else {
            this.gameboard[y][x] = 2;
      }
    });
  };

  reportEnd() {
      if (this.ships.every(item => item[0].sunk === true)) {
          return 'end'
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
let ship1 = new Ship(3)
player1.place(ship1, 1, 1, 'y')
player1.receiveAttack(2, 2)
player1.receiveAttack(1, 2)
player1.receiveAttack(1, 3)
player1.receiveAttack(1, 1)

export {Player, Ship, player1, player2}