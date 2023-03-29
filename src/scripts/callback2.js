export const refs = {
  formEl: document.querySelector('.js-form'),
  boxEl: document.querySelector('.js-box'),
  infoEl: document.querySelector('.js-info'),
};

export function onInputChange(evt) {
  evt.target.nextElementSibling.textContent = evt.target.value;
}

export function onMouseMove(evt) {
  evt.clientX;
  refs.infoEl.textContent = `${evt.clientX} - ${evt.clientY}`;
}

export function onFormSubmit(evt) {
  const inputOne = refs.formEl.elements.text1.value;
  const inputTwo = refs.formEl.elements.text2.value;
  console.log(inputOne, inputTwo);
}
