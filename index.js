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

const buttonTheme = document.querySelector(".dark-theme-switch");
const body = document.querySelector(".outer-grid");
const navigation = document.querySelector(".navbar");

buttonTheme.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  navigation.classList.toggle("dark-mode-nav");
});
