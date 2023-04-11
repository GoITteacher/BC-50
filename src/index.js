async function foo() {
  try {
    await Promise.resolve();
    console.log(5);
    console.log(6);
    throw new Error();
  } catch {
    console.log('error');
    return 10;
  }
  console.log(8);
}

async function foo() {
  try {
    let data = await Promise.resolve(10);
    data = data * 2;
    console.log(data);
    throw new Error();
    return data / 4;
  } catch {
    return 10;
  }
  data = data * 10;
  return data;
}
