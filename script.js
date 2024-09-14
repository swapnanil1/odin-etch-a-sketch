const btn = document.querySelector("button");
let config = undefined;
btn.addEventListener("click", () => {
  config = parseInt(prompt("Enter Grid Ratio"));
  if (isNaN(config) || config < 0 || config >= 100) {
    alert("Enter Valid Ratio");
  } else {
    sketchPad(config);
  }
});
function sketchPad(config) {
  let container = document.querySelector("#container");
  container.textContent = ""; // clear before draw
  for (let i = 0; i < config; i++) {
    for (let j = 0; j < config; j++) {
      const div = document.createElement("div");
      div.setAttribute("id", "cubes");
      let boxSize = 100 / config;
      div.style.height = `calc(${boxSize}%)- 10px`; // i hate css. really to make it work we need to substact a few pix ? wth man
      div.style.width = `calc(${boxSize}% - 10px)`;
      container.appendChild(div);
    }
    // container.appendChild(document.createElement("p"));
  }
}
