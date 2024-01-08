const container_game = document.querySelector('.game__cards');

const fetchPokemon = async (id) => {
    const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (conexao.status == 200) {
        const conexaoTraduzida = await conexao.json();
        return conexaoTraduzida;
    }
}
const amountOfPairsTheCards = 5;

function pokemonCodesOfCards(){
    let firstSet = [];

    // while(firstSet.length <= (amountOfPairsTheCards*2)){
    //     let random = parseInt(Math.random() * 255);
    //     firstSet.push(random);
    //     firstSet.push(random);
    // }

    console.log(firstSet);
}





async function insertPokemons() {
    for (card = 0; card <= 9; card++) {
        let IDPokemon = parseInt(Math.random() * 255);


        let data = await fetchPokemon(IDPokemon);
        let imagem = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        container_game.innerHTML += `
            <div class="cards__card" id="${card}" data-poke="${IDPokemon}">
                <img class="card__img" src="${imagem}">
                <div class="card__face"></div>
            </div>
        `
    }
    pokemonCodesOfCards();
    cardsActions();
}






function cardsActions(){
    const cards = document.querySelectorAll('.cards__card');
    
    cards.forEach(cardSelected => {
        cardSelected.addEventListener('click', card => {

            if(card.target.classList.contains('cards__card')){
                card.target.classList.toggle('card__active');
            }else{
                card.target.parentElement.classList.toggle('card__active');
            }
        })
    })
}


insertPokemons();