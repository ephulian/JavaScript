// Arrow function refers to parent score (bob object scope here)
const bob = {
	name: 'bob',
	age: 23,
	sayName: function () {
		setTimeout(() => {
			console.log(`My name is ${this.name} and I am ${this.age} years old`);
		}, 1000);
	},
};

// Regular function expression refers to current scope (sayName function here)
const mary = {
	name: 'mary',
	age: 26,
	sayName: function () {
		const self = this; // can bind to variable and drop in next scope
		setTimeout(function () {
			console.log(`My name is ${self.name} and I am ${self.age} years old`);
		}, 1000);
	},
};

bob.sayName();
mary.sayName();
