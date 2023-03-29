import { Bank } from './Bank.js';
import { loadFromLS, saveToLS } from './helpers';

const refs = {
  formElem1: document.querySelector('.js-form1'),
  formElem2: document.querySelector('.js-form2'),
  formElem3: document.querySelector('.js-form3'),
  formContainer: document.querySelector('.js-form-container'),
};

function onLoad() {
  refs.formElem3.elements.name.value = loadFromLS('name') || '';
  refs.formElem3.elements.bio.value = loadFromLS('bio') || '';
  refs.formElem3.elements.password.value = loadFromLS('password') || '';
}

onLoad();

refs.formElem3.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.clear();
  const formData = new FormData(e.target);

  const objData = {};

  for (let [key, value] of formData) {
    objData[key] = value;
  }

  console.log(objData);
  e.target.reset();
});

refs.formElem3.addEventListener('input', e => {
  saveToLS(e.target.name, e.target.value);
});

refs.formContainer.addEventListener('input', () => {
  const formData = new FormData(e.target);
  const objData = {};
  for (let [key, value] of formData) {
    objData[key] = value;
  }

  const form = e.target.closest('form');

  console.log(form);
  saveToLS('');
});
