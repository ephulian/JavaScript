const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const result = document.getElementById('result');

const newListElement = document.createElement('li');
const blueberry = document.createTextNode('blueberry')

// insertBefore (first value is item inserted, second value is before which item)
result.insertBefore((newListElement.appendChild(blueberry)), second)
document.body.appendChild(result)