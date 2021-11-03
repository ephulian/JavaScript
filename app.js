// truth and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined - return Falsy

const bool1 = true;
const bool2 = 2 > 1;

const text = '';

if(text){
    console.log(`Truthy!`);
} else {
    console.log(`Falsy`);
}