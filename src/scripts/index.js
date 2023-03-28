//
const refs = {
  formEl: document.querySelector('.js-form'),
  boxEl: document.querySelector('.js-box'),
  infoEl: document.querySelector('.js-info'),
};

// =====================
const options = {
  leading: false,
  trailing: true,
};
refs.formEl.addEventListener('input', _.debounce(onInputChange, 300, options));

function onInputChange(evt) {
  evt.target.nextElementSibling.textContent = evt.target.value;
}
// =====================
refs.boxEl.addEventListener('mousemove', _.debounce(onMouseMove, 300));

function onMouseMove(evt) {
  evt.clientX;
  refs.infoEl.textContent = `${evt.clientX} - ${evt.clientY}`;
}
// =====================

refs.formEl.addEventListener('submit', _.throttle(onFormSubmit, 1000));

refs.formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('preventDefault');
  copyCallback(evt);
});

const copyCallback = _.throttle(onFormSubmit, 1000);

function onFormSubmit(evt) {
  console.log('SUBMIT');
  //   const inputOne = refs.formEl.elements.text1.value;
  //   const inputTwo = refs.formEl.elements.text2.value;
  //   console.log(inputOne, inputTwo);
}
