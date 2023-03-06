// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// =========

/*
Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
`24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
запятая.

Индекс массиы тела необходимо округлить до одной цифры после запятой;
*/

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));

// height = Number(height.replace(',', '.'));

// // const bmi = weight / height ** 2;
// const bmi = weight / height ** 2;

// console.log(+bmi.toFixed(1)); // 28.8

// =====================

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '26');

// console.log('2' < '12');

// console.log('4' == 4);

// t t t f t

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log(false == false);

// console.log('0' === false);

// f f t f t f

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// t f t f

// console.log(true && false);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi'); // t

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log((false && 3) || 4);

// console.log(true || false || 7); // t

// console.log(null || 2 || undefined); // 2 - T

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4); // 3 - T

// console.log(1 && 5); // 5 - t
// console.log(5 && 1); // 1 - t
// console.log(0 && 2); // 0 - f
// console.log(2 && 0); // 0 - f
// console.log('' && 'Mango'); // '' - f
// console.log('Mango' && ''); // '' - f
// console.log('Mango' && 'Poly'); // 'Poly' - t
// console.log('Poly' && 'Mango'); // 'Mango' - t

// console.log(true || false); // t
// console.log(false || true); // t
// console.log(true || true); // t
// console.log(3 || false); //  3 - t
// console.log(false || 3); // 3 - t
// console.log(3 || true); // 3 - t
// console.log(true || 3); // true

// console.log(!true); // f
// console.log(!false); // t
// console.log(!3); // f
// console.log(!'Mango'); // f
// console.log(!0);// t
// console.log(!''); // t

// const isOnline = true;
// const isNotOnline = !isOnline;

// ==================

/*
Отрефактори код так, чтобы в переменную `value` присваивалось значение
переменной `incomingValue`, если оно не равно `undefined` или `null`. В
противном случае должно присваиваться значение `defaultValue`. Проверь работу
скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
false. Используй оператор `??` (nullish coalescing operator).
*/

// const incomingValue = null; // null, undefined, 0, false
// const defaultValue = 'Empty';
// const value = incomingValue ?? defaultValue;
// console.log(value);
// =========================

// const totalMinutes = 37;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const strHours = hours.toString().padStart(2, '0');
// const strMinutes = minutes.toString().padStart(2, '0');

// const result = `${strHours}:${strMinutes}`;
// console.log(result);
// ============

// const year = 1700; //18
// console.log(Math.ceil(year / 100));
// ==========

const lenA = 15;
const lenCircle = 15 * 2;
const radius = lenCircle / Math.PI;
const area = radius ** 2;
