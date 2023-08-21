const listaDeSugestoes = document.querySelector('#sugestoes');

document.querySelector('.box_list_camp-insertText').addEventListener('input',nomeNoInput => obtemItens(nomeNoInput))

async function obtemItens(nomeNoInput){
    let API = await obtemAPI(nomeNoInput);
    let lista = API.Search;
    console.log(lista)
    if(API.Response == 'False'){
        return
    }
    listaDeSugestoes.innerHTML = '';
    lista.forEach(item => {
        let opcao = `<option value="${item['Title']}">`
        listaDeSugestoes.innerHTML += opcao;
    });
}