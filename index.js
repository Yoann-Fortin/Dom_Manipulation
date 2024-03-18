// J'initialise une fonction pour créer ma page
function createHomePage() {
  // Je récupère le noeud auquel greffer mes éléments HTML
  const body = document.querySelector("body");

  // Je crée le noeud appelé Header et je le greffe en premier via la méthode prepend
  const header = document.createElement("header");
  body.prepend(header);

  // J'utilise ma fonction que j'ai créée plus bas pour créer plus de noeuds
  const nav = createHTMLElement("nav", header);

  const ul = createHTMLElement("ul", nav);

  // Je crée un tableau pour récupérer les noms de mes liens
  const links = ["home", "about", "contact"];

  // Je boucle sur ce tableau et récupère la valeur
  for (const link of links) {
    const li = createHTMLElement("li", ul);
    // Je rajoute la valeur en guise de texte
    li.innerText = link;
  }
}

// Cette fonction crée des noeuds de façon générique
function createHTMLElement(tag, node) {
  const element = document.createElement(tag);
  node.appendChild(element);
  return element;
}

// J'appelle la fonction pour qu'elle soit exécutée
createHomePage();

// On récupère le titre et modifie sa couleur en fonction de l'évènement click.
const title = document.querySelector("h1");
title.classList.add("black");
title.addEventListener("click", () => {
  title.classList.toggle("red");
});
