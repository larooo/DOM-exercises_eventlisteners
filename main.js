let image = document.querySelector("img");
let button = document.querySelector("button");
button.addEventListener("click", function clickButton() {
  image.style.border = "thick solid #0000FF";
  image.style.padding = "5px";
  image.style.filter = "grayscale(100%)";
});

// let circ = document.getElementsByClassName("circle");
let circ = document.querySelector(".circle");
let section = document.querySelector("mouse");
document.addEventListener("mousemove", move);
function move() {
  circ.style.top = event.pageY + "px";
  // circ.style.left = `${event.pageY}px`;
  circ.style.left = event.pageX + "px";
}

//------------------------------------------
let btnW = document.querySelector(".keys button:nth-child(1)");
let btnA = document.querySelector(".keys button:nth-child(2)");
let btnS = document.querySelector(".keys button:nth-child(3)");
let btnD = document.querySelector(".keys button:nth-child(4)");
let btnWColor = false;
let btnAColor = false;
let btnSColor = false;
let btnDColor = false;

document.addEventListener("keypress", function(e) {
  if (e.code == "KeyW" && !btnWColor) {
    btnW.style.color = "red";
    btnWColor = !btnWColor;
  } else {
    btnW.style.color = "black";
    btnWColor = !btnWColor;
  }
  if (e.code == "KeyA" && !btnAColor) {
    btnA.style.color = "red";
    btnAColor = !btnAColor;
  } else {
    btnA.style.color = "black";
    btnAColor = !btnAColor;
  }
  if (e.code == "KeyS" && !btnSColor) {
    btnS.style.color = "red";
    btnSColor = !btnSColor;
  } else {
    btnS.style.color = "black";
    btnSColor = !btnSColor;
  }
  if (e.code == "KeyD" && !btnDColor) {
    btnD.style.color = "red";
    btnDColor = !btnDColor;
  } else {
    btnD.style.color = "black";
    btnDColor = !btnDColor;
  }
});
