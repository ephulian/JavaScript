// Everything is derived of the prototype of Object
// Example Object >> Function >> () => {}
// Or Object >> Array >> myArray

function Account(name, initialBalance){
    this.name = name;
    this.initialBalance = initialBalance;
    this.balance = 0
}

// Create a new constructor property
Account.prototype.bank = 'HSBC'

// Its best to use prototype to add methods to objects (to avoid creation on each instance)
Account.prototype.deposit = function(amount){
    this.balance += amount;
}

Account.prototype.checkBalance = function(){
    console.log(`${this.name}'s balance is ${this.balance}`);
} 