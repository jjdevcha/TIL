// Destructuring Object

// const personalInfo = {
//     firstName : 'JungIn',
//     lastName : 'Cha',
//     city: 'Brisbane',
//     state: 'QLD',
//     zipCode: 4012
// };

// const {firstName: fn, lastName: ln} = personalInfo;

// Destructuring Array
// let [firstName, aka, lastName] = ['JungIn', 'code witch', 'Cha'];

// aka = 'sewing witch';

// Object Literal
// function addressMaker(city, state) {
//     const newAddress = {city, state};

//     console.log(newAddress);
// }

// addressMaker('Brisbane', 'Queensland');

// Object Literal Challenge
// function addressMaker(address) {
//     const {city, state} = address;

//     const newAddress = {
//         city,
//         state,
//         country: 'Australia'
//     };

//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
// }

// addressMaker({city: 'Brisbane', state: 'Queensland'});

// For of Loop (literable)

// let incomes = [62000, 67000, 75000];
// let total = 0;
// let fullName = "Jung In Cha";

// for (const char of fullName) {
//     console.log(char);
// }

// For of Loop Challenge
// let incomes = [62000, 67000, 75000];

// for (let income of incomes) {
//     income += 5000;
//     console.log(income);
// }

// console.log(incomes);

// Spread Operator
// let example1 = [1, 2, 3, 4, 5, 6];
// let example2 = [...example1];
// example2.push(true);

// console.log(example2);

// Rest Operator
// function add(...nums) {
//     console.log(nums);
// }

// add(4, 5, 6, 7);

// Arrow Function
// function add(...nums) {
//     let total = nums.reduce((x, y) => x + y);
//     console.log(total);
// }

// add(4, 5, 6, 7);

// Default Parameters
// function add(numArray = []) {
//     let total = 0;
//     numArray.forEach((element) => {
//         total =+ element;
//     });

//     console.log(total);
// }

// add();

// Includes()
// let  numArray = [1, 2, 3, 4, 5];
// console.log(numArray.includes(2));

// Import & Export
// import { data } from './example.js';
// let updatedData = data;

// updatedData.push(5);
// console.log(updatedData);

// padStart() & padEnd()

// let example = "JungIn";
// console.log(example.padStart(10, 'a'));
// console.log(example.padEnd(10, 'a'));

// Classes
import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

// cat.legs = 3;

// console.log(cat.legs);
cat.makeNoise();
// cat.makeNoise('Meow');

console.log(cat.metaData);

// console.log(Animal.return10());

