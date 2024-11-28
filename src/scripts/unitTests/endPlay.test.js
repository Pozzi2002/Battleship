import { endPlay } from './../primaryPage/endPlay/endPlay.js'
import { player2 } from '../logic/SubjectsGame.js';

//let player2 = new Player('Computer');


test.only('Test Player', () => {
    expect(endPlay()).toEqual(player2);
})