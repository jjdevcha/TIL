// Built-in funciton constructor
// new String(), new Number
// It is not a primitive type. It is an object

let num1 = new Number(3); // object number
let num2 = 3 // primitive number

console.log(num1 == num2) //true, because == coerce type
console.log(num1 === num2) // false, because === has to be equal with content and type

String.prototype.lengthLimit = function(limit) {
    if(this.length > limit) return true;
    return false;
}

console.log("John".lengthLimit(3));
console.log("John".lengthLimit(5));

Number.prototype.biggerThan = function(limit) {
    if(this > limit) return true;
    return false;
}

// You have to set a new variable for new Number
// because for example 3.biggerThan doesn't work
// Js doesn't automatically changes the number type

let a = new Number(3);
console.log(a.biggerThan(2));

// You should not use for..in with Array
Array.prototype.mingle = 'cool!';

let arr = ['apple','banana', 'crow'];

for(let prop in arr) {
    console.log(`${prop}: ${arr[prop]}`);
}
// for..in does work but you shouldn't use it 
//0: apple
//1: banana
//2: crow
// because if you add a prototype to the Array, the result will be

/*
//0: apple
//1: banana
//2: crow
//mingle: cool!
 */

 //Object.create (Object inheritance)

 var person = {
     first: 'default',
     last: 'default',
     greet: function() {
         console.log(`hi ${this.first}`);
     }
 }

 var john = Object.create(person);
 john.first = "John";
 john.last = "Doe";
 john.greet();
 person.greet();

 // Polyfill : Code that adds a feature which the engine may lack
if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error(`Object.create implementation only accepts the 1st parameter`);
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

//systactic sugar: A different way to type sth that doesn't change how it works under the hood
// class in JS (prototype)

// ES6 version to make object inheritance
class Person1 {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    greet() {
        console.log(`Hi ${this.first}`);
    }
}

let josh = new Person1('Josh','Costa');
josh.greet();


// how to inherit? 

class Animal extends Person1 {
    constructor(first, last) {
        super(first, last);
    }

    
}

let bebe = new Animal('Bebe', 'Cha');
bebe.greet();