let names = ['john', 'peter', 'bob', 'barry', 'james', 'glen', 4, 2, 1];
let lastNames = ['peper', 'onion', 'phone', 'clamp'];

console.log(names.length); // returns length of array
console.log(names[4]); // returns value at specific index (starting at 0)
console.log(names[names.length - 6]); // returns value at specific index (reversed)

console.log(names.concat(lastNames)); // appends specified array
console.log(names.reverse()); // reverses array

console.log(names.unshift('suzy')); // adds to beggining of array
console.log(names.shift()); // removes first item in array

console.log(names.push('anna')); // appends to end of array
console.log(names.pop()); // removes from end of array

console.log(names.splice(0, 3)); // mutates original array!!

console.log(names);
