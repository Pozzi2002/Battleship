import Cloud from './../../styles/imagesSvg/cloud.svg'
import Resume from './../../styles/imagesSvg/resume.svg'
import { sendShips } from './chooseCoordinates.js';
import { gameBoardDomFunction } from '../primaryPage/gameBoardDom.js';
function chooseCoordinates(playerName) {
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
const namePlayer = document.createElement('h2');
const rerandom = document.createElement('button');
const fight = document.createElement('button');

cloud.src = Cloud;
cloud2.src = Cloud;
resume.src = Resume;

gameBoardContainer.className = 'gameBoardContainer3';
title.className = 'title2';
titleh2.className = 'titleh2';
cloud.className = 'cloud2';
cloud2.className = 'cloud2';
primary.className = 'primary2';
resume.className = 'resume2';
namePlayer.className = 'namePlayer2';
rerandom.className = 'rerandom2';
fight.className = 'fight2'

namePlayer.textContent = playerName + " VS Computer ";
titleh2.textContent = 'Battleship';
rerandom.textContent = 'Random'
fight.textContent = 'Fight'

body.appendChild(gameBoardContainer)
gameBoardContainer.appendChild(title);
title.appendChild(cloud2);
title.appendChild(titleh2);
title.appendChild(cloud);
title.appendChild(resume);
gameBoardContainer.appendChild(primary);
primary.appendChild(namePlayer);
primary.appendChild(rerandom);
primary.appendChild(fight);


resume.addEventListener('click', () => {
    if (myAudio.muted === false) {
      myAudio.muted = true; 
  } else {
      myAudio.muted = false;
  }
});

 createGrid();
 sendShips();

 rerandom.addEventListener('click', () => {
  sendShips();
 });

}

function createGrid() {
    const primary = document.querySelector('.primary2');
    const firstPlayerGrid = document.createElement('div');
    
    firstPlayerGrid.className = 'firstPlayerGrid2';
    
    primary.appendChild(firstPlayerGrid);
    
      for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
          const grid = document.createElement('div');
          grid.setAttribute('id', `${i}-${j}`)
          firstPlayerGrid.append(grid);
       }
    };
};


export { chooseCoordinates }
