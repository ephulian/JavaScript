const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.open('GET', './api.sample.txt');
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log('done');
	} else {
		console.log({
			status: xhr.status,
			text: xhr.statusText,
		});
	}
};
