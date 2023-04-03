const refs = {
  formElement: document.querySelector('form'),
};

refs.formElement.addEventListener('submit', e => {
  e.preventDefault();
  const firstDelay = e.target.elements.delay.value;
  const interval = e.target.elements.interval.value;
  const amount = e.target.elements.count.value;
  foo(firstDelay, interval, amount, myCallback);
  e.target.reset();
});

function myCallback(msg) {
  console.log(msg);
}

// function foo(delay, interval, amount, callback) {
//   setTimeout(() => {
//     for (let i = 0; i < amount; i++) {
//       setTimeout(() => {
//         callback(i);
//       }, i * interval);
//     }
//   }, delay);
// }

function foo(delay, interval, amount, callback) {
  let count = 0;
  let id;
  setTimeout(() => {
    id = setInterval(() => {
      callback(+delay + count++ * +interval);
      if (count === +amount) {
        clearInterval(id);
      }
    }, interval);
  }, delay);
}
