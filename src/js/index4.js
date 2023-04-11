function createPromise(delay, temp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temp) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

async function foo() {
  const obj = {
    message: '',
  };
  const data1 = createPromise(10000, true);
  const data2 = createPromise(5000, false);
  const data3 = createPromise(4000, true);

  const result = await Promise.allSettled([data1, data2, data3]);
  console.log(result);
}

foo();
