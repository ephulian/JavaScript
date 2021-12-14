const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const result = document.getElementById('result');

// returns the text content
console.log(third.textContent); 

// returns the whole html structure
console.log(result.innerHTML); 

const ul = document.createElement('ul'); // create new element
ul.innerHTML = `<li>new list item</li>` // populate with HTML
document.body.appendChild(result.appendChild(ul)) // append to DOM