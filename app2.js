const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const result = document.getElementById('result');

const button = document.querySelector('.btn');


button.addEventListener('click', () => {
    let currentColor = button.getAttribute('class').split(' ')[1] //?
    console.log(currentColor); //?
    switch(currentColor){
        case 'red':
            button.removeAttribute('red')
            button.setAttribute('class', 'blue')
            break
        case 'blue':
            button.removeAttribute('blue')
            button.setAttribute('class', 'red')
            break
    }
})