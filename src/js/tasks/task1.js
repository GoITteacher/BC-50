// Напишите функцию, которая будет вычислять
// разницу между двумя датами и выводить
// ее в днях.

export const onFormSubmit = e => {
  e.preventDefault();
  const { date1, date2, result } = e.target.elements;
  const firstDate = new Date(date1.value);
  const secondDate = new Date(date2.value);

  const resultValue = (firstDate - secondDate) / 1000 / 60 / 60 / 24;
  result.value = resultValue;
};
