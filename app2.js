// this points to the left of dot

const john = {
    firstName: 'Kiril',
    lastName: 'Komitski',
    fullName: function(){
        // console.log(`My full name is Kiril Komitski`);
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

// this does NOT work with arrow syntax
const bob = {
    firstName: 'Bob',
    lastName: 'Builder',
    fullName: ()=> {
        // console.log(`My full name is Bob Builder`);
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

john.fullName();
// bob.fullName();