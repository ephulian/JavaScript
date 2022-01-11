// Factory function
function createPerson(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName: function(){
            console.log(`my full name is ${this.firstName} ${this.lastName}`);
        }
    }
}

const peter = createPerson('peter', 'ilfried');
peter.fullName()

// Constructor function
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function (){
        console.log(`full name: ${this.firstName} ${this.lastName}`);
    }
}

const james = new Person('james', 'malcovich'); // new creates new instance of object and points to it
console.log(james.firstName);