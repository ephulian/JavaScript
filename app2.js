const countriesAPI = 'https://restcountries.com/v3.1/all';

async function allCountriesAPI(url) {
	try {
		const countries = await fetch(url);
		const response = await countries.json();

		return response;
	} catch (e) {
		console.log(e);
	}

	// return response;
}

const myData = await allCountriesAPI(countriesAPI);

const byPopulation = (a, b) => {
	return parseInt(a.population) - parseInt(b.population);
};

const armenia = myData.find((country) => country.name.common == 'Armenia');

const countriesByPopulation = myData.sort(byPopulation).reverse();

console.log(myData);
console.log(armenia);
