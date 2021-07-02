const buttonJS = document.querySelector(".card-button");

const answer = document.querySelector(".Card-answer");

buttonJS.addEventListener("click", () => {
  answer.classList.toggle("Card-answer_hidden");
});
