const app = document.getElementById("app");

const startText = document.createElement("p");
const startBtn = document.createElement("button");

const sentence = document.createElement("p");
const score = document.createElement("p");
const inputSubmitContainer = document.createElement("form");
const labelInput = document.createElement("label");
const inputNumber = document.createElement("input");
const submitBtn = document.createElement("button");
const gameText = document.createElement("p");
const inputRange = document.createElement("input");
const randomNumber = Math.floor(Math.random() * 500);

sentence.id = "sentence";
sentence.innerText =
  "I generated a number between 0 and 500, try to find it 😆";

score.id = "score";
score.innerText = "Score: 0";

inputSubmitContainer.id = "inputSubmitContainer";
labelInput.innerText = "Your guess";
inputNumber.id = "inputNumber";
inputNumber.placeholder = "Tape a number";
submitBtn.id = "submitBtn";
submitBtn.innerText = "Submit";
labelInput.appendChild(inputNumber);
inputSubmitContainer.appendChild(labelInput);
inputSubmitContainer.appendChild(submitBtn);

gameText.id = "gameText";
inputRange.id = "inputRange";

startText.innerText =
  "The application will generate a random number, and your\n task is to find it in as few attempts as possible.";
startBtn.innerText = "Start";

startText.id = "startText";
startBtn.id = "startBtn";

app.appendChild(startText);
app.appendChild(startBtn);

startBtn.addEventListener("click", () => {
  app.removeChild(startText);
  app.removeChild(startBtn);

  app.appendChild(sentence);
  app.appendChild(score);
  app.appendChild(inputSubmitContainer);
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputNumber.value !== Number && inputNumber.value > 500) {
    gameText.innerText = "Enter a number between 0 and 500 !";
    app.appendChild(gameText);
  } else if (inputNumber.value > randomNumber) {
    gameText.innerText = `🔴 My guess is below ${inputNumber.value}.`;
    app.appendChild(gameText);
  } else if (inputNumber.value < randomNumber) {
    gameText.innerText = `🔴 My guess is above ${inputNumber.value}.`;
    app.appendChild(gameText);
  } else {
    gameText.innerText = `🟢 You've found my guess, it's ${inputNumber.value}.`;
    app.appendChild(gameText);
  }
});

console.log(randomNumber);
