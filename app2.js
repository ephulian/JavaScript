const people = [
    {name:'bob', age:20, position:'dev'},
    {name:'peter', age:25, position:'design'},
    {name:'josh', age:30, position:'boss'}
]



const ages = people.map(function(item){
    return item.name;
});

console.log(ages);

const newPeople = people.map((person) => {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20
    }
})

const names = people.map((person) => {
    return `<h1>${person.name}</h1>`
})

document.body.innerHTML = names.join('')

console.log(...newPeople);
console.log(names);


// const cabinets = [
//     {name:'unit1', type:'tall', color:'blue', height:175, doors:2},
//     {name:'unit1', type:'bottom', color:'yellow', height:112, doors:4},
//     {name:'unit1', type:'tall', color:'yellow', height:112, doors:4},
//     {name:'unit1', type:'wall', color:'yellow', height:112, doors:4},
//     {name:'unit1', type:'under-stair', color:'yellow', height:112, doors:4},
//     {name:'unit1', type:'top', color:'orange', height:50, doors:6}
// ]

// // const yellowUnits = cabinets.map(function(unit){
// //         return unit.color
// // });

// const yellowUnits = cabinets.map((unit) => {
//     // return unit.color(
// })

// console.log(yellowUnits); 