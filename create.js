const formCreate = document.querySelector("form");

console.log(formCreate["Question-area"]);
console.log(formCreate["Question-answer-area"]);
console.log(formCreate["Tags-area"]);

formCreate.addEventListener("submit", (event) => {
  event.preventDefault();

  const createQuestion = formCreate["Question-area"].value;
  const createAnswer = formCreate["Question-answer-area"].value;
  const createTags = formCreate["Tags-area"].value;

  console.log(createQuestion);
  console.log(createAnswer);
  console.log(createTags);

  formCreate.reset();
});
