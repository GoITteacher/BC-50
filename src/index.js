function foo(count, str) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += str;
  }
  return result;
}

function parse(data) {
  let num = 0;
  const array = [];
  for (let symbol of data) {
    switch (symbol) {
      case 'i':
        num++;
        break;
      case 'd':
        num--;
        break;
      case 's':
        num *= num;
        break;
      case 'o':
        array.push(num);
        break;
    }
  }
  return array;
}

/*function drawStairs(n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += ' '.repeat(i) + 'I\n';
  }

  const arr = result.split('\n');
  arr.pop();
  return arr.join('\n');
}*/

function drawStairs(n) {
  if (n === 0) return '';

  let result = 'I';
  for (let i = 1; i < n; i += 1) {
    result += '\n' + ' '.repeat(i) + 'I';
  }

  return result;
}

function drawStairs(n) {
  let result = '';

  for (let i = 0; i < n; i += 1) {
    result += ' '.repeat(i) + 'I';
    if (i != n - 1) {
      result += '\n';
    }
  }

  return result;
}

function drawStairs(n) {
  let result = '';

  for (let i = 0; i < n; i += 1) {
    result += ' '.repeat(i) + 'I\n';
  }

  result = result.slice(0, -1);
  return result;
}

// console.log(drawStairs(6));
// ============================

function makeArray(length) {
  let arr = [];

  for (let i = 0; i < length; i += 1) {
    let arrH = [];
    arrH.length = length;
    arrH.fill(0);
    arr.push(arrH);
  }

  return arr;
}

function showMatrix(matrix) {
  let result = '';
  for (const el of matrix) {
    result += el.join('') + '\n';
  }
  return result;
}

function fillArray(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (
        i == 0 ||
        i == matrix.length - 1 ||
        j == 0 ||
        j == matrix.length - 1
      ) {
        matrix[i][j] = '#';
      } else if (i == j) {
        matrix[i][j] = '0';
      } else if (j === matrix.length - 1 - i) {
        matrix[i][j] = '0';
      } else if (j % 4 === 0) {
        matrix[i][j] = '*';
      } else {
        matrix[i][j] = ' ';
      }
    }
  }
}

const matrix = makeArray(41);

// fillArray(matrix);

// showMatrix(matrix);

// ==========================

function fibba(index) {
  console.log(index);
  if (index < 2) return 1;
  return fibba(index - 1) + fibba(index - 2);
}

// console.log(fibba(5));

function foo(arr) {
  let result = 0;
  let max;
  while (max != 0) {
    showArray(arr);
    max = findMax(arr);
    const firstIndex = arr.indexOf(max);
    const lastIndex = arr.lastIndexOf(max);

    if (firstIndex === lastIndex) {
      arr[firstIndex] -= 1;
    } else {
      for (let i = firstIndex; i <= lastIndex; i++) {
        if (arr[i] === max) {
          arr[i] -= 1;
        } else {
          result += 1;
        }
      }
    }
  }

  console.log(result);
  return result;
}

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

function showArray(arr) {
  const lenY = findMax(arr);
  const lenX = arr.length;

  let str = '';
  for (let i = 0; i < lenY; i++) {
    for (let j = 0; j < lenX; j++) {
      str += i > lenY - arr[j] ? '*' : ' ';
    }
    str += '\n';
  }
  console.log(str);
}

// =============

function foo(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count += 1;
    }
    result.push(count);
  }

  return result;
}

function getAverage(marks) {
  let result = 0;
  for (let mark of marks) {
    result += mark;
  }
  result = Math.round(result / marks.length);
  return result;
}

function fixTheMeerkat(arr) {
  let tmp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = tmp;
  return arr;
}

function xMarksTheSpot(input) {
  const result = [];
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[i].length; j += 1) {
      if (input[i][j] === 'x') {
        result.push([i, j]);
      }
    }
  }

  if (result.length === 1) {
    return result[0];
  } else {
    return [];
  }
}

[[1, 2]];

xMarksTheSpot([
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]);
