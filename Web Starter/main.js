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

list = document.querySelectorAll('.list-group-item');
list[1].style.backgroundColor = 'green';
list[1].style.color = 'green';
list[2].style.opacity = '0';

let odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
console.log(odd);