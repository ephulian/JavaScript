const heading = document.querySelector('h2')

heading.addEventListener('click', e => {
    console.log(e);
    e.currentTarget.classList.contains('blue') ? e.currentTarget.classList.remove('blue') : e.currentTarget.classList.add('blue')
    e.offsetX
    console.log(e.offsetX);
})

// currentTarget selects the element which invoked the event