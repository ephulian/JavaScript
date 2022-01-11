// Original Syntax ==========================================================================================================

// class Account
// ===============================================================================================================
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
// ===============================================================================================================

// ES6 Syntax ===============================================================================================================
class Account { // always uppercase for class names
    constructor(name, initialBalance){
        // all values here are unique to the specific instance
        // they need to be declared
        this.name = name; // parameters (to be args)
        this.balance = initialBalance; // parameters (to be args)
    }
    // all values here are applied to all instances
    bank = 'HSBC' // !!! dont need .this keyword !!!
    deposit(amount){ // dont need function declaration
        this.balance += amount; // to add methods
    }
    checkBalance(){
        console.log(`${this.name}'s balance is ${this.balance}`);
    }
    any(){}
}