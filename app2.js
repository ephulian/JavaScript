const item = document.getElementById('special');
const value = item.childNodes.nextSibling; //?
const easyValue = item.textContent //?

console.log(value);


// nodeValue outputs the value of the selected child
// textContent outputs the value directly