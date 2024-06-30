"use strict";
/*
 * HAMBURGER menu slide
 */

let hamburger = document.getElementById("burger"),
  navMenubox = document.getElementById("navMenubox");

let bool = Boolean(true);

hamburger.addEventListener("click", function () {
  if (bool === true) {
    navMenubox.style.left = "0px";

    bool = Boolean(false);
  } else {
    navMenubox.style.left = "-100%";
    bool = Boolean(true);
  }
});
/* Vsunie sa po kliknuti na link */

var navLinks = navMenubox.querySelectorAll("a"),
  i;

for (i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", function () {
    navMenubox.style.left = "-100%";
    bool = Boolean(true);
  });
}
/* ESC event  */

document.addEventListener("keyup", function (ele) {
  if (ele.keyCode === 27 && bool === false) {
    navMenubox.style.left = "-100%";
    bool = Boolean(true);
  }
});

/*
 * SECTION SCROLL
 */
let boolSection = false;
var section = document.getElementById("sectionText");
var button = document.getElementById("button");

button.addEventListener("click", function () {
  if (boolSection === false) {
    section.style.height = "auto";
    button.style.transform = "rotate(180deg)";
    boolSection = Boolean(true);
  } else {
    section.style.height = "0";
    button.style.transform = "rotate(0)";
    boolSection = Boolean(false);
  }
});
