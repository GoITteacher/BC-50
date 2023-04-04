export function onFormSubmit4(evt) {
  evt.preventDefault();
  const firstInput = evt.target.elements.date1.value;
  const secondInput = evt.target.elements.date2.value;
  const thirdInput = evt.target.elements.date3.value;
  const resultInput = evt.target.elements.result;

  const firstDate = new Date(firstInput);
  const secondDate = new Date(secondInput);
  const thirdDate = new Date(thirdInput);

  resultInput.value = firstDate <= thirdDate && thirdDate <= secondDate;
}
