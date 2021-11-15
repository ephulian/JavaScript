const people = [
    {name: 'bob', age: 20, position: 'dev', id: 1},
    {name: 'paul', age: 25, position: 'des', id: 2},
    {name: 'george', age: 30, position: 'den', id: 3},
    {name: 'bobby', age: 35, position: 'del', id: 4},
    {name: 'prin', age: 40, position: 'deg', id: 5}    
];

const person = people.find((blit) => blit.id === 3)

console.log(person);

const youngPerson = people.find((cunt) => cunt.age === 40)
console.log(youngPerson);