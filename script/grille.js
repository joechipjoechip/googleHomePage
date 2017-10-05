
// --> variables
const container = document.getElementById('container-grille');


// --> functions
const ask = (heho) => {
  // variables spécifiques à cette fonction
  let firstTime = true,
      n;

  // on check si c'est la premiere fois que la chose est demandée
  // et on le stock dans firstTime
  if (heho) {
    firstTime = false;
  }

  // Si c'est bien la première fois
  if (firstTime) {
    // on demande et on stocke
    n = prompt("hey, tu veux quoi comme grille ? (un chiffre entre 1 et 70)");  
  } else {
    // sinon, on demande et on stocke, mais de cette manière :
    n = prompt("allez, sérieusement gros, tu veux quoi comme grille ? (un chiffre entre 1 et 70)");
  }

  // on "parseInt" (c a d qu'on transforme la chaine de caractère en un nombre entier)
  // si ce n'est pas possible, alors n deviendra un NaN (Not a Number)
  n = parseInt(n);


  // ici on test si n n'EST PAS un NaN (le ! est une négation)
  if (!isNaN(n)) {

    // Si donc on a bien un nombre, maintenant on test si celui ci est bien entre 1 et 70
    if (n > 0 && n <= 70) {
      // Si toutes les bonnes conditions sont réunies, alors on lance la génération de grille avec n en parametre
      gen(n);  
    } else {
      // sinon, on relance la demande, avec true en argument, qui aura pour effet de mettre firstTime a false
      ask(true);
    }

  } else {
    // ici on a donc bien un NaN, donc on relance la demande
    ask(true);

  }
};

const gen = n => {
  // Pour rappel, la variable "container" est définie de manière globale, tout en haut

  // Donc ici, je calcule la taille de mes ptits carrés, et je l'appelle "ratio"
  const ratio = container.offsetWidth / n;

  // console.log(ratio);


  // On démarre une boucle qui se répète n fois (pour les lignes)
  for (let j = 0; j < n; j++) {
    // et ici on démare une autre boucle qui se répète n fois (pour placer tous les carrés dans 1 ligne)
    for (let i = 0; i < n; i++) {
      // on créé un élément de type div
      const cell = document.createElement('div');
      // on lui donne une class .cell
      cell.classList.add('cell');
      // on lui donne du css avec le ratio qu'on a calculé au préalable
      cell.style.cssText = `width : ${ratio}px; height : ${ratio}px`;
      // on insère le carré
      container.appendChild(cell);
    }  
  }
};


// init
// on lance une première fois le ask, avec false en parametre, pour que firstTime puisse rester à true
ask(false);