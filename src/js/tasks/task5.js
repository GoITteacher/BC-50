export function onFormSubmit5(event) {
  event.preventDefault();
  //   const inputValue = event.target.elements.date1.value;
  //   const result = event.target.elements.result;

  //   const dateInput = new Date(inputValue);

  //   dateInput.getDay();
  //   result.value = dateInput.getDay() === 6 || dateInput.getDay() === 0;

  console.log(Object.keys(event.target.dataset));
}
