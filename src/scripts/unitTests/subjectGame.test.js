import { Player, Ship } from './../logic/SubjectsGame.js'
let player1 = new Player('Player');
let ship1 = new Ship(3)
player1.place(ship1, 1, 1, 'y')


//let player2 = new Player('Computer');


test('Test Player', () => {
    expect(player1).toEqual(2);

})