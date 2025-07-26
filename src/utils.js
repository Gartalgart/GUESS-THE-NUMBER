//FONCTIONS

//Fonction pour pour créer une balise <p> avec un id et du texte
export const createParagraph = (id, text) => {
  const p = document.createElement("p");
  p.id = id;
  p.innerText = text;

  return p;
};

//Fonction pour pour créer une balise <button> avec un id et du texte
export const createButton = (id, text) => {
  const btn = document.createElement("button");
  btn.id = id;
  btn.innerText = text;

  return btn;
};
