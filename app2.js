const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-2');

btn.addEventListener('click', () => {
	// console.log('you clicked BTN');
	setTimeout(() => {
		one.style.color = 'red';
		setTimeout(() => {
			two.style.color = 'green';
			setTimeout(() => {
				three.style.color = 'blue';
			}, 1000);
		}, 1000);
	}, 1000);
});

btn2.addEventListener('click', () => {
	one.style.color = 'black';
	two.style.color = 'black';
	three.style.color = 'black';
});

console.log(`im second`);
