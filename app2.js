const people = [
    {name: 'bob', age: 20, position: 'dev'},
    {name: 'paul', age: 25, position: 'des'},
    {name: 'george', age: 30, position: 'den'},
    {name: 'bobby', age: 35, position: 'del'},
    {name: 'prin', age: 40, position: 'deg'}    
];

const youngPeople = people.filter(function(person){
    return person.age <= 25;
})

const desPeople = people.filter((person) => person.position === 'des')

console.log(...youngPeople);
console.log(...desPeople);