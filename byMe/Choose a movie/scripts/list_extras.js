//Primeira lista

const campoInsertText1 = document.querySelector('.box1_list_camp-insertText');
const campoError1 = document.querySelector('.box1_list_camp-error')
const listaDeItens1 = document.querySelector('.box1_list_itemns');

mostraItensNaTela1(); // Função para mostrar os itens

const botaoAdd1 = document.querySelector('.box1_list_camp-btn-add');

botaoAdd1.addEventListener('click', () => insereItemNoLocalStorage1());
campoInsertText1.addEventListener('keydown', (tecla) => tecla.key == 'Enter'?insereItemNoLocalStorage1():null);
listaDeItens1.addEventListener('click', (item) => {
    if (item.target.classList.contains('box1_list_itemns_item-iconDelete')) {
        deletaItem1(item);
    }
});

function obtemID1() {
    let ID = localStorage.getItem('ID-1') ? parseInt(localStorage.getItem('ID-1')) + 1 : 1;
    localStorage.setItem('ID-1', ID);
    return ID;
}

function insereItemNoLocalStorage1() {
    let lista = localStorage.getItem('Lista_de_Itens-1')? JSON.parse(localStorage.getItem('Lista_de_Itens-1')) : [];
    if(campoInsertText1.value == ''){
        return;
    }
    if(verificaDuplicatas1(lista)){
        campoError1.style.display = 'block';
        return;
    }
    campoError1.style.display = 'none';
    lista.push([obtemID1(), campoInsertText1.value]);
    localStorage.setItem('Lista_de_Itens-1', JSON.stringify(lista));
    campoInsertText1.value = '';
    mostraItensNaTela1();
}

function verificaDuplicatas1(lista){
    let listaSeTemDuplicata = lista.filter(item => item[1].toUpperCase() == campoInsertText1.value.toUpperCase())
    if(listaSeTemDuplicata.length > 0){
        return true;
    }
}

function mostraItensNaTela1() {
    let lista = localStorage.getItem('Lista_de_Itens-1') ? JSON.parse(localStorage.getItem('Lista_de_Itens-1')) : [];
    listaDeItens1.innerHTML = '';
    lista.forEach(item => {
        let html = `
        <li class="box1_list_itemns_item" id="${item[0]}">
            <span class="box1_list_itemns_item-name">${item[1]}</span>
            <img class="box1_list_itemns_item-iconDelete" src="../imgs/iconDelete.png">
        </li>
        `;
        listaDeItens1.innerHTML += html;
    });
}

function deletaItem1(item) {
    let itemDelete = item.target.parentNode;
    let nomeDelete = itemDelete.querySelector('.box1_list_itemns_item-name').innerText;
    let idDelete = itemDelete.id;
    let lista = localStorage.getItem('Lista_de_Itens-1') ? JSON.parse(localStorage.getItem('Lista_de_Itens-1')) : [];
    
    let listaSemItemDelete = lista.filter(itemFiltro => itemFiltro[0] != idDelete || itemFiltro[1] != nomeDelete);
    localStorage.setItem('Lista_de_Itens-1', JSON.stringify(listaSemItemDelete));
    itemDelete.remove();
}

//Segunda Lista


const campoInsertText2 = document.querySelector('.box2_list_camp-insertText');
const campoError2 = document.querySelector('.box2_list_camp-error')
const listaDeItens2 = document.querySelector('.box2_list_itemns');

mostraItensNaTela2(); // Função para mostrar os itens

const botaoAdd2 = document.querySelector('.box2_list_camp-btn-add');

botaoAdd2.addEventListener('click', () => insereItemNoLocalStorage());
campoInsertText2.addEventListener('keydown', (tecla) => tecla.key == 'Enter'?insereItemNoLocalStorage():null);
listaDeItens2.addEventListener('click', (item) => {
    if (item.target.classList.contains('box2_list_itemns_item-iconDelete')) {
        deletaItem2(item);
    }
});

function obtemID2() {
    let ID = localStorage.getItem('ID-2') ? parseInt(localStorage.getItem('ID-2')) + 1 : 1;
    localStorage.setItem('ID-2', ID);
    return ID;
}

function insereItemNoLocalStorage() {
    let lista = localStorage.getItem('Lista_de_Itens-2')? JSON.parse(localStorage.getItem('Lista_de_Itens-2')) : [];
    if(campoInsertText2.value == ''){
        return;
    }
    if(verificaDuplicatas2(lista)){
        campoError2.style.display = 'block';
        return;
    }
    campoError2.style.display = 'none';
    lista.push([obtemID2(), campoInsertText2.value]);
    localStorage.setItem('Lista_de_Itens-2', JSON.stringify(lista));
    campoInsertText2.value = '';
    mostraItensNaTela2();
}

function verificaDuplicatas2(lista){
    let listaSeTemDuplicata = lista.filter(item => item[1].toUpperCase() == campoInsertText2.value.toUpperCase())
    if(listaSeTemDuplicata.length > 0){
        return true;
    }
}

function mostraItensNaTela2() {
    let lista = localStorage.getItem('Lista_de_Itens-2') ? JSON.parse(localStorage.getItem('Lista_de_Itens-2')) : [];
    listaDeItens2.innerHTML = '';
    lista.forEach(item => {
        let html = `
        <li class="box2_list_itemns_item" id="${item[0]}">
            <span class="box2_list_itemns_item-name">${item[1]}</span>
            <img class="box2_list_itemns_item-iconDelete" src="../imgs/iconDelete.png">
        </li>
        `;
        listaDeItens2.innerHTML += html;
    });
}

function deletaItem2(item) {
    let itemDelete = item.target.parentNode;
    let nomeDelete = itemDelete.querySelector('.box2_list_itemns_item-name').innerText;
    let idDelete = itemDelete.id;
    let lista = localStorage.getItem('Lista_de_Itens-2') ? JSON.parse(localStorage.getItem('Lista_de_Itens-2')) : [];
    
    let listaSemItemDelete = lista.filter(itemFiltro => itemFiltro[0] != idDelete || itemFiltro[1] != nomeDelete);
    localStorage.setItem('Lista_de_Itens-2', JSON.stringify(listaSemItemDelete));
    itemDelete.remove();
}