// Constructor function
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function (){
        console.log(`full name: ${this.firstName} ${this.lastName}`);
    }
}

// Everything in JS has a constructor property that returns the function that created it

const james = new Person('james', 'malcovich');
console.log(james.constructor);

const obj = {};
console.log(obj.constructor);

const list = [];
console.log(list.constructor);

const sayHi = () => {};
console.log(sayHi.constructor);