// Local Variables
// if - NOT VAR
// if const or let not used EVEN within code block var is still global
// can create code blocks (locals) with curly braces only 

let name = 'bobo';

function calculate(){
    const name = 'john';
    const age = 25;

    becomesGlobal = 'global variable'
}

calculate();

console.log(becomesGlobal);

if (true){
    const name='john';
}

console.log(`this is ${name}`);