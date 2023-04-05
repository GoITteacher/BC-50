const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'random-user-generator1.p.rapidapi.com',
  },
};

export function getUsers() {
  return fetch(
    'https://random-user-generator1.p.rapidapi.com/locale/id_ID?limit=5',
    options,
  ).then(response => response.json());
}
