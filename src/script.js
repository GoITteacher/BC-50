/* 
Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
любого массива чисел. Используй цикл для решения задачи.
*/

// const numbers = [2, 17, -10 ,94, 1, -5, 37];
// let min = Infinity;
// for(let i = 0; i < numbers.length; i+=1) {
//     if(numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// let min = numbers[2];
// for(let i = 0; i < numbers.length; i+=1) {
//     if(numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min);

// =========================================


/* const arr = [9,2,6,8,2,6,8,1,21];
let count=0;
for(let i=0;i<arr.length-1;i+=1){
    for(let j=i+1;j<arr.length;j+=1){
        if(arr[i]<arr[j]){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(count);
console.log(arr); */


// ======================================


// const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
// for (let i = 0; i < arr.length-1; i+=1) {
//     for (let j = i+1; j < arr.length; j+=1) {
//         if(arr[i].length > arr[j].length) {
//             const tmp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tmp;
//         }
//     }
// }
// console.log(arr)


// =================================
// const arr = [1,5,1,43,8,23,6,8];
// let min = arr[0];
// let minIndex = 0;
// const arr2 = Array.from(arr);

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
// };

// console.log(arr2.splice(minIndex, 1));
// console.log(arr2);

// ===================================

// const start = 4;
// const end = 17;
// let result = 0;
// for(let i=start;i<=end;i+=1){
//     if(!i.toString().includes('5')){
//         result+=1;
//     }
// }
// console.log(result);

// ====================================


// const arr = ['D','D','D','L','D','L'];
// let result = 'N'
// for (let elem of arr) {
//     result = (elem === result) ? 'N' : elem;
// }
// console.log(result);

// ====================================

// const arr = [1,2,4,6,5,6,7,2,1,2,3,2,3,4];
// const arrNew = [];
// for (const arrEl of arr) {
//     if (!arrNew.includes(arrEl)) {
//         arrNew.push(arrEl);
//     }
// }

// const i = 0;
// const j = 4;
// const arr = [2,4,6,4,1,6,4,4,1,1,3,5,2,5];

// for (const arrEl of arr) {
//     const firstIndex = arr.indexOf(arrEl);
//     let lastIndex = arr.lastIndexOf(arrEl);

//     while(firstIndex !== lastIndex){
//         arr.splice(lastIndex,1);
//         lastIndex = arr.lastIndexOf(arrEl);
//     }
// }

// console.log(arr);


// =========================

const arr1 = [1,2,3,5,6,7,2,1];
const arr2 = [1,2,3,5,7,2,68,9,3,8,9,4,3];
const arr = arr1.concat(arr2);
let total = 0;

for(let num of arr){
    total += num;
}

console.log(total);





