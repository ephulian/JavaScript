const foo = function(){};

// console.log(foo.call);

const john = {
    name:'john',
    age:24,
    greet: function(){
        console.log(this);
        console.log(`hello im ${this.name} and ${this.age} old`);
    }
}

const susan = {
    name:'susan',
    age: 21,
}

const greet = function(){
        console.log(this);
        console.log(`hello im ${this.name} and ${this.age} old`);
    }
// john.greet()

// first argument for .call method is - the value to be represented by this keyword
greet.call(susan)
greet.call(john)

// here secondGreet is mapped to greet function itself which in turn targets the current context because of 'this'


// by moving it into the new variable and using .call with susan as 'this' the context now is susan
const secondGreet = john.greet
secondGreet.call(susan)