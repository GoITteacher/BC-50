export class NewsAPI {
  static #BASE_URL = `https://newsapi.org`;
  static #END_POINT = `/v2/everything`;
  static #API_KEY = `c8747511a2c34730a83caaff4f3693e7`;

  static page = 1;
  static query = null;
  static #pageSize = 10;

  static getNews(query) {
    if (query !== undefined) {
      NewsAPI.query = query;
    }

    const params = new URLSearchParams({
      apiKey: NewsAPI.#API_KEY,
      page: NewsAPI.page,
      q: NewsAPI.query,
      pageSize: NewsAPI.#pageSize,
    });

    const URL = `${NewsAPI.#BASE_URL}${NewsAPI.#END_POINT}?${params}`;
    return fetch(URL).then(res => {
      return res.json();
    });
  }
}
