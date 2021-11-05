// function greetMorning(name){
//     const myName = 'Kiril';
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name){
//     const myName = 'Kiril';
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

const currentTime = 12

const morning = (name) => `Good morning ${name}`;
const afternoon = (name) => `Good afternoon ${name}`;
const evening = (name) => `Good evening ${name}`;

function greet(name, callback){
    const myName = 'Kiril';
    console.log(`${callback(name)}, my name is ${myName}!`);
    callback();
}

greet('Bobo', evening)