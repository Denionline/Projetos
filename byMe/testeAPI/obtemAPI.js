const listaDeSugestoes = document.querySelector('#lista');

document.querySelector('#browser').addEventListener('input', event => {
    fetch(`https://www.omdbapi.com/?apikey=fd1563c1&s=${event.target.value}`)
        .then(result => result.json())
        .then(json => obtemItens(json))
})

async function obtemItens(API){
    if(API.Response == 'False'){
        return
    }
    listaDeSugestoes.innerHTML = '';
    let lista = await API.Search;
    lista.forEach(item => {
        let opcao = `<option value="${item['Title']}">`
        listaDeSugestoes.innerHTML += opcao;
    });
}