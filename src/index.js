/* 
Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
результат в консоль браузера.

- Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
- Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
- В противном случае вывести строку `"Я вас не знаю"`

Пароль проверять так:

- Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
- Иначе выводить строку `"Неверный пароль"`
*/

/* const login = prompt('Enter your login :');

if (login === "Admin") {
    const pass = prompt('Enter your password :');
    // const message = (pass === 'I am admin') ? 'hello' : 'wrong password';
    // console.log(message);

    if (pass === 'I am admin') {
        console.log('hello');
    } else {
        console.log('wrong password');
    }

} else if (login === null || login === '') {
    console.log('Cancelled');
} else {
    console.log('user unknown');
} */

// ==============================================

// const str = 'xxXoXoXXXoooOo';
// const strNormalized = str.toLowerCase();
// let countX = 0;
// let countO = 0;
// for (let i = 0; i < str.length; i += 1) {
//     // if (strNormalized[i] === 'x') {
//     //     countX += 1;
//     // } else if (strNormalized[i] === 'o') {
//     //     countO += 1;
//     // }

//     switch(strNormalized[i]){
//         case 'o': countO++; break;
//         case 'x': countX++; break;
//     }
// }
// const result = (countX === countO);
// console.log(result);


// =============================================

// const str = 'reverse';
// let result = "";

// // for (let i = 0; i < str.length; i+=1){
// //     result = str[i] + result;
// // }

// // for (let i = str.length; i>=0; i--){
// //     result += str[i]
// // }

// console.log(result);

// =============================================

// const str = '1431693894323';
// console.log(str);
// let totalSum = 0;
// for (let i = 0; i < str.length; i+=1 ){
//     totalSum += +str[i];
// }
// console.log(totalSum / str.length);
// ==========================================

// const x = 2;
// const y = 3;
// const q = 5;

// '2 6 18 54 162 12 454 6767 8793 23. '
// let result = '';
// for (let i=1; i<=q;i++){
//     result += x*y**(i-1) + ', ';
// }
// console.log(result.slice(0,-2));


// let total = x;
// let result = '';

// for (let i=0; i<q; i++){
//     result += total + ', ';
//     total = total*y;
// }

// console.log(result);

// ==========================================


// const num = 7;
// let result;
// switch(num) {
//     case 1:
//         result = "S";
//         break;
//     case 2:
//         result = "M";
//         break;
//     case 3:
//         result = "T";
//         break;
//     case 4:
//         result = "W";
//         break;
//     case 5:
//         result = "T";
//         break;
//     case 6:
//         result = "F";
//         break;
//     case 7:
//         result = "S";
//         break;  
// }

// console.log(result);


// =========================

/* 
Є кілька припущень, що ми приймемо рік 0, навіть якщо року 0 немає в григоріанському календарі.

Також основним правилом перевірки високосного року є наступне

Більшість років, які можна поділити на 4, є високосними.

Виняток: столітні роки НЕ є високосними роками, ЯКЩО їх не можна розділити на 400.

Отже, роки 0, -64 і 2016 повернуть 366 днів. У той час як 1974, -10 і 666 повертатимуть 365 днів.
*/

const year = 2000;
let numOfDates = 0;
// if (year % 400 === 0) {
//     numOfDates = 366;
// } else  if (year % 100 === 0) {
//     numOfDates = 365;
// } else if (year % 4 === 0) {
//     numOfDates = 366;
// } else {
//     numOfDates = 365;
// }

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    numOfDates = 366;
}else{
    numOfDates = 365;
}


