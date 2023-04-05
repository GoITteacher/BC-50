import '../css/common.css';
import { translate } from './modules/translate-api';
import { getHero } from './modules/hero-api';
import { getPokemon } from './modules/pokemon-api';
import { getHashtags } from './modules/hashtag-api';
import heroTemplate from '../templates/hero-card.hbs';
import pokemonMarkup from '../templates/pokemon-card.hbs';

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-card-container'),
  form1: document.querySelector('.js-search-form1'),
  container1: document.querySelector('.js-card-container1'),
  form2: document.querySelector('.js-search-form2'),
  container2: document.querySelector('.js-card-container2'),
  form3: document.querySelector('.js-search-form3'),
  container3: document.querySelector('.js-card-container3'),
};

refs.form.addEventListener('submit', onFormTranslate);
refs.form1.addEventListener('submit', onFormSearch);
refs.form2.addEventListener('submit', onPokemonSearch);
refs.form3.addEventListener('submit', onHashTagSearch);

function onFormTranslate(e) {
  e.preventDefault();
  const inputValue = e.target.elements.query.value;
  translate(inputValue).then(data => renderText(data));
}

function onFormSearch(e) {
  e.preventDefault();
  const hero = e.target.elements.query.value;
  getHero(hero)
    .then(heroObj => {
      renderHero(heroObj);
    })
    .catch(err => {
      console.log(err);
      refs.container1.innerHTML = 'ERROR';
    });
}

function onPokemonSearch(e) {
  e.preventDefault();
  const pokemon = e.target.elements.query.value;
  getPokemon(pokemon).then(pokemonObj => {
    if (typeof pokemonObj === 'object') {
      renderPokemon(pokemonObj);
    } else {
      refs.container2.textContent = 'Pokemon not found';
    }
  });
}

function onHashTagSearch(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  getHashtags(query).then(arrayHashTags => {
    renderHashTags(arrayHashTags);
  });
}

// ==================================

function renderText(text) {
  refs.container.textContent = text;
}

function renderHero(hero) {
  refs.container1.innerHTML = heroTemplate(hero);
}

function renderPokemon(pokemon) {
  refs.container2.innerHTML = pokemonMarkup(pokemon);
}

function renderHashTags(array) {
  const markup = array
    .map(el => {
      return `<li>${el}</li>`;
    })
    .join('');

  refs.container3.innerHTML = markup;
}
