import "./styles/introductionStyle.css";
import "./styles/gameBoardStyle.css";
import './scripts/introductionPage/music.js'
import './scripts/introductionPage/startPlaying.js'
import './styles/prepareForBattleStyle.css'
import { gameBoardDomFunction } from'./scripts/primaryPage/gameBoardDom.js'
import { chooseCoordinates } from './scripts/placeShips/dragAndDrop.js'

const startPlayButton = document.querySelector('.startPlayButton')
const primaryContainer = document.querySelector('.primaryContainer')

startPlayButton.addEventListener('click', () => {
    const playerName = document.querySelector('#inputPlayer').value;
    
    primaryContainer.parentNode.removeChild(primaryContainer);
    chooseCoordinates(playerName);

    document.querySelector('.fight2').addEventListener('click', () => {
      let gameBoardContainer3 = document.querySelector('.gameBoardContainer3');
      gameBoardContainer3.parentNode.removeChild(gameBoardContainer3);
      gameBoardDomFunction(playerName);
    })
})
