export function translate(text) {
  const URL =
    'https://translated-mymemory---translation-memory.p.rapidapi.com/get';

  const params = new URLSearchParams({
    langpair: 'en|uk',
    q: text,
  });

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host':
        'translated-mymemory---translation-memory.p.rapidapi.com',
    },
  };

  return fetch(`${URL}?${params}`, options)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      return data.responseData.translatedText;
    });

  // Promise('text')
}
