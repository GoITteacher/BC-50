import { NewsAPI } from './modules/newsAPI2';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListEl: document.querySelector('.js-article-list'),
  loadMoreBtnEl: document.querySelector('.js-btn-load'),
};

refs.formEl.addEventListener('submit', onQueryInput);

let totalPages = 0;

function onQueryInput(evt) {
  evt.preventDefault();
  refs.articleListEl.innerHTML = '';
  NewsAPI.page = 1;
  const query = evt.target.elements.query.value;
  NewsAPI.getNews(query).then(data => {
    if (data.totalResults === 0) {
      refs.loadMoreBtnEl.disabled = true;
    } else {
      renderArticles(data.articles);
      refs.loadMoreBtnEl.disabled = false;
      totalPages = Math.ceil(data.totalResults / 100);
    }
  });
}

function renderArticles(arrArticles) {
  const markup = arrArticles
    .map(
      ({ urlToImage, title, description, author }) =>
        `<li class="card news-card">
    <img src="${urlToImage}" alt="" loading="lazy">
    <h3>${title}</h3>
    <p>${description}</p>
    <hr>
    <span>${author}</span>
</li>`,
    )
    .join('');

  refs.articleListEl.insertAdjacentHTML('beforeend', markup);
}

const loadMoreClickHandler = () => {
  NewsAPI.page += 1;
  if (NewsAPI.page === totalPages) {
    refs.loadMoreBtnEl.disabled = true;
  }
  NewsAPI.getNews().then(data => {
    console.log(data.articles);
    renderArticles(data.articles);
  });
};
refs.loadMoreBtnEl.addEventListener('click', loadMoreClickHandler);
