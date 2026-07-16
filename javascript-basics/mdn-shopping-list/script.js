const textField = document.getElementById("field"),
      addButton = document.getElementById("add"),
      list = document.getElementById("list");

addButton.addEventListener("click", (event) => {
  event.preventDefault()
  const itemName = textField.value
  textField.value = ""
  const item = document.createElement("li"),
        name = document.createElement("span"),
        deleteButton = document.createElement("button");
  item.appendChild(name)
  item.appendChild(deleteButton)
  name.textContent = itemName
  deleteButton.textContent = "Delete"
  list.appendChild(item)
});