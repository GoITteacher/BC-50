import { onFormSubmit } from './tasks/task1';
import { onFormSubmit2 } from './tasks/task2';
import { onFormSubmit3 } from './tasks/task3';
import { onFormSubmit4 } from './tasks/task4';
import { onFormSubmit5 } from './tasks/task5';

const refs = {
  formEl1: document.querySelector('.js-form-1'),
  formEl2: document.querySelector('.js-form-2'),
  formEl3: document.querySelector('.js-form-3'),
  formEl4: document.querySelector('.js-form-4'),
  formEl5: document.querySelector('.js-form-5'),
};

refs.formEl1.addEventListener('submit', onFormSubmit);
refs.formEl2.addEventListener('submit', onFormSubmit2);
refs.formEl3.addEventListener('submit', onFormSubmit3);
refs.formEl4.addEventListener('submit', onFormSubmit4);
refs.formEl5.addEventListener('submit', onFormSubmit5);
