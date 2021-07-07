/* Shape of cardData parameter
{
    id: 0,
    question: "What type of a language is HTML?",
    answer: "Markup Language",
    isBookmarked: true,
    tags: ["HTML", "general"],
  },*/

// Card:

export function createCardComponent(cardData) {
  //Section
  const section = createSection();

  //Heading

  const headingElement = createHeading(cardData);

  const pElement = createAnswer(cardData);

  const tagsItemsListElement = createtagsItemsListElement(cardData);

  section.append(headingElement);
  section.append(pElement);
  section.append(tagsItemsListElement);

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
