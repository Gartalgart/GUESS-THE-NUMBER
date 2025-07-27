import { createParagraph, createButton } from "./utils";

export default class Elements {
  constructor(appElement) {
    //CONSTANTS
    this.app = appElement;
    this.attempts = 0;

    //PAGE D'ACCUEIL
    this.startText = createParagraph(
      "startText",
      "The application will generate a random number, and your\n task is to find it in as few attempts as possible."
    );
    this.buttonContainer = document.createElement("div");
    this.buttonContainer.id = "buttonContainer";
    this.startBtn = createButton("startBtn", "Start");
    this.btnLevel1 = createButton("btnLevel1", "1", "btnLevel");
    this.btnLevel2 = createButton("btnLevel2", "2", "btnLevel");
    this.btnLevel3 = createButton("btnLevel3", "3", "btnLevel");

    this.buttonContainer.append(
      this.startBtn,
      this.btnLevel1,
      this.btnLevel2,
      this.btnLevel3
    );

    //ZONE DE JEU
    this.sentence = createParagraph("sentence", "");
    this.score = createParagraph("score", `Attempts: ${this.attempts}`);
    this.gameText = createParagraph("gameText", "");
    this.inputRange = document.createElement("input");
    this.restartBtn = createButton("restartBtn", "Restart");
    this.inputRange.id = "inputRange";

    //FORMULAIRE
    this.inputSubmitForm = document.createElement("form");
    this.inputSubmitForm.id = "inputSubmitForm";

    this.labelInput = document.createElement("label");
    this.labelInput.innerText = "Your guess";
    this.labelInput.htmlFor = "inputNumber";

    this.inputNumber = document.createElement("input");
    this.inputNumber.id = "inputNumber";
    this.inputNumber.placeholder = "Tape un nombre";

    this.submitBtn = createButton("submitBtn", "Submit");

    //appendChild() permet d'ajouter un seule élément alors que append() permet d'en ajouter plusieurs
    this.labelInput.appendChild(this.inputNumber);
    this.inputSubmitForm.append(this.labelInput, this.submitBtn);
  }
}
