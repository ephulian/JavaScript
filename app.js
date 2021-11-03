// Function declaration - can be called even if it has been declared later in the code (hoisted)
function add(a, b){
    return a + b;
};

const added = add(2, 2);
console.log(added);


// Function expression (unnamed funct) - can only be called after declaration (not hoisted)
const subtract = function(a, b){
    return a - b
};

const subtracted = subtract(4, 2)
console.log(subtracted);


// Immediately invocable function expression (function(p1, p2){set task/return;}(a1, a2))
(function(){
    console.log('IIFE');
})();

(function(a, b){
    return console.log(a+b);
}(4, 6));

let subtracted2 = (function(a, b){return a - b}(4, 2));
console.log(subtracted2);


// Parameters and Arguments - Positional
function makeBreakfast(main, side, drink) {
    return `Breakfast includes ${main}, ${side}, ${drink}`;
}

const breakfast = makeBreakfast('eggs', 'chips', 'latte');
console.log(breakfast);


// Parameters and Arguments - Named
function makeLunch(opts) {
    const {main, side, drink} = opts;
    return `Lunch includes ${main}, ${side}, ${drink}`
}

const lunch = makeLunch({main:'food', side:'chips', drink:'water'})
console.log(lunch);


// Parameters and Arguments - Rest
function makeDinner(...args) {
    return `Dinner includes ${args.join()}`
}
const dinner = makeDinner('sheep', 'lost', 'unwanted', 'twins', 'stinky');
console.log(dinner);


// Arrow syntax
const makeBeer = function(qty){
    return 'beer '.repeat(qty);
}
console.log(makeBeer(6));

const makeWine = (qty) => {return 'wine '.repeat(qty)};
console.log(makeWine(6))

// --- variable -- take this --- do this ---
const anotherAdder = (a, b) => {return a + b};
console.log(anotherAdder(4, 6))