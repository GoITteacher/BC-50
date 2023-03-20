# Модуль 5. Занятие 9. Контекст вызова функции и this

## Task 1
```js
function func() {
  console.log(this);
}
let user = {
  firstName: 'Вася',
  func: func,
};
const user2 = {};
const func3 = user.func.bind(user2);
func3.call(user);
```
## Task 2
```js
const obj2 = {
  name: 'awdawd',
};

let obj1 = {
  name: 'obj1',
  func() {
    console.log('this', this);
    return ()=>{console.log(this);};
  },
};
debugger;
const foo = obj1.func.bind(obj2);
const newFunc = foo();

console.log(newFunc);
```
## Task 3
```js
const TESTOBJ = {};
const obj1 = {
  name: 'obj1',
  func() {
    TESTOBJ.name = 'test';
    console.log('FUNC', this);

    return () => {
      console.log('ARROW', this);
    };
  },
};

const obj2 = {
  name: 'obj2',
};

const newFunc2 = obj1.func.call(obj2).bind(obj2);
newFunc2();
```

## Task 4
```js
const obj = {
  foo() {
    console.log(this);
  },
};

obj.foo();
```
## Task 5
```js
let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    console.log(this);
  };

  arrow();
}

func.call(elem);
func();
```
## Task 6
```js
let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    (() => {
      console.log(this);
    })();
  };

  arrow();
}

func.call(elem);
```
## Task 7
```js
let Ukaraine = {
  value: 'Привіт',
};

function func(surname, name) {
  const a = 10;

  const foo = () => {
    console.log(this);
    return 'test';
  };

  return foo;
}

const myFunc = func();
myFunc();
```
## Task 8
```js
function f() {
  console.log(this);
  const foo = () => {
    console.log(this);
  };
  return foo;
}

const obj = {
  name: 'obj',
};
let obj1 = {
  name: 'OBJ1',
  foo1: f.call(obj),
};

obj1.foo1();
```
## Task 9
```js
function f() {
  console.log(this);
  function foo() {
    console.log(this);
  }
  return foo;
}

const obj = {
  name: 'obj',
};
let obj1 = {
  name: 'OBJ1',
  foo1: f.call(obj).bind(window),
};

obj1.foo1();
```
## Task 10
```js
let f = function () {
  console.log(this);
};

const obj = {
  foo: f,
};

const obj1 = {
  name: 'obj1',
};

obj.foo.call(obj1);
```
## Task 11
```js
let user1 = {
  name: 'Petya',
  setName() {
    this.name = name;
    console.log(this);
  },
};

user1.setName();

let user2 = {
  name: 'Vasya',
  age: 'TEST',
};

let newName = user1.setName;

newName('12312');

console.log(user1);
console.log(user2);
```

## Task 12
```js
const obj1 = {
  name: 'obj1',
};

const obj2 = {
  name: 'obj2',
};

const obj3 = {
  name: 'obj3',
  foo() {
    console.log(this);
    return function () {
      console.log(this);
    };
  },
};
const myFoo = obj3.foo();

obj1.foo1 = myFoo;

obj2.foo2 = obj1.foo1;

obj2.foo2();
```
---

## Example 1 - Мастерская драгоценностей

Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
количеством из свойства `stones`.

```js
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
```

## Example 2 - Телефонная книга

Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

```js
const phonebook = {
  contacts: [],
  add(contact) {},
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
```

## Example 3 - Калькулятор

Создайте объект `calculator` с тремя методами:

- `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
- `add()` - возвращает сумму сохранённых значений.
- `mult()` - перемножает сохранённые значения и возвращает результат.

```js
const calculator = {};
```
---
