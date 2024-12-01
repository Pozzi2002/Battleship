import { player1 } from './../../logic/SubjectsGame.js';
import { player2 } from './../../logic/SubjectsGame.js';
import { chooseCoordinates } from '../../placeShips/dragAndDrop.js';
function endPlay() {
  if (player1.reportEnd() == true || player2.reportEnd() == true) {
      const secondPlayerGrid2 = document.querySelector('.secondPlayerGrid2');
      const firstPlayerGrid2 = document.querySelector('.firstPlayerGrid2');
      const dialogEndPlay = document.createElement('dialog');
      const dialogText = document.createElement('h2');
      const dialogButton = document.createElement('button');
      const gameBoardContainer2 = document.querySelector('.gameBoardContainer2');
      const namePlayer = document.querySelector('.namePlayer2');

      gameBoardContainer2.appendChild(dialogEndPlay);
      dialogEndPlay.appendChild(dialogText);
      dialogEndPlay.appendChild(dialogButton);
    
      dialogEndPlay.className = 'dialogEndPlay2';
      dialogText.className = 'dialogText2';
      dialogButton.className = 'dialogButton2';

      dialogButton.textContent = 'Restart?'

    if (player1.reportEnd() == true) {
        firstPlayerGrid2.classList.add('disableButton')
        secondPlayerGrid2.classList.add('disableButton')
         dialogText.textContent = "Oh no! Enemy win!"
         setTimeout(showDialog, 400)
    } else if (player2.reportEnd() == true) {
        firstPlayerGrid2.classList.add('disableButton')
        secondPlayerGrid2.classList.add('disableButton')

        dialogText.textContent = "Congratulations! You're win!"
        setTimeout(showDialog, 400)
  }


  function showDialog() {
    dialogEndPlay.show()
  };

  dialogButton.addEventListener('click', () => {
    location.reload()
  });

 };
};

export { endPlay }