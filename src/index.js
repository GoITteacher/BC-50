/* 
Реалізуйте клас MyString, який буде мати наступні методи:
 метод reverse(), який
параметром приймає рядок, а повертає її в перевернутому
 вигляді, метод
ucFirst(), який параметром приймає рядок, а повертає цей 
же рядок, зробивши його
першу літеру заголовком і метод ucWords, який приймає
 рядок і робить заголовною
першу літеру кожного слова цього рядка.
*/

/* 
class MyString {
  color = 'black';
  fontSize = '12px';
  constructor(color, fontSize) {
    this.color = color;
    this.fontSize = fontSize;
  }

  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  ucWords(text) {
    return text.split(' ').map(this.ucFirst).join(' ');
  }
}

const test = new MyString('red', '12px');
console.log(test.reverse('hdfghbh df'));
console.log(test.ucFirst('hdfghbh df'));
console.log(test.ucWords('hdfghbh df')); */

/* class MyString {
  static reverse(str) {
    return str.split('').reverse().join('');
  }

  static ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  static ucWords(text) {
    return text.split(' ').map(MyString.ucFirst).join(' ');
  }
}

console.log(MyString.reverse('My dog is pet')); */

// =========================

/* 
Реалізуйте клас Validator, який перевірятиме рядки. 
Наприклад, у нього буде
метод isEmail параметром приймає рядок і перевіряє, 
чи є він коректним емейлом
чи ні. Якщо є – повертає true, якщо не є – то false.
Крім того, клас буде мати
такі методи: метод isDomain для перевірки домену, 
метод isDate для перевірки
дати і метод isPhone для перевірки телефону: 
*/

/* class Validator {
  static isEmail(email) {
    // if (email.length < 5 && email.length > 20) {
    //   return false;
    // } else if (!email.includes('@') && !email.includes('.')) {
    //   return false;
    // }
    // return true;

    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      email,
    );
  }

  static isDomain(domain) {
    return /^((https?|ftp)\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(
      domain,
    );
  }

  static isDate(date) {
    return /^\d{1,2} [A-Z][a-z]{2,8} \d{4}$/.test(date);
  }

  static isPhone(phone) {
    return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phone);
  }
}

console.log(Validator.isDate('01 August 1995')); */

class BankAccount {
  #balance;
  #trans;
  constructor(userName) {
    this.id = Math.floor(Math.random() * 10000);
    this.userName = userName;
    this.#balance = 0;
    this.#trans = [];
  }
  deposit(sum) {
    if (sum <= 0) return;

    this.#balance += sum;

    const transaction = this.createTrans({
      balance: this.#balance,
      amount: sum,
      type: 'deposit',
    });

    this.#trans.push(transaction);
  }

  withdraw(sum) {
    if (sum <= 0 || sum > this.#balance) return;

    this.#balance -= sum;

    const transaction = this.createTrans({
      balance: this.#balance,
      amount: sum,
      type: 'withdraw',
    });

    this.#trans.push(transaction);
  }

  getTrans() {
    return this.#trans;
  }
  getBalance() {
    return this.#balance;
  }
  createTrans(obj) {
    return { ...obj, id: Math.floor(Math.random() * 10000) };
  }
}

const bankA = new BankAccount('Vladymyr');
const bankB = new BankAccount('Vladymyr');

console.log(bankA, bankB);

bankA.deposit(500);
bankA.deposit(500);
bankA.deposit(500);
bankA.withdraw(700);
bankA.deposit(500);

console.log(bankA.getTrans());
console.log(bankB.getTrans());
