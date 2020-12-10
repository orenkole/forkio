"use strict";

// Menu button:

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");
const menuBtnLines = document.getElementById("menuBtnLn");
const menuBtnCross = document.getElementById("menuBtnCross");

menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("navigation--active");
  menuBtnLines.classList.toggle("menu-button__lines--active");
  menuBtnCross.classList.toggle("menu-button__cross--active");
});
