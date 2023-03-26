const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const tryagain = document.querySelector('.tryAgain')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition < 121 && pipePosition > 0 && marioPosition < 60){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        tryagain.style.display = 'grid'

    }
}, 10);

window.addEventListener('keydown', jump)
window.addEventListener('click', jump)
window.addEventListener('touch', jump)

document.querySelector('#again').addEventListener('click', () => {
    location.reload()
})