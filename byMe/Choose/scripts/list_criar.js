const campoBtns = document.querySelector('.list_btn')
const btnCriar = document.querySelector('.list_btn-create');
const tempoDoAlertaNaTelaEmSegundos = 2;

btnCriar.addEventListener('click', () => {
    let lista = JSON.parse(localStorage.getItem('Lista_de_Itens'))
    if(lista[0] == null){
        let alert = document.createElement('div')
        alert.innerHTML = 'Para continuar insira algo para assistir!'
        alert.style.color = 'red';
        alert.style.transform = 'scale(1.5)'
        alert.id = 'alerta'
        if(!document.querySelector('#alerta')){
            campoBtns.appendChild(alert)
            setTimeout(() => {
                campoBtns.removeChild(alert)
            },tempoDoAlertaNaTelaEmSegundos * 1000)
        }
    }else{
        window.location = '../pages/result.html';
    }
})