async function obtemAPI(nome){
    nome = nome.target? nome.target.value:nome;
    let conexao = await fetch(`https://www.omdbapi.com/?apikey=fd1563c1&s=${nome}`)
    let conexaoTraduzida = await conexao.json()
    return conexaoTraduzida;
}