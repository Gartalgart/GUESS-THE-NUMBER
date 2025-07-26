import { createParagraph, createButton } from "./utils";

//CONSTANTS
export const app = document.getElementById("app");
let attempts = 0; //Un let ne peut pas être exporté

//Les 2 fonctions suivantes permettes de pouvoir export attempts sans qu'elle soit considéré comme une constante.
//getAttempts pour afficher attempts
export const getAttempts = () => {
  return attempts;
};
//incrementAttempts pour incrementer attempts.
export const incrementAttempts = () => {
  attempts++;
};

export const randomNumber = Math.floor(Math.random() * 500);

//PAGE D'ACCUEIL
export const startText = createParagraph(
  "startText",
  "The application will generate a random number, and your\n task is to find it in as few attempts as possible."
);
export const startBtn = createButton("startBtn", "Start");

//ZONE DE JEU
export const sentence = createParagraph(
  "sentence",
  "I generated a number between 0 and 500, try to find it 😆"
);
export const score = createParagraph("score", `Attempts: ${attempts}`);
export const gameText = createParagraph("gameText", "");
export const inputRange = document.createElement("input");
inputRange.id = "inputRange";

//FORMULAIRE
export const inputSubmitForm = document.createElement("form");
inputSubmitForm.id = "inputSubmitForm";

export const labelInput = document.createElement("label");
labelInput.innerText = "Your guess";

export const inputNumber = document.createElement("input");
inputNumber.id = "inputNumber";
inputNumber.placeholder = "Tape a number";

export const submitBtn = createButton("submitBtn", "Submit");

//appendChild() permet d'ajouter un seule élément alors que append() permet d'en ajouter plusieurs
labelInput.appendChild(inputNumber);
inputSubmitForm.append(labelInput, submitBtn);
