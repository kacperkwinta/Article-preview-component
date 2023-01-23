"use strict";

console.log("hi mom");

// popup desktop
const popupWindow = document.querySelector(".popup-window");
// popup mobile
const popupMobileWindow = document.querySelector(".popup-window-mobile");
// container with profile info
const container = document.querySelector(".container");
// share icon
const shareIcon = document.querySelector(".share-icon");

function popupDesktopShow() {
  popupWindow.classList.toggle("hidden");
  if (screen.width <= 700) {
    container.classList.toggle("hidden");
    shareIcon.classList.toggle("hidden");
    popupMobileWindow.classList.toggle("hidden");
  }
}

function popupMobileShow() {
  container.classList.toggle("hidden");
  shareIcon.classList.toggle("hidden");
  popupMobileWindow.classList.toggle("hidden");
}
