import { Pokemon } from './modules/pokemonAPI';
const refs = {
  prevBtnEl: document.querySelector('.js-btn-prev'),
  nextBtnEl: document.querySelector('.js-btn-next'),
  pokemonsListEl: document.querySelector('.js-pokemon-list'),
};

Pokemon.getPokemonByPage(1).then(renderPokemons);

function renderPokemons(data) {
  const markup = data
    .map(
      pokemon => `
<div class='card'>
<div class='card-img-top'>
  <img src='${pokemon.sprites.front_default}' alt='' style='width:200px;height:200px' />
</div>
<div class='card-body'>
  <h2 class='card-title'>Имя: ${pokemon.name}</h2>
  <p class='card-text'>Вес: ${pokemon.weight}</p>
  <p class='card-text'>Рост: ${pokemon.height}</p>
</div>
</div>
`,
    )
    .join('');
  refs.pokemonsListEl.innerHTML = markup;
}

refs.nextBtnEl.addEventListener('click', () => {
  Pokemon.getPokemonByNextPage().then(pokemons => {
    refs.prevBtnEl.disabled = !Boolean(Pokemon.prevUrl);
    refs.nextBtnEl.disabled = !Boolean(Pokemon.nextUrl);

    renderPokemons(pokemons);
  });
});

refs.prevBtnEl.addEventListener('click', () => {
  Pokemon.getPokemonByPreviousPage().then(pokemons => {
    refs.prevBtnEl.disabled = !Boolean(Pokemon.prevUrl);
    refs.nextBtnEl.disabled = !Boolean(Pokemon.nextUrl);

    renderPokemons(pokemons);
  });
});
