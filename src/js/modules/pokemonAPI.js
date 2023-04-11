export class Pokemon {
  static BASE_URL = 'https://pokeapi.co/api';
  static END_POINT = '/v2/pokemon';
  static #limit = 10;

  static nextUrl = null;
  static prevUrl = null;

  static getPokemonByPage(page) {
    const params = new URLSearchParams({
      offset: (page - 1) * Pokemon.#limit,
      limit: Pokemon.#limit,
    });
    const URL = `${Pokemon.BASE_URL}${Pokemon.END_POINT}?${params}`;
    return fetch(URL).then(Pokemon.#transformPromise);
  }

  static getPokemonByNextPage() {
    return fetch(Pokemon.nextUrl).then(Pokemon.#transformPromise);
  }

  static getPokemonByPreviousPage() {
    return fetch(Pokemon.prevUrl).then(Pokemon.#transformPromise);
  }

  static #transformPromise(response) {
    return response
      .json()
      .then(data => {
        Pokemon.nextUrl = data.next;
        Pokemon.prevUrl = data.previous;
        return data.results;
      })
      .then(Pokemon.#getPokemons)
      .then(promises => {
        console.log(promises);
        return Promise.all(promises);
      });
  }

  static async #transformPromise2(response) {
    const data = await response.json();
    Pokemon.nextUrl = data.next;
    Pokemon.prevUrl = data.previous;
    const promises = await Pokemon.#getPokemons(data.results);
    const result = await Promise.all(promises);
    return result;
  }

  static #getPokemons(pokemons) {
    return pokemons.map(pokemon => {
      return fetch(pokemon.url).then(res => res.json());
    });
  }
}
