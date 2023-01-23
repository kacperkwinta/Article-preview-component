"use strict";

console.log("hi mom");

// selecting elements
const popupWindow = document.querySelector(".popup-window");

function popupShow() {
  popupWindow.classList.toggle("hidden");
}

if (screen.width <= 700) {
  console.log("lol");
}
