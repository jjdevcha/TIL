let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Add event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    // Get Input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let delBtn = document.createElement('button');
    // Add classes to del button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    delBtn.appendChild(document.createTextNode('X'));

    // Append btn to li
    li.appendChild(delBtn);

    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}