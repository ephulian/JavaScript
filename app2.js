const people = [
    {name: 'bob', age: 20, position: 'dev', id: 1, salary: 200},
    {name: 'paul', age: 25, position: 'des', id: 2, salary: 250},
    {name: 'george', age: 30, position: 'den', id: 3, salary: 300},
    {name: 'bobby', age: 35, position: 'del', id: 4, salary: 350},
    {name: 'prin', age: 40, position: 'deg', id: 5, salary: 400}    
];

const bob = people.reduce((acc, currItem) => {
    console.log(acc)
    console.log(currItem)
    return acc
}, 0)

const items = [
    {name:'rice', price:5},
    {name:'book', price:20},
    {name:'chicken', price:10},
    {name:'pork', price:100},
]

const reducer = (total, item) => total + item

let total = items.reduce(reducer, 0)
console.log(total)

// const var = object.reduce(function(acc, curr){}, start)
// acc = total of all calculations
// curr = current iteration