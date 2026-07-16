const input = document.querySelector("#item"),
      enter = document.querySelector("button"),
      ul = document.querySelector("ul");
enter.addEventListener("click", (event) => {
  event.preventDefault()
  const item = input.value
  input.value = ""
  const li = document.createElement("li"),
        span = document.createElement("span"),
        del = document.createElement("button");
  li.appendChild(span)
  li.appendChild(del)
  span.textContent = item
  del.textContent = "Delete"
  ul.appendChild(li)
});