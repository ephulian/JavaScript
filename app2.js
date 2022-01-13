const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-2');

btn.addEventListener('click', () => {
	addColor(1000, one, 'blue').then(() =>
		addColor(1000, two, 'purple').then(() =>
			addColor(1000, three, 'lightgreen')
		)
	);
});

function addColor(time, element, color) {
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
			}, time);
		} else {
			reject(new Error(`No such element ${element}`));
		}
	});
}
