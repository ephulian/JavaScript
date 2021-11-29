// Date

const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = Array.from(Array(31).keys()).map(x => x + 1);


const date = new Date();
const month = date.getMonth();
const day = date.getDay();

const sentence = `${months[month]}, ${date.getDate()}`

console.log(sentence);
console.log(date);
// const test = Array(31).keys();
// console.log(...test);