import { Bank } from './Bank.js';
import { getFromLS, saveToLS } from './helpers.js';

const monoBank = new Bank();
const privatBank = new Bank();
const myBanks = [monoBank, privatBank];

const refs = {
  monoFormEl: document.querySelector('.js-form1'),
  privateFormEl: document.querySelector('.js-form2'),
};

refs.monoFormEl.addEventListener('click', onFormSubmit);
refs.privateFormEl.addEventListener('click', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') return;

  const currentFormIndex = +e.currentTarget.dataset.index;
  const currentBank = myBanks[currentFormIndex];
  //   const currentBank = currentFormIndex == 1 ? monoBank : privatBank;

  const inputEl = e.currentTarget.elements['input-value'];

  if (e.target.name === 'deposit-btn') {
    currentBank.deposit(inputEl.value);
  } else {
    currentBank.withdraw(inputEl.value);
  }

  saveToLS(`bank-${currentFormIndex}`, currentBank);
  render(currentBank, e.currentTarget);
  e.currentTarget.reset();
}

function render(bank, form) {
  const balanceEl = form.querySelector('.js-balance');
  balanceEl.textContent = bank.balance;

  const markup = bank.historyTransaction
    .slice(0, 10)
    .map(
      el =>
        `<li class="${
          el.type === 'withdraw' ? 'withdraw-border' : 'deposit-border'
        }">${el.type}:${el.value}</li>`,
    )
    .join('');
  const historyEl = form.querySelector('.js-history');
  historyEl.innerHTML = markup;
}

function onLoad() {
  for (let i = 0; i < myBanks.length; i++) {
    const oldBank = getFromLS(`bank-${i}`);
    if (!oldBank) continue;

    myBanks[i].balance = oldBank.balance;
    myBanks[i].historyTransaction = oldBank.historyTransaction;
  }

  render(myBanks[0], refs.monoFormEl);
  render(myBanks[1], refs.privateFormEl);
}

onLoad();
