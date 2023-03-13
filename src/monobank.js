/* 
Написати систему контролю банку.

Властивості:
- список користувачів [userId, FIO,'password']
- список рахунків [userId, accountNumber, value]

Методи:
- додати користувача
- видалити користувача

- створити рахунок
- видалити рахунок

- додати гроші на рахунок
- зняти гроші з рахунка
*/

let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

const monobank = {
  users: [],
  accounts: [],

  addUser(FIO, password) {
    const user = {
      userId: guid(),
      userFIO: FIO,
      userPassword: password,
    };
    this.users.push(user);
    this.newAccount(user.userId);
  },

  removeUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (id === this.users[i].userId) {
        this.removeAccountsForUser(id);
        this.users.splice(i, 1);
        break;
      }
    }
  },

  removeAccount(id) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountNumber === id) {
        this.accounts.splice(i, 1);
        break;
      }
    }
  },

  removeAccountsForUser(userId) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].userId === userId) {
        this.removeAccount(this.accounts[i].accountNumber);
      }
    }
  },

  newAccount(id) {
    const account = {
      userId: id,
      accountNumber: guid(),
      balance: 0,
    };
    this.accounts.push(account);
  },

  deposit(id, amount) {
    if (amount <= 0) {
      return;
    }
    for (const account of this.accounts) {
      if (id === account.accountNumber) {
        account.balance += amount;
      }
    }
  },

  withdraw(id, amount) {
    if (amount <= 0) {
      return;
    }
    for (const account of this.accounts) {
      if (id === account.accountNumber && amount <= account.balance) {
        account.balance -= amount;
      }
    }
  },
};

monobank.addUser('FIO', 'pass');

console.log(monobank.users);
console.log(monobank.accounts);
