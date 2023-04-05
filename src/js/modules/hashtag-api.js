const url = 'https://hashtag5.p.rapidapi.com/api/v2.1/tag/predict';
const headers = {
  'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
  'X-RapidAPI-Host': 'hashtag5.p.rapidapi.com',
};

export function getHashtags(query) {
  return fetch(`${url}?keyword=${query}`, { headers })
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.tags;
    });
}
