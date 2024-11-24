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
      for (i = 0; i < ship.length; i++) {
        if (direction === 'x') {
          this.gameboard[y][x] = 1;
          x++;
          this.ships[this.ships.length-1][1].push[x];
        } else if (direction === 'y'){
          this.gameboard[y][x] = 1;
          y++;
          this.ships[this.ships.length-1][2].push[y];
        }
      };
    };

    receiveAttack(x, y) {
      this.ships.forEach(ship => {
        if (
            ship[1].indexOf(x) !== -1 && 
            ship[2].indexOf(y) !== -1
        ) {
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

class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard();
    };
};