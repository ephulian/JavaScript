function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3, 11);
const secondValue = addValues(23, 84);

const add = function (num1, num2) {
    return num1 + num2;
}

const thirdValue = add(5, 84)

const values = [firstValue, secondValue, (add(10, 10)+add(20, 20))];
console.log(values);

const multiply = (num1, num2) => (num1 * num2)


// const variableName = (parameter1, parameter2) => (parameter1 * parameter2) 

// console.log(hello());

// var names can start with either letter, _ or $
// typeof to find type of

/*

function hello(name, lastName){
    console.log('Hello my dear, ' + name + lastName);
}
*/