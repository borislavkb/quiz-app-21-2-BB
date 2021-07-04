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
const navigation = document.querySelector(".navbar");

buttonTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  navigation.classList.toggle("dark-mode-nav");
});

const formCreate = document.querySelector(".Form_Question");

formCreate.addEventListener("submit", (event) => {
  event.preventDefault();

  const createQuestion = formCreate.question.value;
  const createAnswer = formCreate.Answer.value;
  const createTags = formCreate.Tags.value;

  console.log(createQuestion);
  console.log(createAnswer);
  console.log(createTags);

  formCreate.reset();
});
