const imgLoading = document.querySelector('.img_loading');
const caixaResultado = document.querySelector('.box');

const campoItem1 = document.querySelector('.box_result_item1');
const campoItem2 = document.querySelector('.box_result_item2');
const campoItem3 = document.querySelector('.box_result_item3');

let listaItem1 = JSON.parse(localStorage.getItem('Lista_de_Itens'));
let listaItem2 = JSON.parse(localStorage.getItem('Lista_de_Itens-1'));
let listaItem3 = JSON.parse(localStorage.getItem('Lista_de_Itens-2'));

const tempoEmSegundosDeCarregamento = 3;

const btnBackList = document.querySelector('.box_button-back-list');
btnBackList.addEventListener('click', () => {
    window.location = '../pages/list_main.html';
})
const btnGenerateAgain = document.querySelector('.box_button-generate-again');
btnGenerateAgain.addEventListener('click', () => window.location.reload())

// abrePagina();
geraItemAleatorio();

function abrePagina(){
    setTimeout(() => {
        imgLoading.style.width = 0;
        imgLoading.style.height = 0;
        caixaResultado.style.width = '30%';
        caixaResultado.style.height = '40%';
    }, tempoEmSegundosDeCarregamento * 1000)
}
function geraItemAleatorio(){
    let resultadoItem1 = parseInt(Math.random() * (listaItem1.length));
    let resultadoItem2 = listaItem2[0] == null?null:parseInt(Math.random() * (listaItem2.length));
    let resultadoItem3 = listaItem3[0] == null?null:parseInt(Math.random() * (listaItem3.length));

    campoItem1.innerHTML = resultadoItem1 == null?'':listaItem1[resultadoItem1][1];
    campoItem2.innerHTML = resultadoItem2 == null?'':listaItem2[resultadoItem2][1];
    campoItem3.innerHTML = resultadoItem3 == null?'':listaItem3[resultadoItem3][1];
}