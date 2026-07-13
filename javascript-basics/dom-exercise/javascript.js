const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redText = document.createElement("p");
redText.style["color"] = "red";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.style["color"] = "blue";
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border: 2px solid black; background-color: pink");
const plainH1 = document.createElement("h1");
plainH1.textContent = "I'm in a div!";
pinkDiv.appendChild(plainH1);
const plainP = document.createElement("p");
plainP.textContent = "ME TOO!";
pinkDiv.appendChild(plainP);
container.appendChild(pinkDiv);