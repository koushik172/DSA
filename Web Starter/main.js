let items = document.getElementsByClassName('list-group-item');

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#e8f8f8';
}

items[2].style.backgroundColor = "green";

let list = document.getElementById('items');

var childElement = document.createElement("li");
childElement.className = "childClass";

list.appendChild(childElement);

childElement = document.getElementsByClassName('childClass');
childElement[0].textContent = "Item 5";

childElement = document.getElementsByTagName("li")

childElement[4].classList.add("list-group-item");
childElement[4].style.backgroundColor = '#111';
childElement[4].style.color = 'white';