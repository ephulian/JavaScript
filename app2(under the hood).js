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
class AccountES6 { // always uppercase for class names
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

// ============================================================================

function getElement (selection){
    const element = document.querySelector(selection);
    if(element){
        return element
    }
    throw new Error(`Please check "${selection}" selector, no such element exist in document.`)
}

function Counter (element, value){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.resset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    this.valueDOM.innerHTML = this.value

    // bind this to all functions
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)

    this.increaseBtn.addEventListener('click', this.increase)
    this.decreaseBtn.addEventListener('click', this.decrease)
    this.resetBtn.addEventListener('click', this.reset)
    
}

Counter.prototype.increase = function(value){
    this.value++
    this.valueDOM.innerHTML = this.value
}

Counter.prototype.decrease = function(value){
    this.value--
    this.valueDOM.innerHTML = this.value
}

Counter.prototype.reset = function(){
    this.value = 0
    this.valueDOM.innerHTML = this.value
}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 300)
