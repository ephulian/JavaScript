const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

function showThis(){
    console.log(this);
}

const john = {
    name: 'john',
    showThis:showThis,
}

const bob = {
    name: 'bob',
    showThis:showThis,
}

// john.showThis()
// bob.showThis()

// here this refers to the event target
btn1.addEventListener('click', showThis)

// here 'this' referes to global because it's a new function called
btn2.addEventListener('click', function(){
    showThis()
})

// !!!!!! this keyword refers to the current execution context !!!!!!