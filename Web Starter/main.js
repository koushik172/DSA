var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
// Edit event
itemList.addEventListener("click", editItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  li.name = name;
  // Add text node with input value
  li.appendChild(document.createTextNode(name + " - " + email + " - " + phone));
  let obj = { name: name, email: email, phone: phone };
  localStorage.setItem(name, JSON.stringify(obj));
  // let data = JSON.parse(localStorage.getItem(newItem1));

  // Create del button element
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  editBtn.className = "btn btn-primary btn-sm float-right edit";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("🗑️"));
  editBtn.appendChild(document.createTextNode("✏️"));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("phone").value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem(li.name);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Edit Items
function editItem(e) {
  if (e.target.classList.contains("edit")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      let data = JSON.parse(localStorage.getItem(li.name));
      localStorage.removeItem(data.name);
      document.getElementById("name").value = data.name;
      document.getElementById("email").value = data.email;
      document.getElementById("phone").value = data.phone;
      itemList.removeChild(li);
    }
  }
}
