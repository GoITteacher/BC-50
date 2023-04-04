// Напишите функцию, которая будет добавлять
// к текущей дате заданное количество
// дней, месяцев или лет.

export function onFormSubmit3(evt) {
  evt.preventDefault();
  let dateValue = +evt.target.elements.date.value;
  const type = evt.target.elements.type.value;
  const result = evt.target.elements.result;
  const currentDate = Date.now(); // milliseconds +

  console.log();

  switch (type) {
    case 'year':
      dateValue *= 12;
    case 'month':
      dateValue *= 31;
    case 'day':
      dateValue *= 24 * 60 * 60 * 1000;
      break;
  }
  let resultDate = new Date(currentDate + dateValue);
  console.log(resultDate);

  const newDate = new Date(2023, 4 + 50, 10);
  console.log(newDate);
}
