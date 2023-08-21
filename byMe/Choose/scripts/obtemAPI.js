async function obtemAPI(nome){
    let conexao = await fetch(`https://www.omdbapi.com/?apikey=fd1563c1&s=${nome.target.value}`)
    let conexaoTraduzida = await conexao.json()
    return conexaoTraduzida;
}