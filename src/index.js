/* 
Створіть об'єкт "person" з властивостями "name", "age" та
"gender". Потім використовуйте деструктуризацію, щоб отримати
значення кожної властивості окремої змінної.
*/
// const person = {
//   name: 'vova',
//   age: 20,
//   gender: 'male',
// };

// const { name, age, gender } = person;

// console.log(name, age, gender);

// =============

/* 
Створіть об'єкт "car" з властивостями "brand", "model" та 
"year". Потім використовуйте spread оператор, щоб створити 
новий об'єкт, який міститиме всі властивості об'єкта "car", 
а також властивість "color".
*/

// const car = {
//   brand: 'gg',
//   model: 'm5',
//   year: 2020,
// };

// const newCar = {
//   ...car,
//   color: 'red',
// };

// console.log(newCar);

// ========================

/*Створи ти функцію, яка приймає масив чисел і callback функцію.
 Функція повинна пройти по кожному елементу масиву та викликати 
 callback функцію для кожного елемента, передавши його як 
 аргумент.

Створіть масив з 5 об'єктів, кожен з яких представляє людину 
і містить властивості "name", "age" та "gender". 
Потім використовуйте метод масиву, що перебирає, щоб
 відфільтрувати масив і повернути тільки тих людей, 
 які старше 30 років. */

function noName(arr, callback) {
  for (const num of arr) {
    callback(num);
  }
}

function createHuman() {
  return {
    name: 'Oleg',
    age: Math.round(Math.random() * 100),
    gender: 'male',
  };
}

function generatePeople(len) {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(createHuman());
  }
  return arr;
}

// const people = generatePeople(20);
// console.table(people);
// console.table(people.filter(el => el.age > 30));

// =========

/* 
Створіть функцію, яка приймає два об'єкти та callback функцію. 
Функція повинна об'єднати властивості двох об'єктів в один новий 
об'єкт, потім викликати функцію callback, передавши новий об'єкт 
як аргумент.

Створіть масив чисел і використовуйте метод масиву, що перебирає,
 щоб знайти суму всіх чисел в масиві.
*/

// function foo(obj1, obj2, callback) {
//     const newObj = {...obj1, ...obj2};
//     callback(newObj);
// }

// function generateListNumber(len) {
//   let arr = [];
//   for (let i = 0; i < len; i += 1) {
//     const number = Math.round(Math.random() * 100);
//     arr.push(number);
//   }
//   return arr;
// }

// const nums = generateListNumber(7);

// console.log(nums);

// const result = nums.reduce((total, el) => total + el, 0);
// console.log(result);

// =================
/* 
Створити функцію, яка приймає масив рядків і callback функцію.
 Функція повинна пройти по кожному рядку в масиві та викликати
  callback функцію для кожного рядка, передавши її як аргумент.
Callback функція повинна повертати довжину рядка. Функція 
   повинна повернути масив, що містить довжини всіх рядків 
   вихідного масиву.
*/
const firstSrtings = (array, callback) => array.map(callback);
const getLength = str => str.length;

//   let newArray = [];
//   for (let string of array) {
//     newArray.push(callback(string));
//   }
//   console.log(newArray);
//   return newArray;

// console.log(
//   firstSrtings(['ef', 'ef2234', 'ef345', 'ef456', 'e567f'], getLength),
// );

// console.log(
//   firstSrtings(['ef', 'ef2234', 'ef345', 'ef456', 'e567f'], el => el + el),
// );

/* 
Створіть об'єкт "book" з властивостями "title", "author" та 
"year". Потім використовуйте rest оператор, щоб створити новий 
об'єкт, який міститиме всі властивості об'єкта "book", крім
 властивості "year". */

// const book = {
//   title: '',
//   author: '',
//   year: '',
// };
// const { year, ...newBook } = { ...book, year2: 2 };
// console.log(newBook);

// const arr = [1, 2, 3, 345, 6, 2, 62, 5, 775, 2, 1];
// const [, , ...newArr] = arr;
// console.log(newArr);

// ==============

/* 
Створіть функцію, яка приймає масив об'єктів і функцію callback. 
Функція повинна пройти по кожному об'єкту в масиві та викликати 
callback функцію для кожного об'єкта, передавши його як аргумент.
Функція Callback повинна повертати значення властивості "age" 
об'єкта. Функція повинна повернути масив, що містить усі значення 
властивості "age" з вихідного масиву.
*/

// const foo = (objects, callback) => objects.map(callback);

// function callback(obj) {
//   return obj.age;
// }

// ===============
