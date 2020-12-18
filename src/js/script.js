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

document.body.addEventListener("click", function (e) {
  if (
    navigation.classList.contains("navigation--active") &&
    !e.target.classList.contains("navigation__item") &&
    !e.target.classList.contains("navigation__link") &&
    !e.target.classList.contains("navigation__item-wrapper") &&
    !e.target.classList.contains("menu-button") &&
    !e.target.classList.contains("menu-button__lines")
  ) {
    console.log(e.target);

    navigation.classList.toggle("navigation--active");
    menuBtnLines.classList.toggle("menu-button__lines--active");
    menuBtnCross.classList.toggle("menu-button__cross--active");
  }
});
