const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';

export function getHero(hero) {
  const END_POINT = `${BASE_URL}?hero=${hero}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(END_POINT, options).then(response => response.json());
}
