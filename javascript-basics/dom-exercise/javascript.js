const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redText = document.createElement("p");
redText.style["color"] = "red"
redText.textContent = "Hey I'm red!"
container.appendChild(redText)

const blueH3 = document.createElement("h3");
blueH3.style["color"] = "blue"
blueH3.textContent = "I'm a blue h3!"
container.appendChild(blueH3)