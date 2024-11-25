import { player1, Ship } from './../logic/SubjectsGame.js'


//let player2 = new Player('Computer');


test('Test Player', () => {
    expect(player1.type).toEqual('Player');
})