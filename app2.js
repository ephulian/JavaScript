const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const result = document.getElementById('result');

// create empty element
const bodyDiv = document.createElement('div');

// create text node
const text = document.createTextNode('simple body div');
bodyDiv.appendChild(text)  // append text to div
document.body.appendChild(bodyDiv) // append div to document > body