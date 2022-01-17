// Function declaration - HOISTED
function makeBread(qty) {
	return 'bread '.repeat(qty);
}

makeBread(6);

// Function expression - NOT HOISTED
const makeCake = function (qty) {
	return 'cake '.repeat(qty);
};

makeCake(6);

// Arrow function expression
const makeKefir = (qty) => 'kefir '.repeat(qty);

makeKefir(6);

// IIFE == 'Immediately invoked function expressions'
(() => {
	return 'bread '.repeat(6);
})();

((a, b) => {
	return a + b;
})(2, 2);

// Closures and higher order functions
function outer() {
	const private = 'secret';
	console.log('this is outside');
	function inner() {
		console.log('this is inside');
		console.log(`the variable is ${private}`);
	}
	return inner;
}

const innerFunct = outer(); // save the return statement for outside to a variable
innerFunct(); // invoke the return statement for outer

outer()(); // first one invokes 'outer' which returns 'inner' that is invoked with 2nd ()

// Return as objects to create methods
function newAccount(name, innitailBalance) {
	let balance = innitailBalance; // not referred to the return statement object - hence not accessable from outside

	function showBalance() {
		console.log(`Hey! My name is ${name} and I have ${balance} dollars`);
	}
	function withdraw(amount) {
		balance -= amount;
		showBalance();
	}
	function deposit(amount) {
		balance += amount;
		showBalance();
	}
	return {
		showBalance: showBalance,
		withdraw: withdraw,
		deposit: deposit,
	};
}

const john = newAccount('john', 500);
const peter = newAccount('peter', 250);

john.withdraw(200);
peter.showBalance();
