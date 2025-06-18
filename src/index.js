import { greeting } from "./greeting.js";
import "./styles/style.css";

/*
 S S S S S S
 V F F F F F  
 */

function next() {
  const slides = document.querySelectorAll(".slide");
  let flag = false;
  for (let i = 0; i < slides.length; i++) {
    if (
      i == slides.length - 1 &&
      flag != true &&
      slides[i].dataset.visible === "true"
    )
      break;

    if (flag != true && slides[i].dataset.visible === "true") {
      flag = true;
      slides[i].dataset.visible = "false";
      slides[i].classList.remove("visible");
      slides[i].classList.add("invisible");
      slides[i + 1].dataset.visible = "true";
      slides[i + 1].classList.remove("invisible");
      slides[i + 1].classList.add("visible");
    }
  }
}

function previous() {
  const slides = document.querySelectorAll(".slide");
  let flag = false;
  for (let i = slides.length - 1; i >= 0; i--) {
    if (i == 0 && flag != true && slides[i].dataset.visible === "true") break;

    if (flag != true && slides[i].dataset.visible === "true") {
      flag = true;
      slides[i].dataset.visible = "false";
      slides[i].classList.remove("visible");
      slides[i].classList.add("invisible");
      slides[i - 1].dataset.visible = "true";
      slides[i - 1].classList.remove("invisible");
      slides[i - 1].classList.add("visible");
    }
  }
}

const nextButton = document.querySelector("#right-arrow");
nextButton.addEventListener("click", next);

const previousButton = document.querySelector("#left-arrow");
previousButton.addEventListener("click", previous);

function getVisibleSlidesCount() {
  let currentScreenSize = window.innerWidth;
  if (currentScreenSize > 1000) {
    return 3;
  } else if (currentScreenSize <= 999 && currentScreenSize > 513) {
    return 2;
  } else {
    return 1;
  }
}
