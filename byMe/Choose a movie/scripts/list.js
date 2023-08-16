const btnAdd = document.querySelector('.box_list_camp-btn-add');
const btnDelete = document.querySelector('.box_list_itemns_item-iconDelete');

const campoInsertText = document.querySelector('.box_list_camp-insertText')

btnAdd.addEventListener('click', () => insereItemNoLocalStorage())
campoInsertText.addEventListener('keydown', (tecla) => tecla.key == 'Enter'?insereItemNoLocalStorage():null)

function obtemID(){
    let ID = localStorage.getItem('ID')? parseInt(localStorage.getItem('ID')) + 1:1;
    localStorage.setItem('ID', ID)
    return ID;
}

function insereItemNoLocalStorage(){
    let lista = localStorage.getItem('Lista_de_Itens')?[localStorage.getItem('Lista_de_Itens')]:[];
    lista.push(obtemID(), campoInsertText.value)
    localStorage.setItem('Lista_de_Itens', lista)
    campoInsertText.value = ''
    console.log(localStorage.getItem('Lista_de_Itens'))
}
mostraItensNaTela()
function mostraItensNaTela(){
    let html = 
    `
    <div class="box_list_itemns_item">
        <span class="box_list_itemns_item-name"></span>
        <img class="box_list_itemns_item-iconDelete" src="../imgs/iconDelete.png">
    </div>
    `
}