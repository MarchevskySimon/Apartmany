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
    section.style.paddingBottom = "2rem";
    boolSection = Boolean(true);
  } else {
    section.style.height = "0";
    section.style.paddingBottom = "0";
    boolSection = Boolean(false);
  }
});

/*
 * Gallery slider
 */

let galleryImage = document.getElementsByClassName("gallery-img");
let imgWidth = galleryImage[0].offsetWidth;

const slider = document.getElementsByClassName("slider-wrapper");
const arrowRight = document.getElementsByClassName("right-arrow");
const arrowLeft = document.getElementsByClassName("left-arrow");

for (let i = 0; i < arrowRight.length; i++) {
  arrowRight[i].addEventListener("click", function () {
    if (arrowRight[i].parentElement.parentElement.className === "suk-dom") {
      slider[0].scrollLeft += imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[1].scrollLeft += imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[2].scrollLeft += imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[3].scrollLeft += imgWidth;
    } else {
      slider[4].scrollLeft += imgWidth;
    }
  });
}

for (let i = 0; i < arrowLeft.length; i++) {
  arrowLeft[i].addEventListener("click", function () {
    if (arrowLeft[i].parentElement.parentElement.className === "suk-dom") {
      slider[0].scrollLeft -= imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[1].scrollLeft -= imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[2].scrollLeft -= imgWidth;
    }
    if (arrowRight[i].parentElement.parentElement.className === "leyla") {
      slider[3].scrollLeft -= imgWidth;
    } else {
      slider[4].scrollLeft -= imgWidth;
    }
  });
}
