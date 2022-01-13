const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn-2');

// Set-up a promise object with resolve and reject options
// Inside Promise object create some functionality
// Depending on the outcome of said functionality set an output value
// resolve for promise functionality fullfilled
// reject for promise functionality unfullfilled

const promise = new Promise((resolve, reject) => {
	let value = false; // functionality
	if (value) {
		resolve([1, 2, 3]); // returns for .then
	} else {
		reject(() => {
			// returns for .catch
			console.log('this is called now');
		});
	}
});

// Run the promise functionality
// If 'resolved' run .then
// If 'rejected' run .catch

promise
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});
