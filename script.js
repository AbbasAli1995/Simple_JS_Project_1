// Selecting the elements
const btn = document.querySelector("#btn");
const colors = ["red", "green", "blue", "indigo", "cyan"];

// Adding event to the button to change the predefined colors

btn.addEventListener("click", changeColor);
function changeColor() {
  const randomNum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNum];
  console.log(randomNum);
}
