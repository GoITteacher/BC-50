const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const END_POINT = '/search';

const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  },
};

export class NewsApi {
  query = '';
  page = 1;
  constructor() {}

  getNews(query) {
    if (query) this.query = query;

    return fetch(
      `${BASE_URL}${END_POINT}?q=${this.query}&page=${this.page}`,
      options,
    ).then(response => response.json());
  }
}
