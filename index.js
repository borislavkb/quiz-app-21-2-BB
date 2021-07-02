const buttonJS = document.querySelectorAll(".card-button");

const answer = document.querySelector(".Card-answer");

buttonJS.addEventListener("click", () => {
  answer.classList.toggle("Card-answer_hidden");
  if (buttonJS.textContent === "Show answer") {
    buttonJS.textContent = "Hide answer";
  } else {
    buttonJS.textContent = "Show answer";
  }
});
