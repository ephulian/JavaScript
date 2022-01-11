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