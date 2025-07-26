import {
  app,
  startBtn,
  sentence,
  score,
  inputSubmitForm,
  submitBtn,
  inputNumber,
  gameText,
  randomNumber,
} from "./elements.js";

import { getAttempts, incrementAttempts } from "./elements.js";

//Fonction qui permet de commencer le jeu
export const attachEvents = () => {
  startBtn.addEventListener("click", () => {
    // permet de remplacer tous les enfants d’un élément HTML par de nouveaux éléments, en une seule opération
    app.replaceChildren(sentence, score, inputSubmitForm);
  });

  //Evenement qui détermine sur la valeur entré en sup inf ou égale au nombre généré aléatoirement
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = Number(inputNumber.value);
    let message = "";
    incrementAttempts();

    if (isNaN(guess) || guess < 0 || guess > 500) {
      message = "Enter a number between 0 and 500 !";
    } else if (guess > randomNumber) {
      message = `🔴 My guess is below ${guess}.`;
    } else if (guess < randomNumber) {
      message = `🔴 My guess is above ${guess}.`;
    } else {
      message = `🟢 You've found my guess, it's ${guess} in ${getAttempts()} attempts.`;
    }

    gameText.innerText = message;
    //contains() permet de vérifier si un élément est un enfant d'un parent.
    if (!app.contains(gameText)) app.appendChild(gameText);
    score.innerText = `Attempts: ${getAttempts()}`;

    //Si guess est différent de randomNumber après un délai de 2s gameText sera effacé.
    if (guess !== randomNumber) {
      setTimeout(() => {
        gameText.innerText = "";
      }, 2000);
    }
  });
};
