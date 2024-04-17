const Levels = [4, 6, 8, 10, 12];

function PageStart() {
    const Button = document.querySelector('.Main .Container .Button');

    if (!localStorage.getItem('CurrentLevel')) {
        localStorage.setItem('CurrentLevel', JSON.stringify(0));
    }

    const CurrentLevel = parseInt(JSON.parse(localStorage.getItem('CurrentLevel')));

    Button.innerText = (`Start Level ${CurrentLevel + 1}`);

    Button.addEventListener('click', Evento => {
        Evento.preventDefault();
        InsertCards(Levels[CurrentLevel]);
        GameStartAnimations(CurrentLevel);
    })
}
PageStart(0);

function GameStartAnimations(AmountPairs) {
    const Container = document.querySelector('.Main .Container');
    Container.classList.add('HeightZero');
    const Cards = document.querySelector('.Main .Cards');
    Levels.forEach(Level => {
        if (Cards.classList.contains(`Pairs_${Level}`)) {
            Cards.classList.remove(`Pairs_${Level}`);
        }
    })
    Cards.classList.add(`Pairs_${Levels[AmountPairs]}`);

    if (document.querySelectorAll('.Id-undefined')) {
        document.querySelectorAll('.Id-undefined').forEach(Field => {
            Field.remove();
        })
    }
}

function All() {
    const Cards = document.querySelectorAll('.Main .Cards .Card');
    Cards.forEach(Card => {
        Card.classList.add('Correct');
    })
}

function GameFinishAnimations(CurrentLevel) {
    const Container = document.querySelector('.Main .Container');
    Container.classList.remove('HeightZero');

    const Cards = document.querySelectorAll('.Main .Cards .Card');
    Cards.forEach(Card => {
        Card.remove();
    })
}

async function InsertCards(AmountPairs) {
    if (!localStorage.getItem('Pairs')) {
        localStorage.setItem('Pairs', JSON.stringify([]));
    }

    const Cards = document.querySelector('.Cards');
    const Randoms = GetRandoms(AmountPairs);
    let Pokemons = await GetPokemons(Randoms);

    Pokemons.forEach(Pokemon => {
        Pokemons.push(Pokemon);
    })

    Pokemons = ShuffleArray(Pokemons);

    Pokemons.forEach(Pokemon => {
        Cards.innerHTML += `
            <div class="Card Id-${Pokemon['IdPokemon']}" id="${Pokemon['IdPokemon']}">
                <img class="Sprite" src="${Pokemon['Pokemon']['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}">
                <div class="Face">
                    <img class="Pokeball" src="./Pokeball.png">
                </div>
            </div>
        `
    })
    CardsListAction();
}





const fetchPokemon = async (IdPokemon) => {
    const conexao = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}`);
    if (conexao.status == 200) {
        const conexaoTraduzida = await conexao.json();
        return conexaoTraduzida;
    }
}
function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const GetRandoms = (Amount) => {
    const Randoms = [];
    while (Randoms.length < Amount) {
        let RandomNumber = parseInt(Math.random() * 255);
        if (!Randoms.includes(RandomNumber)) {
            Randoms.push(RandomNumber);
        }
    }
    return Randoms;
}
const GetPokemons = async (RandomNumbers) => {
    const Pokemons = [];

    for (number = 0; number < RandomNumbers.length; number++) {
        let PokemonAPI = await fetchPokemon(RandomNumbers[number]);
        Pokemons.push({
            'IdPokemon': RandomNumbers[number],
            'Pokemon': PokemonAPI
        })
    }
    return Pokemons;
}



function CardsListAction() {
    const CardsList = document.querySelectorAll('.Card');
    CardsList.forEach(Card => {
        Card.addEventListener('click', Item => {
            if (Item.target.classList.contains('Card')) {
                CardAction(Item.target);
            } else if (Item.target.classList.contains('Face')) {
                CardAction(Item.target.parentElement);
            } else if (Item.target.classList.contains('Pokeball')) {
                CardAction(Item.target.parentElement.parentElement);
            } else if (Item.target.classList.contains('Sprite')) {
                CardAction(Item.target.parentElement);
            }
        })
    })
}


function CardAction(Card) {
    let Pairs = JSON.parse(localStorage.getItem('Pairs'));
    let IdPokemon = parseInt(Card.id);

    if (!Card.classList.contains('Correct')) {
        if (!Card.classList.contains('Active')) {
            if (Pairs.length > 1) {
                document.querySelectorAll('.Card').forEach(Card => {
                    Card.classList.remove('Active');
                })
                localStorage.setItem('Pairs', JSON.stringify([]));
            } else {
                if (Pairs.includes(IdPokemon)) {
                    document.querySelectorAll(`.Id-${IdPokemon}`).forEach(CardCorrect => CardCorrect.classList.add('Correct'));
                    localStorage.setItem('Pairs', JSON.stringify([]));
                } else {
                    Card.classList.add('Active');
                    Pairs.push(IdPokemon);
                    localStorage.setItem('Pairs', JSON.stringify(Pairs));
                }
            }
        } else {
            Card.classList.add('Active');
        }
    }

    if (document.querySelectorAll('.Card').length == document.querySelectorAll('.Correct').length) {
        const CurrentLevel = parseInt(JSON.parse(localStorage.getItem('CurrentLevel'))) + 1;
        if (Levels.length > CurrentLevel) {
            localStorage.setItem('CurrentLevel', JSON.stringify(CurrentLevel));
            GameFinishAnimations(CurrentLevel);
            PageStart(1);
        } else {
            localStorage.clear();
            document.querySelector('.Main').innerHTML += `
                <div class="Congratulations">
                    <h1 class="Seymour">Meus parábens por concluir o jogo!</h1>
                    <h2 class="Montserrat ">Caso queira jogar novamente, recarregue a página.</h2>
                </div>
            `
            document.querySelector('.Congratulations').classList.add('Active');
            document.querySelector('.Cards').remove();
        }
    }
}
