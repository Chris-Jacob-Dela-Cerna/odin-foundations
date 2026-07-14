const btn = document.querySelector("#btn")
btn.onclick = () => alert("Hello there!")
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue"
})

const bttn = document.querySelector("#bttn")
bttn.addEventListener("click", () => alert("Hello there!"))