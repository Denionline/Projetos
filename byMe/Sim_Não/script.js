const titulo = document.querySelector('.titulo');
const btnSim = document.querySelector('.btnSim');
const btnNao = document.querySelector('.btnNao');

const caixa = document.querySelector('.caixa');
const imgGatinhoTristonho = document.querySelector('.img_gatinho-tristonho');
const imgGatoDeBuetas = document.querySelector('.img_gato-de-buetas')
const imgChuva = document.querySelector('.img_chuva');
const imgDoguenho = document.querySelector('.img_doguenho');
const imgCoracoesSubindo = document.querySelector('.img_coracoes-subindo');

const somTrovao = new Audio('sounds/som-trovao.mp3')
const somChuva = new Audio('sounds/som-chuva.mp3')
const somScooby = new Audio('sounds/som-scooby.mp3')
let contagem = 0;

btnSim.addEventListener('click', () => clicouSim())

btnNao.addEventListener('click', () => {
    if(btnNao.innerHTML == 'Sim'){
        clicouSim();
        return;
    }
    let tamanhoH = window.screen.height - 200;
    let tamanhoW = window.screen.width - 100;
    btnNao.style.position = 'absolute';
    btnNao.style.top = `${alturaRandom(tamanhoH)}px`
    btnNao.style.left = `${larguraRandom(tamanhoW)}px`
    contagem++
    extras(contagem)
})

function alturaRandom(tamanhoH){
    return parseInt(Math.random() * (tamanhoH - 0))
}
function larguraRandom(tamanhoW){
    return parseInt(Math.random() * (tamanhoW - 0))
}

function extras(contagem){
    if(contagem == 2){
        titulo.innerHTML = 'Você quis dizer Sim?'
    }
    if(contagem == 3){
        imgGatinhoTristonho.style.right = 0
        imgGatinhoTristonho.style.bottom = 0
    }
    if(contagem == 4){
        imgGatoDeBuetas.style.top = '9%'
    }
    if(contagem == 5){
        imgChuva.style.opacity = 1;
        somChuva.play()
    }
    if(contagem > 5){
        somTrovao.pause();
        somTrovao.currentTime = 0;
        somTrovao.play();
    }
    if(contagem == 7){
        btnNao.innerHTML = 'Sim'
    }
    console.log(contagem)
}

function clicouSim(){
    somChuva.pause();
    somScooby.play();
    imgChuva.style.opacity = 0;
    imgGatinhoTristonho.style.opacity = 0;
    imgGatoDeBuetas.style.opacity = 0;
    imgCoracoesSubindo.style.opacity = 1;
    imgDoguenho.style.display = 'block';

    return;
}