/* Shape of cardData parameter
{
    id: 0,
    question: "What type of a language is HTML?",
    answer: "Markup Language",
    isBookmarked: true,
    tags: ["HTML", "general"],
  },*/

import { data } from "./db.js";

// Card:

export function createCardComponent(cardData) {
  //Section
  const section = createSection();

  //Heading - question

  const headingElement = createHeading(cardData);
  //Answer
  const pElement = createAnswer(cardData);
  //Tags - li elements in a ul element
  const tagsList = createtagsItemsListElement(cardData);

  //Button on card

  const cardButton = createCardButton();
  cardButton.addEventListener("click", () => {
    pElement.classList.toggle("Card-answer_hidden");
    if (cardButton.textContent === "Show answer") {
      cardButton.textContent = "Hide answer";
    } else {
      cardButton.textContent = "Show answer";
    }
  });

  //Bokmark on card

  //Append elements
  section.append(headingElement);
  section.append(pElement);
  section.append(tagsList);
  section.append(cardButton);

  return section;
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("Card");
  return section;
}

function createHeading(cardData) {
  const headingElement = document.createElement("h2");
  headingElement.textContent = cardData.question;
  headingElement.classList.add("Card-question");
  return headingElement;
}

function createAnswer(cardData) {
  const pElement = document.createElement("p");
  pElement.textContent = cardData.answer;
  pElement.classList.add("Card-answer");
  return pElement;
}

function createtagsItemsListElement(cardData) {
  const ulElement = document.createElement("ul");
  ulElement.classList.add("tags");

  const tagsArray = cardData.tags.map((tags) => {
    const tagElement = document.createElement("li");
    tagElement.textContent = tags;
    return tagElement;
  });

  tagsArray.forEach((tagElement) => {
    ulElement.append(tagElement);
  });

  return ulElement;
}

function createCardButton(cardData) {
  const button = document.createElement("button");
  button.textContent = "Hide answer";
  button.classList.add("button");

  return button;
}
