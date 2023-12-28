const container_game = document.querySelector('.game__cards');



const fetchPokemon = async (id) => {
    const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (conexao.status == 200) {
        const conexaoTraduzida = await conexao.json();
        return conexaoTraduzida;
    }
}

async function insertPokemons() {



    for (card = 0; card <= 10; card++) {
        let IDPokemon = parseInt(Math.random() * 255);

        let data = await fetchPokemon(IDPokemon);
        let imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        container_game.innerHTML += `
            <div class="card__ativo cards__card" id="${card}">
                <img class="card__img" src="${imagem}">
                <div class="card__face"></div>
            </div>
        `
    }

}
insertPokemons();