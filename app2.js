const john = {
    name:'john',
    age:24,
}

const susan = {
    name:'susan',
    age: 21,
}

function greet(city, country){
        console.log(this);
        console.log(`hello im ${this.name} and ${this.age} old and I'm in ${city}, ${country}`);
    }
// john.greet()

// first argument for .call and .apply method is - the value to be represented by this keyword
// apply is the same but it take the arguments as an array

// example Prototype.apply(this, [arg1, arg2, arg3])
greet.apply(susan, ['san-diego', 'us'])
greet.apply(john)
greet.apply({name: 'peterosk', age: 42})

// first argument is 'this' pointer and all other are list of arguments 

// example Prototype.apply(this, arg1, arg2, arg3)
greet.call(susan, 'san-diego', 'us')
greet.call(john)
greet.call({name: 'peterosk', age: 42})