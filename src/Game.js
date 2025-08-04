import Elements from "./Elements.js";
import { displayGameText } from "./utils.js";

export default class Game extends Elements {
  constructor() {
    super(document.getElementById("app"));

    this.startBtn.addEventListener("click", () => this.startGame());
    this.submitBtn.addEventListener("click", (e) => this.handleGuess(e));
    this.restartBtn.addEventListener("click", () => {
      this.restartBtn.blur();
      Game.restart(this.app);
    });
  }
  mount() {
    this.app.append(this.startText, this.buttonContainer);
    this.levelBtn = document.querySelectorAll(".btnLevel");

    this.levelBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.levelBtn.forEach((b) => b.classList.remove("clicked"));
        btn.classList.add("clicked");

        switch (btn.id) {
          case "btnLevel1":
            this.level = 1;
            console.log("Niveau 1");
            break;
          case "btnLevel2":
            this.level = 2;
            console.log("Niveau 2");
            break;
          case "btnLevel3":
            this.level = 3;
            console.log("Niveau 3");
            break;
        }
      });
    });
  }
  //Fonction qui permet de commencer le jeu
  startGame() {
    // permet de remplacer tous les enfants d’un élément HTML par de nouveaux éléments, en une seule opération
    const levels = {
      1: 100,
      2: 500,
      3: 1000,
    };

    this.multiplicator = levels[this.level] || 100;
    this.randomNumber = Math.floor(Math.random() * this.multiplicator);
    this.sentence.innerText = `I generated a number between 0 and ${this.multiplicator}, try to find it 😆`;
    this.rangeNumberMax.innerText = `${this.multiplicator}`;
    this.app.replaceChildren(
      this.sentence,
      this.score,
      this.inputSubmitForm,
      this.range,
      this.rangeNumberContainer,
      this.restartBtn
    );
    console.log(this.randomNumber);
  }

  rangePosition() {
    const guess = Number(this.inputNumber.value);

    switch (this.multiplicator) {
      case 100:
        return guess * 5;
      case 500:
        return guess;
      case 1000:
        return guess / 2;
    }
  }
  //Fonction qui détermine sur la valeur entré en sup inf ou égale au nombre généré aléatoirement
  handleGuess(e) {
    e.preventDefault();
    const guess = Number(this.inputNumber.value);
    const x = this.rangePosition();
    let message = "";
    const element = this.gameText;
    this.attempts++;
    this.context.font = "bold 24px Arial";
    this.context.fillStyle = "white";

    if (guess === this.randomNumber) {
      this.context.fillText("🟢", x, 30);
    } else {
      this.context.fillText("X", x, 30);
    }

    if (isNaN(guess) || guess < 0 || guess > this.multiplicator) {
      message = `Enter a number between 0 and ${this.multiplicator} !`;
    } else if (guess > this.randomNumber) {
      message = `🔴 My guess is below ${guess}.`;
    } else if (guess < this.randomNumber) {
      message = `🔴 My guess is above ${guess}.`;
    } else {
      message = `🟢 You've found my guess, it's ${guess} in ${this.attempts} attempts.`;
      this.inputNumber.disabled = true;
      this.submitBtn.disabled = true;
    }

    if (this.attempts === 1) {
      this.gameText.innerText = message;
    } else {
      displayGameText(element, message);
    }

    //contains() permet de vérifier si un élément est un enfant d'un parent.
    if (!this.app.contains(this.gameText)) this.app.appendChild(this.gameText);
    this.score.innerText = `Attempts: ${this.attempts}`;
  }

  static restart(appElement) {
    appElement.innerHTML = "";
    const newGame = new Game(appElement);
    newGame.mount();
  }
}
