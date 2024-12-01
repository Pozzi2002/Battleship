import Cloud from './../../styles/imagesSvg/cloud.svg'
import Resume from './../../styles/imagesSvg/resume.svg'
import { createGrid } from './gameBoardGrid.js'

function gameBoardDomFunction(playerName) {
if (playerName === '') playerName = 'Player'

const body = document.querySelector('body');
const gameBoardContainer = document.createElement('div');
const title = document.createElement('div');
const titleh2 = document.createElement('h2');
const cloud = new Image();
const cloud2 = new Image();
const resume = new Image();
const primary = document.createElement('div');
const myAudio = document.querySelector('.myAudio');
const namePlayer = document.createElement('h2')

cloud.src = Cloud;
cloud2.src = Cloud;
resume.src = Resume;

gameBoardContainer.className = 'gameBoardContainer2';
title.className = 'title2';
titleh2.className = 'titleh2';
cloud.className = 'cloud2';
cloud2.className = 'cloud2';
primary.className = 'primary2';
resume.className = 'resume2';
namePlayer.className = 'namePlayer2'

namePlayer.textContent = playerName + " VS Computer "
titleh2.textContent = 'Battleship'

body.appendChild(gameBoardContainer)
gameBoardContainer.appendChild(title);
title.appendChild(cloud2);
title.appendChild(titleh2);
title.appendChild(cloud);
title.appendChild(resume);
gameBoardContainer.appendChild(primary);
primary.appendChild(namePlayer);

resume.addEventListener('click', () => {
    if (myAudio.muted === false) {
      myAudio.muted = true; 
  } else {
      myAudio.muted = false;
  }
});
 

//CreateGrid function from file gameBoardGrid.js
createGrid()
};

export { gameBoardDomFunction }