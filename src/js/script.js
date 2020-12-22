"use strict";

// Menu button:

const btnMenu = document.getElementById("menuBtn");
const menu = document.getElementById("navigation");
const menuBtnLines = document.getElementById("menuBtnLn");
const menuBtnCross = document.getElementById("menuBtnCross");

const toggleMenu = function () {
  navigation.classList.toggle("navigation--active");
  menuBtnLines.classList.toggle("menu-button__lines--active");
  menuBtnCross.classList.toggle("menu-button__cross--active");
};

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains("navigation--active");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

// Menu button (old version):

// const menuBtn = document.getElementById("menuBtn");
// const navigation = document.getElementById("navigation");
// const menuBtnLines = document.getElementById("menuBtnLn");
// const menuBtnCross = document.getElementById("menuBtnCross");

// menuBtn.addEventListener("click", function () {
//   navigation.classList.toggle("navigation--active");
//   menuBtnLines.classList.toggle("menu-button__lines--active");
//   menuBtnCross.classList.toggle("menu-button__cross--active");
// });

// document.body.addEventListener("click", function (e) {
//   if (
//     navigation.classList.contains("navigation--active") &&
//     !e.target.classList.contains("navigation__item") &&
//     !e.target.classList.contains("navigation__link") &&
//     !e.target.classList.contains("navigation__item-wrapper") &&
//     !e.target.classList.contains("menu-button") &&
//     !e.target.classList.contains("menu-button__lines")
//   ) {
//     navigation.classList.toggle("navigation--active");
//     menuBtnLines.classList.toggle("menu-button__lines--active");
//     menuBtnCross.classList.toggle("menu-button__cross--active");
//   }
// });
