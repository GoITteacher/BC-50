export function getPokemon(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Status:' + res.status);
      }
    })
    .catch(err => {
      console.log(err);
      return `${err}`;
    });
}
