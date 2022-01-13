boilWater(5000);
console.log('chop onion');

function boilWater(time) {
	console.log('boiling...');
	setTimeout(() => {
		// setTimeout is a BROWSER function, not JS
		console.log('boiled');
	}, time);
}
