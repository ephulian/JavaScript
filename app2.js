const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className // Returns the class of the object

second.className = "blue";

const classValues = third.classList // Returns list of all classes of the object

third.classList.add('blue'); // add a class
third.classList.add('blue', 'text'); // add another class
third.classList.remove('text'); // removes a class

let result = third.classList.contains('text'); // returns true or false if object contains specified class

result ? console.log('does contain') : console.log('does not contain');