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

let titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'Coral';
}