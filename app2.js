const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

function sayHello() {
    console.log('hello');
}

btn.addEventListener('click', () => {
    const element = document.createElement('h1');
    element.classList.add('heading')
    element.textContent = "im inside the container too"
    container.appendChild(element)
})

container.addEventListener('click', (event) => {
    if(event.target.classList.contains('heading')){
        console.log('hello');
    }
})

// Dynamically created content can be targeted by catching the event bubbling on the nearest static content box