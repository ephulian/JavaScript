const age2 = 60
const age3 = 70

let random = 'random-value'
random = 'age'

// Nesting objects
const person = {
    name: 'john',
    age: 25,
    age2: age2, // setting property value to variable value
    age3, // ES6 allows auto set if property name == var name
    married: true,
    siblings: ['anna', 'james', 'peter'],
    greet: (name) => {
        console.log(`hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`hello, my name is ${name}`);
    },
    job:{
        title:'developer',
        company: {
            name:'perspective concepts',
            address: '123 main'
        }
    },
    'random-value':'random' // string key can be accessed with bracket notation []
}

// Use dot notation to drop down nested objects
console.log(person.job.title); //? developer
console.log(person['name']); // also works


console.log(person["random-value"]); //? random
console.log(person[random]); //? can use a var to dynamically return property values