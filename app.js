let text = '     Peter Jordanson';
let textLowerCase = text.toLowerCase();
let textUpperCase = text.toUpperCase();


console.log(textLowerCase); // text-transform: uppercase;
console.log(textUpperCase); // text-transform: lowercase;
console.log(text.charAt(2)); // return the value at specified index
console.log(text.charAt(12).toUpperCase()); 
console.log(text.charAt(text.length-1)); 
console.log(text.indexOf('J')); // returns index of passed value
console.log(text.trim()); // trims whitespace from start and end of string
console.log(text.trim().startsWith('Peter')); // returns true or false if it starts with passed value
console.log(text.includes('ete')); // returns true or false if string has specified value within
console.log(text.slice(8, 12)); // index slicing (starts at 0)
console.log(text.slice(-4)); // index slicing reversed
