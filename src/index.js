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
  console.log(result);
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

console.log(fibba(5));
