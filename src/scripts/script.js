const refs = {
  formEl: document.querySelector('.js-register-form'),
  modalEl: document.querySelector('.modalka'),
  backdropEl: document.querySelector('.backdrop'),
  colorEl: document.querySelector('#js-input-color'),
  sizeEl: document.querySelector('#js-input-size'),
  bioEl: document.querySelector('.js-bio'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  renderModal(data);
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onModalClose);
}

function renderModal(data) {
  const modalMarkup = `
    <h2>${data.username}</h2>
        <hr>
        - <span>${data.email}</span><br>
        - <span>phone</span><br>
        - <a href="awda">website</a>
        <hr>
        Adress: awdawdawd
        <hr>
        Company: awdawdawdawd
        <hr>
    `;
  refs.modalEl.innerHTML = modalMarkup;
}

function onModalClose(e) {
  console.log(e);
  if (e.code === 'Escape') {
    document.body.classList.remove('show-modal');
    document.removeEventListener('keydown', onModalClose);
  }
}

refs.backdropEl.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    document.body.classList.remove('show-modal');
    document.removeEventListener('keydown', onModalClose);
  }
});

// focus blur click input change
refs.colorEl.addEventListener('change', onColorChange);

function onColorChange(e) {
  console.log(e);
  document.body.style.backgroundColor = e.target.value;
}

refs.sizeEl.addEventListener('input', onSizeChange);

function onSizeChange(e) {
  const size = e.target.value;
  refs.colorEl.style.width = size + 'px';
}

refs.formEl.bio.addEventListener('input', onBioInput);

function onBioInput(e) {
  refs.bioEl.textContent = e.target.value;
}

refs.formEl.username.addEventListener('blur', e => {
  if (e.target.value.length === 0) {
    e.target.style.outline = 'none';
  } else if (e.target.value.length < +e.target.dataset.maxLength) {
    e.target.style.outline = '2px solid red';
  } else {
    e.target.style.outline = '2px solid green';
  }
});

refs.formEl.username.addEventListener('focus', e => {
  e.target.style.outline = 'none';
});
