// Math
// Standard built-in objects - always available
// Math.random returns a value between 0 and 1 (but never 1) 
// multiply to move the decimal point and floor or ceil to round up or down


const number = 4.56789;

const result = Math.ceil(number);

console.log(result);

const randInt = Math.floor(Math.random() * 10 + 1);

console.log(randInt);