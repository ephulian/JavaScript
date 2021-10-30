const names = ['anna', 'suzy', 'bob'];
const lastNames = 'shaakenbake';

let newArray = [];
let newArray2 = [];

// for loop

for (let i = 0; i < names.length; i++){
    console.log(i);
    const fullName = `${names[i]} ${lastNames}` 
    newArray.push(fullName)
}

for (const element of names){
    newArray2.push(element);
}

console.log(newArray);
console.log(newArray2);