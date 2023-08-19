const btnCriar = document.querySelector('.list_btn-create');

btnCriar.addEventListener('click', () => {
    if(localStorage.getItem('Lista_de_Itens')){
        window.location = '../pages/result.html';
    }else{
        window.alert('Insira algo para assistir!')
    }
})