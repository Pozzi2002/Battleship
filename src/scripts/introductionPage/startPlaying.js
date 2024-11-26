const play = document.querySelector('.play')
const startPlay = document.querySelector('.startPlayDialog')
const startPlayButton = document.querySelector('.startPlayButton')
const primaryContainer = document.querySelector('.primaryContainer')

play.addEventListener('click', () => {
    startPlay.showModal()
})