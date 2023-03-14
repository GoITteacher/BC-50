/* function entries(object) {
    const result = [];
    const keys = Object.keys(object);
    for (const key of keys) {
        result.push([key,object[key]]);
    }
    return result;
}

 */

// =============================
// Напишите функцию, которая возвращает новый объект 
// без указанных значений.

/* function foo(object, ...argg) {

    const result = {};
    const keys = Object.keys(object);

    for (const key of keys) {
        if (argg.includes(key))continue;
        result[key] = object[key];
    }

    console.log(result);
} */

// ==========================================



//Напишите функцию, которая делает поверхностную 
// проверку объекта на пустоту.


/* function isEmpty(object){
    for(const value of Object.values(object)){
        if(value !== null && value !== undefined) {
            return false;
        }         
    }

    return true;
}

console.log(isEmpty(obj)); */

// ======================================

// Напишите функцию, которая поверхностно сравнивает два объекта.



/* function isObjectEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (obj2[key] !== obj1[key]) {
            if (typeof obj1[key] === typeof obj2[key]){
                if (typeof obj1[key] !== 'object') {
                    console.log(obj1[key], obj2[key])
                    return false;
                }
            }else{
                console.log(obj1[key], obj2[key])
                return false;
            }
        }
    }

    return true;
} */


// ==============================
/* 
Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
*/


// function arrange(s) {
//     const T = [];
//     while (s.length > 0) {
//         T.push(s.shift(), s.pop());
//         s.reverse();
//     }
//     return T;
// }

function arrange(s) {
    const T = [];

   for( let i = 0; 0 < s.length; i += 1) {
     if (i % 2 === 0){
        T.push(s.shift(), s.pop());
     }else{
        T.push(s.pop(), s.shift());
     }
   }

   return T;
}

// 1 5 4 2

