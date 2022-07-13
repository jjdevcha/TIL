// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.innerText = 'Bye';

// headerTitle.innerHTML = '<h3>Hello</h3>';

// header.style.borderBottom = 'Solid 3px #000';

// GET ELEMENTS BY CLASS NAME //

// let items = document.getElementsByClassName('list-group-item');

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'yellow';
// }

// Query Selector

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// Query Selector All

// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'Coral';
// }


// DOM part 2 
let itemList = document.querySelector('#items');

// // parent Node
// console.log(itemList.parentNode)

// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
// console.log(itemList.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// itemList.lastElementChild.textContent = 'Bye 4';

// next Sibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// Create a Div
let newDiv = document.createElement('div');
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello Div');


let newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';