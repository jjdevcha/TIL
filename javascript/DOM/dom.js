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
// let newDiv = document.createElement('div');
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// //Add attribute
// newDiv.setAttribute('title', 'Hello Div');


// let newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';


// EVENTS

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#FFC0CB';
//     // console.log(e);

//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // type of event
//     // console.log(e.type);

//     // console.log(e.clientX);

//     // From actual element
//     // console.log(e.offsetX);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// Active to inner element as well 
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);

    // document.body.style.display = 'none';

    // console.log(e.target.value);

    // document.getElementById('output').innerHTML = `<h3> ${e.target.value} </h3>`;

    // output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY + '</h3>';

    // box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)';
}