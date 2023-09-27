const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(conexao.status == 200){
        const conexaoTraduzida = await conexao.json();
        return conexaoTraduzida;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
    const data = await fetchPokemon(pokemon);
    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id + ' - ';
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = '';
        searchPokemon = data.id;
    }else{
        pokemonName.innerHTML = 'Not found :c';
        pokemonImage.style.display = 'none';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

btnPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
        searchPokemon--;
        renderPokemon(searchPokemon);
    }
})
btnNext.addEventListener('click', () => {
    searchPokemon++;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);