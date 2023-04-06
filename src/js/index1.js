import { NewsApi } from './modules/newsAPI';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoad: document.querySelector('.js-btn-load'),
};
const newsApi = new NewsApi();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  newsApi.page = 1;
  refs.articleListElem.innerHTML = '';
  const query = e.target.elements.query.value;
  newsApi.getNews(query).then(data => {
    renderArticles(data.articles);
    if (data.total_pages > data.page) {
      refs.btnLoad.disabled = false;
    }
  });
});

refs.btnLoad.addEventListener('click', e => {
  newsApi.page++;
  newsApi.getNews().then(data => {
    renderArticles(data.articles);
    if (data.total_pages <= data.page) {
      refs.btnLoad.disabled = true;
    }
  });
});

function renderArticles(articles) {
  refs.articleListElem.innerHTML += createMurkupArticles(articles);
}

function createMurkupArticles(articles) {
  return articles
    .map(({ author, summary, title, media }) => {
      return `
            <li class="card news-card">
                <img src="${media}" alt="" loading="lazy">
                <h3>${title}</h3>
                <p>${summary}</p>
                <hr>
                <span>${author}</span>
            </li>
        `;
    })
    .join('');
}
