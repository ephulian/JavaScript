const child = document.querySelector('#child')

child.addEventListener('click', function(){}, true)

// last parameter of event listeners is an answer to getCapturing

// with true - it logs the event as it propagates down the tree

// with false - it logs the event as it bubbles up the tree