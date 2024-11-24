import Cloud from './../../styles/imagesSvg/cloud.svg'
import Resume from './../../styles/imagesSvg/resume.svg'
import './gameBoardGrid.js'

function gameBoardDomFunction() {
const body = document.querySelector('body');
const gameBoardContainer = document.createElement('div');
const title = document.createElement('div');
const titleh2 = document.createElement('h2');
const cloud = new Image();
const cloud2 = new Image();
const resume = new Image();
const primary = document.createElement('div');
const myAudio = document.querySelector('.myAudio');

cloud.src = Cloud;
cloud2.src = Cloud;
resume.src = Resume;

gameBoardContainer.className = 'gameBoardContainer2';
title.className = 'title2';
titleh2.className = 'titleh2';
cloud.className = 'cloud2'
cloud2.className = 'cloud2'
primary.className = 'primary2'
resume.className = 'resume2'

titleh2.textContent = 'Battleship'

body.appendChild(gameBoardContainer)
gameBoardContainer.appendChild(title);
title.appendChild(cloud2);
title.appendChild(titleh2);
title.appendChild(cloud);
title.appendChild(resume)
gameBoardContainer.appendChild(primary)

resume.addEventListener('click', () => {
    if (myAudio.muted === false) {
      myAudio.muted = true; 
  } else {
      myAudio.muted = false;
  }
});
 
};

export { gameBoardDomFunction }