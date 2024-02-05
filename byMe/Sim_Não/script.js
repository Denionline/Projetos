const titulo = document.querySelector('.titulo');
const btnSim = document.querySelector('.btnSim');
const btnNao = document.querySelector('.btnNao');
const ocupaEspaco = document.querySelector('.ocupaEspaco');

const caixa = document.querySelector('.caixa');

const somUepa = new Audio('sounds/uepa.mp3');
const torcendoContra = new Audio('sounds/torcendoContra.mp3');
const voTePega = new Audio('sounds/votepega.mp3');
const paraDeQuerer = new Audio('sounds/paradequerer.mp3');
const euevc = new Audio('sounds/euevc.mp3');

const limiteExtra = 10;
let contagem = 0;

btnSim.addEventListener('click', () => clicouSim());

btnNao.addEventListener('mouseenter', () => {
    
    if(contagem < limiteExtra){
        somUepa.pause();
        somUepa.currentTime = 0;
        somUepa.play();
    }

    ocupaEspaco.style.display = 'block';
    btnNao.style.position = 'absolute';
    
    let tamanhoH = window.screen.height - 200;
    btnNao.style.top = `${alturaRandom(tamanhoH)}px`;
    
    let tamanhoW = window.screen.width - 100;
    btnNao.style.left = `${larguraRandom(tamanhoW)}px`;
    
    contagem++
    extra(contagem);
})

function extra(cont){
    if(cont > limiteExtra){
        paraDeQuerer.pause();
        paraDeQuerer.currentTime = 0;
        paraDeQuerer.play();
    }
}


btnNao.addEventListener('click', () => {
    voTePega.pause();
    voTePega.currentTime = 0;
    voTePega.play();
})

function clicouSim() {
    euevc.pause();
    euevc.currentTime = 0;
    euevc.play();
}

function alturaRandom(tamanhoH) {
    return parseInt(Math.random() * (tamanhoH - 0))
}
function larguraRandom(tamanhoW) {
    return parseInt(Math.random() * (tamanhoW - 0))
}