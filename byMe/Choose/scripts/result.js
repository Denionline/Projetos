const imgLoading = document.querySelector('.img_loading');
const caixa = document.querySelector('.box');
const caixaResultado = document.querySelector('.box_result');
const tituloResultado = document.querySelector('.box_result_tittle');

const campoItem1 = document.querySelector('.box_result_item1');
const campoItem2 = document.querySelector('.box_result_item2');
const campoItem3 = document.querySelector('.box_result_item3');

let listaItem1 = JSON.parse(localStorage.getItem('Lista_de_Itens'));
let listaItem2 = JSON.parse(localStorage.getItem('Lista_de_Itens-1'));
let listaItem3 = JSON.parse(localStorage.getItem('Lista_de_Itens-2'));

const tempoEmSegundosDeCarregamento = 1;

const btnBackList = document.querySelector('.box_button-back-list');
btnBackList.addEventListener('click', () => {
    window.location = '../pages/list_main.html';
})
const btnGenerateAgain = document.querySelector('.box_button-generate-again');
btnGenerateAgain.addEventListener('click', () => window.location.reload())

abrePagina();
geraItemAleatorio();

function abrePagina(){
    setTimeout(() => {
        imgLoading.style.width = 0;
        imgLoading.style.height = 0;

        caixa.style.width = '70%';
        caixa.style.height = '80%';

        caixaResultado.style.width = '90%';
        caixaResultado.style.height = '90%';

        campoItem1.style.opacity = '1';
        campoItem2.style.opacity = '1';
        campoItem3.style.opacity = '1';

        tituloResultado.style.opacity = '1';
    }, tempoEmSegundosDeCarregamento * 1000)
}
function geraItemAleatorio(){
    let resultadoItem1 = parseInt(Math.random() * (listaItem1.length));
    let resultadoItem2 = listaItem2[0] == null?null:parseInt(Math.random() * (listaItem2.length));
    let resultadoItem3 = listaItem3[0] == null?null:parseInt(Math.random() * (listaItem3.length));

    let spanDoResultado1 = document.createElement('span');
    let spanDoResultado2 = document.createElement('span');
    let spanDoResultado3 = document.createElement('span');    

    spanDoResultado1.innerHTML = resultadoItem1 == null?'':listaItem1[resultadoItem1][1];
    spanDoResultado2.innerHTML = resultadoItem2 == null?'':listaItem2[resultadoItem2][1];
    spanDoResultado3.innerHTML = resultadoItem3 == null?'':listaItem3[resultadoItem3][1];

    spanDoResultado1.classList.add('box_result_item1-span');
    spanDoResultado2.classList.add('box_result_item2-span');
    spanDoResultado3.classList.add('box_result_item3-span');

    campoItem1.appendChild(spanDoResultado1)
    campoItem2.appendChild(spanDoResultado2)
    campoItem3.appendChild(spanDoResultado3)
    console.log(listaItem1[resultadoItem1][1])
}

async function teste(nome){
    let con = await obtemAPI(nome);
    console.log(con);
}