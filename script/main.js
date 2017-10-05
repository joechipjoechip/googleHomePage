// variables
// ici je définis toutes les variables dont je vais avoir besoin
const button = document.querySelector('#clickToShow button'),
      launchSearchButton = document.getElementById('launchSearch'),
      input = document.querySelector('#query > input'),
      form = document.getElementById('query'),
      popup = document.getElementById('popup');


// fonctions
// ici je définis les fonctions, celles-ci seront appellées par des events ou s'appeleront entre elles.


const activateContent = () => {

  // ici il y a une complexité un peu superflux qui permet d'insérer des délais entre les différentes actions à faire
  // par les setTimeout()

  // pour définir les délais des setTimeout, on va récupérer le délais de transition qui est spécifié dans le css (ligne 196)
  const containerToHide = document.getElementById('clickToShow'),
        cssValues = window.getComputedStyle(containerToHide);


  let delay = cssValues.getPropertyValue('transition-duration');
  // à ce stade, delay est égal à "0.4s"

  // on remplace le s par un rien, ce qui donne 0.4
  // 0.4 est une donnée en seconde, or, on a besoin d'un delai en millisecondes pour les setTimeout
  // donc on multiplie 0.4 par 1000
  // et puis bon, on rajoute 50 (donc 50ms) ...pour la beauté du geste
  delay = delay.replace('s', '') * 1000 + 50;

  // et maintenant qu"on à tout ce dont on a besoin, on entame les actions à faire

  // 1 : ajouter la class unopacity (voir le css pour comprendre à quoi elle sert)
  button.classList.add('unopacity');

  // 2 : après le delay, on dit ("manuellement") que le container doit passer en opacity 0
  setTimeout(() => {
    containerToHide.style.cssText = `opacity : 0;`;
  }, delay);

  // 3 : après le delay * 2 (pour attendre que les deux actions précédentes soient finies)
  // on passe le container en display :none; pour vraiment le virer et pas se retrouver avec un élément invisible
  // qui nous empeche de clicker sur l'input
  setTimeout(() => {
    containerToHide.style.cssText = `display: none;`;
  }, delay * 2);
};

const launchQuery = () => {
  // on récupère la valeur qui a été entrée dans l'input
  let query = document.querySelector('#query > input').value;

  // on y remplace tous les espaces par des +
  query = query.replace(' ', '+');

  // et on demande au nav d'aller à l'url concaténée avec notre query
  window.location = `http://www.google.fr/search?q=${query}`;
};

const snitchEnterKey = e => {
  // ici on détecte simplement si la touche "entrer" est actionnée sur le input, auquel cas, on lance la recherche
  // console.log(e.keyCode);
  if (e.keyCode === 13) {
    launchQuery();
  }
};

const noSub = e => {
  // ici on demande simplement au formulaire d'oublier son comportement habituel lors d'un submit
  e.preventDefault();
};

const popupUndisplay = () => {
  // on vire la class .active au popup
  popup.classList.remove('active');
};

const initPopup = () => {
  // on attend 10secondes (donc 10 000 ms) et on ajoute la class .active au popup
  setTimeout(() => {
    popup.classList.add('active');
  }, 10000);
};


// events
// ici on surveille les "events" (evenements) qui nous interessent, sur les éléments qui nous intéressent
// une fois ces events détectés, on lance les fonctions correspondantes

// (un parametre "e" est passé implicitement aux fonctions, ce "e" contient tout un tas d'infos sur l'evenement)
button.addEventListener('click', activateContent);
launchSearchButton.addEventListener('click', launchQuery);
input.addEventListener('keypress', snitchEnterKey);
form.addEventListener('submit', noSub);
popup.addEventListener('click', popupUndisplay);



// init
// au lancement de la page, on lance la fonction initPopup
initPopup();


