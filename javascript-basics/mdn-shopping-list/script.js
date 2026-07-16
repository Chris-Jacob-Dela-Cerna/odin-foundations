const textField = document.getElementById("field"),
      addButton = document.getElementById("add"),
      list = document.getElementById("list");

textField.focus()

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const itemName = textField.value,
        name = document.createElement("span");
  name.textContent = itemName;
  textField.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", (event) => {
    list.removeChild(event.target.parentElement)
  });

  const item = document.createElement("li");
  item.appendChild(name);
  item.appendChild(deleteButton);
  list.appendChild(item);
});