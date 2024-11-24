import "./styles/introductionStyle.css";
import "./styles/gameBoardStyle.css";
import './scripts/introductionPage/music.js'
import './scripts/introductionPage/startPlaying.js'
import { gameBoardDomFunction } from'./scripts/primaryPage/gameBoardDom.js'

const startPlayButton = document.querySelector('.startPlayButton')
const primaryContainer = document.querySelector('.primaryContainer')

startPlayButton.addEventListener('click', () => {
    primaryContainer.parentNode.removeChild(primaryContainer);
    gameBoardDomFunction();
})
