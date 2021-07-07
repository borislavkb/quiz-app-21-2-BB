import * as myDB from "./lib/db.js";
import { createCardComponent } from "./lib/card.js";

const cardAnswer = document.querySelectorAll(".Card-answer");

const buttonShow = document.querySelectorAll("button");

for (let b = 0; b < buttonShow.length; b++) {
  buttonShow[b].addEventListener("click", () => {
    cardAnswer[b].classList.toggle("Card-answer_hidden");
    if (buttonShow.textContent === "Show answer") {
      buttonShow.textContent = "Hide answer";
    } else {
      buttonShow.textContent = "Show answer";
    }
  });
}
