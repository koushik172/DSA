// parentElement
var childElement = document.getElementById('items');
var parentElement = childElement.parentElement;
console.log(parentElement);

// lastchild
lastChild = parentElement.lastChild;
console.log(lastChild);

// lastelementchild
var lastChild = parentElement.lastElementChild;
lastChild.style.color = "green";
console.log(lastChild);

// createElement
var newElement = document.createElement('li');

// firstchild
firstChild = parentElement.firstChild;
console.log(firstChild);

// firstElementChild
var firstChild = parentElement.firstElementChild;
firstChild.style.color = 'gray';
console.log(firstChild);

// nextSibling
var nextSibling = childElement.nextSibling;
console.log(nextSibling);

// nextElementSibling
var nextElementSibling = firstChild.nextElementSibling;
console.log(nextElementSibling);

// previousSibling
var previousSibling = childElement.previousSibling;
console.log(previousSibling);

// previousElementSibling
var previousElementSibling = childElement.previousElementSibling;
console.log(previousElementSibling);

// setAttribute
newElement.setAttribute('class', 'list-group-item');

// createTextNode
var textNode = document.createTextNode('Item 5');

// appendChild
newElement.appendChild(textNode);
lastChild.appendChild(newElement);
console.log(lastChild);
