/* function func() {
  console.log(this);
}
let user = {
  firstName: 'Вася',
  func: func,
};
const user2 = {
  name: 'User2',
};
const func3 = user.func.bind(user2);
func3.call(user);
console.log(func3); */

// const obj2 = {
//   name: 'obj2',
// };

/* let obj1 = {
  name: 'obj1',
  func() {
    console.log('this', this);
    const myFunc = () => {
      console.log(this);
    };
    return myFunc;
  },
};

const foo = obj1.func.bind(obj2);
const newFunc = foo();
newFunc(); */

/* const TESTOBJ = {};
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

const newFunc2 = obj1.func.call(obj2).bind(obj1);
newFunc2(); */

/* const obj = {
  foo() {
    console.log(this);
  },
};

obj.foo(); */

/* let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    console.log(this);
  };

  arrow();
}

func.call(elem);
func(); */

/* let elem = {
  value: '123',
};

function func(a, b) {
  // this => elem
  const arrow = (a, b) => {
    // this => elem

    function name() {
      console.log(this);
    }

    const name2 = name.bind(func);
    name2();
  };

  arrow();
}

func.call(elem); */

/* let Ukraine = {
  value: 'Привіт',
};

function func(surname, name) {
  // this -> Ukraine
  const a = 10;

  const foo = () => {
    // this -> Ukraine
    console.log(this);
    return 'test';
  };

  return foo;
}

const myFunc = func.bind(Ukraine); //foo
myFunc(); */

/* function f() {
  // this -> obj
  console.log(this);
  const foo = () => {
    // this -> obj
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

obj1.foo1(); */

/* function f() { // obj
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
  foo1: f.call(obj).bind(window), // window
};

obj1.foo1(); // obj1 */

/* let f = function () {
  console.log(this);
};

const obj = {
  foo: f,
};

const obj1 = {
  name: 'obj1',
};

obj.foo.call(obj1); */

/* let user1 = {
  name: 'Petya',
  setName(name) {
    // this -> user2
    user2.name = name;
    console.log(this);
  },
};

let user2 = {
  name: 'Vasya',
  age: 'TEST',
};

let newName = user1.setName.bind(user2);

newName('12312'); // this -> user2

console.log(user1);
console.log(user2); */

/* const obj1 = {
  name: 'obj1',
  showName() {
    console.log(this.name);
  },
};

obj1.showName();

const obj2 = {
  name: 'obj2',
  showName: obj1.showName,
};

obj2.showName(); */

/* const obj3 = {
  name: 'obj3',
  foo() {
    console.log(this);
    return function test() {
      console.log(this);
    };
  },
};

const myFoo = obj3.foo().bind(obj1);

obj1.foo1 = myFoo;

obj2.foo2 = obj1.foo1;

obj2.foo2(); */

// foo2 = foo1 = myFoo = foo().bind(obj1) = test -> copyTest(ob1)

// 1 - arrow this
// 2 - bind
// 3 - call apply
// 4 - obj
// 5 - window

/* 
    1. Тип функції
    2. Стрілчата - то щукаємо батьківський контекст
    3. Звичайна - дивимось момент виклику та етапи створення
*/
