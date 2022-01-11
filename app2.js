// Everything is derived of the prototype of Object
// Example Object >> Function >> () => {}
// Or Object >> Array >> myArray

function Account(name, initialBalance){
    this.name = name;
    this.initialBalance = initialBalance;
    this.balance = 0
    this.checkBalance = function(){
        console.log(`${this.name}'s balance is ${this.balance}`);
    }
}

// Create a new constructor property
Account.prototype.bank = 'HSBC'

// Its best to use prototype to add methods to objects (to avoid creation on each instance)
Account.prototype.deposit = function(amount){
    this.balance += amount;
}

const jinny = new Account('jinny', 10);
jinny.deposit(15)
jinny.checkBalance()

const timmy = new Account('timmy', 24848);
timmy.deposit(500)
timmy.deposit(500)
timmy.deposit(500)
timmy.checkBalance()


console.log(Account.prototype);
console.log(timmy.bank);

const obj = {};
console.log(obj);

const list = [];
console.log(list.constructor.constructor);