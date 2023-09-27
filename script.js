"use strict";
const navList = document.querySelector(".nav-list");
const body = document.body;
const navItems = document.querySelector(".overlay");
navList.addEventListener("click", function () {
  navItems.classList.toggle("hidden");
  // body.style.filter = "blur(20px)";
  // this.style.zIndex = ;
});
body.addEventListener("click", function (event) {
  const target = event.target;
  if (
    target.classList.contains("nav-list") ||
    target.classList.contains("overlay") ||
    target.classList.contains("nav-item-overlay")
  )
    return;
  navItems.classList.add("hidden");
});
