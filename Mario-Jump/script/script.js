const game = document.querySelector('.game')
const mario = document.querySelector('#mario')
const pipe = document.querySelector('#pipe')
const tryagain = document.querySelector('.tryAgain')
const startScreen = document.querySelector('.startScreen')
const pipeClass = document.querySelector('.pipe')
const points = document.querySelector('#points')
const score = document.querySelector('#score')
var end = 0
var point = 0;

function play () {
    startScreen.style.display = 'none'
    pipeClass.style.display = 'block'
}

function jump (){
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // console.log(point)

    if(pipePosition < 121 && pipePosition > 0 && marioPosition < 60){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        tryagain.style.display = 'grid'
        end = 1
        // score.innerHTML = point
    } else if(pipePosition < 121 && pipePosition > 0){
        point = point + 1
        points.innerHTML = point
    }
    requestAnimationFrame(loop);
}

window.addEventListener('keydown', jump)
window.addEventListener('touch', jump)

document.querySelector('#again').addEventListener('click', () => {
    location.reload();    
})

document.querySelector('#start').addEventListener('click', play)