const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = cars => {
//   return cars
//     .map(item => item.model)
//     .sort()
//     .reverse();
// };

// const getModels = cars => {
//   return cars
//     .reduce((acc, item) => {
//       acc.push(item.model);
//       return acc;
//     }, [])
//     .sort()
//     .reverse();
// };
// console.table(getModels(cars));

// ==============

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(el => {
//     const newCar = { ...el };
//     newCar.price -= newCar.price * discount;
//     return newCar;
//   });
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// console.table(cars);

//=========

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(el => {
//     return el.price < threshold;
//   });
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// =============

// const getCarsWithDiscount = cars => cars.filter(el => el.onSale);
// console.table(getCarsWithDiscount(cars));

// ===============

// const getCarsWithType = (cars, type) => {
//   return cars.filter(el => el.type === type);
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

///
// const getCarByModel = (cars, model) => {
//   return cars.find(el => el.model === model);
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ==============

// const sortByAscendingAmount = cars => {
//   return [...cars].sort((a, b) => {
//     return a.amount - b.amount;
//   });
// };

// console.table(sortByAscendingAmount(cars));

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => {
//     return a.price - b.price;
//   });
// };

// console.table(sortByDescendingPrice(cars));

// =====================
const asc = 'asc';
const desc = 'desc';

// const sortByModel = (cars, order) => {
//   const newCarsArr = [...cars];
//   if (order === 'asc') {
//     newCarsArr.sort((a, b) => a.model.localeCompare(b.model));
//   } else {
//     newCarsArr.sort((b, a) => a.model.localeCompare(b.model));
//   }
//   return newCarsArr;
// };

// const sortByModel = (cars, order) => {
//   const newCarsArr = [...cars];
//   newCarsArr.sort((a, b) => {
//     if (order === asc) {
//       return a.model.localeCompare(b.model);
//     }
//     return b.model.localeCompare(a.model);
//   });

//   return newCarsArr;
// };

// console.table(sortByModel(cars, asc));
// console.table(sortByModel(cars, desc));

// ======================

// const getTotalAmount = cars => {
//   return cars.reduce((acc, car) => {
//     return acc + car.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));

// const getModelsOnSale = cars => {
//   return [...cars]
//     .filter(car => car.onSale)
//     .map(({ model, onSale }) => ({ model, onSale }))
//     .sort((a, b) => a.model.localeCompare(b.model));
// };
// console.table(getModelsOnSale(cars));

// =========================

// function oddOne(arr) {
//   return arr.findIndex((el, ind, array) => {
//     return el % 2 !== 0;
//   });
// }
// console.log(oddOne([4, -8, 98, -12, -7, 90, 100]));

// ===============

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }

/* 
[] -->  "no one likes this"
["Peter"]  -->  "Peter likes this"
["Jacob", "Alex"] -->  "Jacob and Alex like this"
["Max", "John", "Mark"]  -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

const multiplicationTable = size => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = (j + 1) * (i + 1);
    }
  }

  console.log(arr);
};

multiplicationTable(5);
