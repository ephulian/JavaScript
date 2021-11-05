// Variable lookup
// {} - code blocks

const globalNumber = 10;

function add(num1, num2){
    const globalNumber = 100; 
    const result = num1 + num2 + globalNumber;
    // return result;

    function multiply (){
        // const globalNumber = 1000;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }

    multiply();
    return result;
}

console.log(add(3, 4));