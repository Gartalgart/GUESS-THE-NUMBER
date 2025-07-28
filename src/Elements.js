import { createParagraph, createButton } from "./utils.js";

export default class Elements {
  constructor(appElement) {
    //CONSTANTS
    this.app = appElement;
    this.attempts = 0;
    this.multiplicator = 100;

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

    this.range = document.createElement("canvas");
    this.range.id = "range";
    this.range.width = 500;
    this.range.height = 40;
    this.context = this.range.getContext("2d");

    this.restartBtn = createButton("restartBtn", "Restart");

    //FORMULAIRE
    this.inputSubmitForm = document.createElement("form");
    this.inputSubmitForm.id = "inputSubmitForm";

    this.labelInput = document.createElement("label");
    this.labelInput.innerText = "Your guess";
    this.labelInput.htmlFor = "inputNumber";

    this.inputNumber = document.createElement("input");
    this.inputNumber.id = "inputNumber";
    this.inputNumber.placeholder = "Tape un nombre";
    this.inputNumber.value = "0";

    this.submitBtn = createButton("submitBtn", "Submit");

    //appendChild() permet d'ajouter un seule élément alors que append() permet d'en ajouter plusieurs
    this.labelInput.appendChild(this.inputNumber);
    this.inputSubmitForm.append(this.labelInput, this.submitBtn);
  }
}
