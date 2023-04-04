//Напишите функцию, которая будет проверять,
// находится ли заданная дата в будущем
// или прошлом.

export function onFormSubmit2(event) {
  event.preventDefault();
  const inputValue = event.target.elements.date.value;
  const inputDate = new Date(inputValue);
  const resultL = event.target.elements.result;
  if (inputDate < Date.now()) {
    resultL.value = 'past';
  } else {
    resultL.value = 'future';
  }
}
