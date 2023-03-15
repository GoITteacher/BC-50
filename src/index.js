/* 
createProduct(obj, callback) - принимает объект товара без id, 
а также колбек. Функция создаёт обьект товара, добавляя ему 
уникальный идентификатор в свойство id и вызывает колбек передавая
 ему созданный обьект.
*/

// const createProduct = (obj, callback) => {
//   const newObject = {
//     ...obj,
//     id: Math.random(),
//   };
//   callback(newObject);
// };

// const logProduct = product => {
//   console.log(product);
// };
// const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// ==========

/* 
Добавьте объекту account методы 
withdraw(amount, onSuccess, onError) и 
deposit(amount, onSuccess, onError), где 
первый параметр это сумма операции, а второй и третий - 
колбеки.

Метод withdraw вызывает onError если amount больше 
TRANSACTION_LIMIT или this.balance, и onSuccess в 
противном случае.

Метод deposit вызывает onError если amount больше 
TRANSACTION_LIMIT или меньше либо равен нулю, и
 onSuccess в противном случае.
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError(amount);
//     } else {
//       onSuccess(amount);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       onError(amount);
//     } else {
//       onSuccess(amount);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }
// ==================

/* 
Напишите функцию each(array, callback), 
которая первым параметром ожидает массив, 
а вторым - функцию, которая применится к 
каждому элементу массива. Функция each должна 
вернуть новый массив, элементами которого будут 
результаты вызова коллбека.
*/

// const each = (array, callback) => {
//   const tempArray = [];
//   for (let item of array) {
//     tempArray.push(callback(item));
//   }
//   return tempArray;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// =============================

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = ({ name }) => {
//   console.log(name);
// };

// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ============================

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = message => {
//   console.log(`✅ Success! ${message}`);
// };
// const handleError = message => {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ===============

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   }),
// );

// const logItems = items => {
//   console.log(items);
//   items.forEach((item, idx, arr) => {
//     console.log(`${idx + 1} - ${item}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// =========================

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((el, ind) => {
//     console.log(`${el}: ${phoneList[ind]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(el => {
//     total += el;
//   });
//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
