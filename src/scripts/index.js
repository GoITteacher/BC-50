import _ from 'lodash';
import { refs, onFormSubmit, onInputChange, onMouseMove } from './callback2.js';

// =====================
const options = {
  leading: false,
  trailing: true,
};

refs.formEl.addEventListener('input', _.debounce(onInputChange, 300, options));
refs.boxEl.addEventListener('mousemove', _.debounce(onMouseMove, 300));
refs.formEl.addEventListener('submit', _.throttle(onFormSubmit, 1000));
refs.formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('preventDefault');
  copyCallback(evt);
});

const copyCallback = _.throttle(onFormSubmit, 1000);
