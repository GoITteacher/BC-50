import { NewsAPI } from './modules/newsAPI2.js';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListEl: document.querySelector('.js-article-list'),
};

let observer;
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  refs.articleListEl.innerHTML = '';
  NewsAPI.page = 1;
  NewsAPI.getNews(query).then(data => {
    renderArticles(data.articles);

    const elem = document.querySelector('.js-observer');
    console.log(elem);
    observer = new IntersectionObserver(myCallback);
    observer.observe(elem);
  });
  e.target.reset();
}

function renderArticles(arrArticles) {
  let markup = arrArticles
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

function myCallback() {
  NewsAPI.page += 1;
  if (NewsAPI.page === 5) {
    observer.unobserve(elem);
  }
  NewsAPI.getNews().then(data => {
    renderArticles(data.articles);
  });
}
