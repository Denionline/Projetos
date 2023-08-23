async function obtemAPI(nome){
    let conexao = await fetch(`https://www.omdbapi.com/?apikey=fd1563c1&s=${nome}`)
    let conexaoTraduzida = await conexao.json()
    return conexaoTraduzida;
}

async function getIdMovie(nome){
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${nome}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '612a23d3c4mshbb508e8aff4cfc3p1139c3jsn0e4fb9b0c203',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let resultTranslate = JSON.parse(result)
        getMovieByID(resultTranslate.results[0].imdb_id);
    } catch (error) {
        console.error(error);
    }
}

async function getMovieByID(ID){
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${ID}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '612a23d3c4mshbb508e8aff4cfc3p1139c3jsn0e4fb9b0c203',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(JSON.parse(result));
    } catch (error) {
        console.error(error);
    }
}
