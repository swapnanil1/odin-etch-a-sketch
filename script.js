const btn = document.querySelector("button");
let container = document.querySelector("#container");
let config = undefined;
btn.addEventListener("click", () => {
  config = parseInt(prompt("Enter any number from 0 to 16"));
  if (isNaN(config) || config < 0 || config > 16) {
    return alert("Enter Valid Ratio");
  } else {
    sketchPad(config);
  }
  const listOfBox = container.childNodes;
  listOfBox.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`; // Math.random() * 256 always return value less than 255
    });
  });
});
function sketchPad(config) {
  container.textContent = ""; // clear before draw
  for (let i = 0; i < config; i++) {
    for (let j = 0; j < config; j++) {
      const div = document.createElement("div");
      div.setAttribute("class", "cubes");
      let boxSize = 100 / config; // If the size of the area is 100 what percentage should each box get to fill
      div.style.height = `calc(${boxSize}%)- 5px`; // i hate css. really to make it fit we need to substact a few pix ? wth man :( | Then again this is not the intended way of using grids in css
      div.style.width = `calc(${boxSize}% - 5px)`;
      container.appendChild(div);
    }
    // container.appendChild(document.createElement("p"));
  }
}
