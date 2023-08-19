const campoInsertText = document.querySelector('.box_list_camp-insertText');
const campoError = document.querySelector('.box_list_camp-error')
const listaDeItens = document.querySelector('.box_list_itemns');

mostraItensNaTela(); // Função para mostrar os itens

const botaoAdd = document.querySelector('.box_list_camp-btn-add');

botaoAdd.addEventListener('click', () => insereItemNoLocalStorage());
campoInsertText.addEventListener('keydown', (tecla) => tecla.key == 'Enter'?insereItemNoLocalStorage():null);
listaDeItens.addEventListener('click', (item) => {
    if (item.target.classList.contains('box_list_itemns_item-iconDelete')) {
        deletaItem(item);
    }
});

function obtemID() {
    let ID = localStorage.getItem('ID') ? parseInt(localStorage.getItem('ID')) + 1 : 1;
    localStorage.setItem('ID', ID);
    return ID;
}

function insereItemNoLocalStorage() {
    let lista = localStorage.getItem('Lista_de_Itens')? JSON.parse(localStorage.getItem('Lista_de_Itens')) : [];
    if(campoInsertText.value == ''){
        return;
    }
    if(verificaDuplicatas(lista)){
        campoError.style.display = 'block';
        return;
    }
    campoError.style.display = 'none';
    lista.push([obtemID(), campoInsertText.value]);
    localStorage.setItem('Lista_de_Itens', JSON.stringify(lista));
    campoInsertText.value = '';
    mostraItensNaTela();
}

function verificaDuplicatas(lista){
    let listaSeTemDuplicata = lista.filter(item => item[1].toUpperCase() == campoInsertText.value.toUpperCase())
    if(listaSeTemDuplicata.length > 0){
        return true;
    }
}

function mostraItensNaTela() {
    let lista = localStorage.getItem('Lista_de_Itens') ? JSON.parse(localStorage.getItem('Lista_de_Itens')) : [];
    listaDeItens.innerHTML = '';
    lista.forEach(item => {
        let html = `
        <li class="box_list_itemns_item" id="${item[0]}">
            <span class="box_list_itemns_item-name">${item[1]}</span>
            <img class="box_list_itemns_item-iconDelete" src="../imgs/iconDelete.png">
        </li>
        `;
        listaDeItens.innerHTML += html;
    });
}

function deletaItem(item) {
    let itemDelete = item.target.parentNode;
    let nomeDelete = itemDelete.querySelector('.box_list_itemns_item-name').innerText;
    let idDelete = itemDelete.id;
    let lista = localStorage.getItem('Lista_de_Itens') ? JSON.parse(localStorage.getItem('Lista_de_Itens')) : [];
    
    let listaSemItemDelete = lista.filter(itemFiltro => itemFiltro[0] != idDelete || itemFiltro[1] != nomeDelete);
    localStorage.setItem('Lista_de_Itens', JSON.stringify(listaSemItemDelete));
    itemDelete.remove();
}

const btnExtras = document.querySelector('.list_btn-extras');

btnExtras.addEventListener('click', () => {
    window.location = '../pages/list_extras.html'
})