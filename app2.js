const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-2');

btn.addEventListener('click', () => {
	console.log(loadImage(url));
	loadImage(url)
		.then((data) => {
			container.appendChild(data);
		})
		.catch(error);
});

function loadImage(url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.addEventListener('load', () => {
			return resolve(img);
		});
		img.addEventListener('error', () => {
			return reject(new Error(`Failed to load image from the ${url}`));
		});
		img.src = url;
	});
}
