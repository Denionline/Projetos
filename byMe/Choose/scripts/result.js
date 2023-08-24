const imgLoading = document.querySelector('.img_loading');
const caixa = document.querySelector('.box');
const caixaResultado = document.querySelector('.box_result');
const tituloResultado = document.querySelector('.box_result_tittle');

const campoItem1 = document.querySelector('.box_result_item1');
const campoItem2 = document.querySelector('.box_result_item2');
const campoItem3 = document.querySelector('.box_result_item3');

let listaItem1 = JSON.parse(localStorage.getItem('Lista_de_Itens'));
let listaItem2 = localStorage.getItem('Lista_de_Itens-1')?JSON.parse(localStorage.getItem('Lista_de_Itens-1')):null;
let listaItem3 = localStorage.getItem('Lista_de_Itens-2')?JSON.parse(localStorage.getItem('Lista_de_Itens-2')):null;

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

        if(window.screen.width <= 600){
            caixa.style.width = '100%';
            caixa.style.height = '100%';
        }else if(window.screen.width <= 800){
            caixa.style.width = '60%';
            caixa.style.height = '95%';
        }else if(window.screen.width <= 1200){
            caixa.style.width = '40%';
            caixa.style.height = '90%';
        }else{
            caixa.style.width = '35%';
            caixa.style.height = '90%';
        }

        caixaResultado.style.width = '100%';
        caixaResultado.style.height = '100%';

        campoItem1.style.opacity = '1';
        campoItem2.style.opacity = '1';
        campoItem3.style.opacity = '1';

        // tituloResultado.style.opacity = '1';
    }, tempoEmSegundosDeCarregamento * 1000)
}
function geraItemAleatorio(){
    let resultadoItem1 = parseInt(Math.random() * (listaItem1.length));

    let resultadoItem2;
    if(listaItem2 == null){
        resultadoItem2 = null;
    }else if(listaItem2[0] == null){
        resultadoItem2 = null;
    }else{
        resultadoItem2 = parseInt(Math.random() * (listaItem2.length));
    }

    let resultadoItem3;
    if(listaItem3 == null){
        resultadoItem3 = null;
    }else if(listaItem3[0] == null){
        resultadoItem3 = null;
    }else{
        resultadoItem3 = parseInt(Math.random() * (listaItem3.length));
    }

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

    obtemFilme(listaItem1[resultadoItem1][1])
    // filme = getIdMovie(listaItem1[resultadoItem1][1]);
}
async function obtemFilme(nome){
    let filme = await obtemAPI(nome);
    if(filme.Response == 'False'){
        return
    }
    let urlDaCapa = filme.Search[0].Poster;
    caixaResultado.style.background = `center / cover no-repeat url(${urlDaCapa})`
}

campoItem1.addEventListener('click', () => {
    const nomeDoFilme = campoItem1.children[1].innerHTML;
    dadosFilme(nomeDoFilme)
})

async function dadosFilme(nomeDoFilme){
    campoItem1.style.position = 'absolute';
    campoItem1.style.height = '80%';
    campoItem1.innerHTML = '';
    let filme = await getIdMovie(nomeDoFilme);
    campoItem1.innerHTML += `<img src="${filme.results.banner}" class="img_mostra-filme">`
    console.log(filme.results.banner)
}