//FONCTIONS

//Fonction pour pour créer une balise <p> avec un id et du texte
export const createParagraph = (id, text) => {
  const p = document.createElement("p");
  p.id = id;
  p.innerText = text;

  return p;
};

//Fonction pour pour créer une balise <button> avec un id et du texte
export const createButton = (id, text, classe) => {
  const btn = document.createElement("button");
  btn.id = id;
  btn.innerText = text;
  btn.classList.add(classe);

  return btn;
};

export const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

export const displayGameText = async (element, message) => {
  element.innerText = "";
  await wait(0.5);
  element.innerText = message;
};
