const person = {
    name: 'john',
    age: 25,
    married: true,
    siblings: ['anna', 'james', 'peter'],
    greet: (name) => {
        console.log(`hello, my name is ${name}`);
    },
    sayHello(name){
        console.log(`hello, my name is ${name}`);
    }
}

// Get object property value
console.log(person.name);

// Add new object property
person.city = 'chicago'

// Change objet property
person.age = 60

// Delete property 
delete person.siblings

// Check if deleted
const married = delete person.married
console.log(married); // Returns - True/False