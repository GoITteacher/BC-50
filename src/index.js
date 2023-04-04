function createPromise(delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, delay, delay);
  });

  return promise;
}

const res1 = createPromise(1000);

res1.then(res => console.log(res));

console.log(res1);

[].filter().filter().map();
