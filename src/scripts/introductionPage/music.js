import myAudioResource from './../../styles/music/sea.mp3'
const head = document.querySelector('head');
const myAudio = new Audio(myAudioResource);
const play = document.querySelector('.play')

head.appendChild(myAudio)

myAudio.className = 'myAudio'

play.addEventListener('click', () => {
    myAudio.play()
})
export { myAudio }