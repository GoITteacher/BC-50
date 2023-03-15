// function arrange(s) {
//   const T = [];
//   while (s.length > 0) {
//     const x = s.shift();
//     const y = s.pop();
//     const arr = toggle(x, y);

//     T.push();
//     s.reverse();
//   }
//   return T;
// }

// let stateToggle = false;

// function toggle(x, y) {
//   stateToggle = !stateToggle;
//   return stateToggle ? [x, y] : [y, x];
// }

// ====================

function foo(array, query) {
  if (query.length !== 2) return 'Error';
  for (const elem of array) {
    if (elem.length !== 2) return 'Error';
  }
  //   array.forEach((el, indx, array) => {
  //     if (el[0] === query[0] && el[1] === query[1]) {
  //       index = indx;
  //     }
  //   });

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (el[0] === query[0] && el[1] === query[1]) {
      return i;
    }
  }

  return -1;
}

// =======
const s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

function foo(s) {
  s = s.toUpperCase().split(';');
  for (let i = 0; i < s.length; i++) {
    const [x, y] = s[i].split(':');
    s[i] = `(${[y, x].join(', ')})`;
  }
  return s.sort().join('');
}

foo(s);
