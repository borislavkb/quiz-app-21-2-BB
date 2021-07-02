const buttonJS = document.querySelectorAll(".card-button");

const answer = document.querySelectorAll(".Card-answer");

for (let i = 0; i < buttonJS.length; i++) {
  buttonJS[i].addEventListener("click", () => {
    answer[i].classList.toggle("Card-answer_hidden");
    if (buttonJS[i].textContent === "Show answer") {
      buttonJS[i].textContent = "Hide answer";
    } else {
      buttonJS[i].textContent = "Show answer";
    }
  });
}

const buttonTheme = document.querySelector(".dark-theme-button");
const body = document.querySelector(".outer-grid");
buttonTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
