import userCardTemplate from '../templates/user-card.hbs';
import { getUsers } from './modules/randomUsersAPI';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  cardContainer1: document.querySelector('.js-card-container'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  getUsers().then(data => {
    renderUsers(data);
  });
});

function renderUsers(users) {
  const markup = userCardTemplate(users);
  console.log(markup);
  refs.cardContainer1.innerHTML = markup;
}
