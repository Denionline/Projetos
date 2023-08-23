const listaDeSugestoes = document.querySelector('#sugestoes');

document.querySelector('.box_list_camp-insertText').addEventListener('input',nomeNoInput => obtemItens(nomeNoInput.target.value))

async function obtemItens(nomeNoInput){
    let API = await obtemAPI(nomeNoInput);
    let lista = API.Search;
    if(API.Response == 'False'){
        return
    }
    listaDeSugestoes.innerHTML = '';
    lista.forEach(item => {
        let opcao = `<option value="${item['Title']}">`
        listaDeSugestoes.innerHTML += opcao;
    });
}