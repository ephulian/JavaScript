// Global vs Local Scope
// any variable outside code block {} is GLOBAL
// accessed anywhere in program
// AVOID: Name collisions, Unwanted Modifications

let name = 'bobo';
name = 'peter';

const calculate = function(){
    // console.log(name);
    name = 'orange';
}

console.log(`my name is ${name}`);

calculate();

console.log(`my name is ${name}`);