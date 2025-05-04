const element = document.getElementsByClassName('element')[0]
const playButton = document.getElementById('playButton')
const pauseButton = document.getElementById('pauseButton')

playButton.addEventListener('click', ()=> element.style. animationPlayState = "running")
pauseButton.addEventListener('click', ()=> element.style.animationPlayState = "paused")