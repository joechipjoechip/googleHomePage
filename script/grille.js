
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
// on lance une première fois le ask (avec false en parametre, pour que firstTime puisse rester à true)
ask(false);



// edit : 
// à la relecture, et pour vous aider, il me semble que 2 ou 3 petites choses méritent une explication :
/*
quand je dit 
  if(variable)

c'est équivalent à
  if (variable === true)

c'est juste une manière plus rapide d'écrire
donc on peut en déduire que

  if(!variable)
est équivalent à
  if(variable !== true)
et équivalent également à
  if (variable === false)

(tout ça est valable pour l'ancienne syntaxe, ainsi que pour la nouvelle, ainsi que dans d'autres languages de programmation)


-----------
--ES6---
-----------
ensuite, dans ce code, c'est une syntaxe dite "ES6" qui est utilisée
c'est à dire que c'est la syntaxe "moderne" de javascript

quand je dit
  const une_variable = qqch;
ça veut dire que c'est une variable qui ne sera jamais réassignée

quand je dit
  let un_autre_variable = qqch;
ça veut dire que c'est une variable qui pourra être réassignée

-> Dans l'ancienne syntaxe javascript, cette différenciation n'existe pas, et toutes les variables sont déclarées avec "var"

----------

ensuite, pour déclarer une fonction, j'utilise une "fonction fléchée", c'est à dire :
  const ma_fonction = (parametre) => { 
    // les différentes étapes de ma fonction 
      .. et s'il n'y a qu'un parametre, on peut même se passer des parenthèse qui l'entourent..
  };

ce qui équivaut, dans l'ancienne syntaxe, à :
  var ma_fonction = function(parametre) {
    // les différentes étapes de ma fonction 
  };

----------

enfin, quand vous voyez ce genre de chose :
(es6)

  const prenom = "Thérèse";
  const phrase = `Je t'encule ${prenom}.`;


C'est l'équivalent de :
(ancienne syntaxe)

  var prenom = "Thérèse";
  var phrase = "Je t'encule " + prenom + ".";


Dans les deux cas, vous obiendrez une phrase : 
  Je t'encule Thérèse.




( https://youtu.be/Vwur45ZK2Ko )





Voilà voilà, donc une précision pour finir, ce n'est pas pour vous perdre ou pour être chauvin ou que sais-je
qu'on utilise la syntaxe ES6, mais simplement parcequ'elle est de plus en plus répandue (elle date de 2015), 
et qu'il est important de pouvoir la lire et la comprendre. Elle apporte un certain confort à l'écriture,
ainsi que tout un tas de petites fonctionnalités en plus qui aident bcp le taff des dev.

Enfin enfin :
  j'ai tout appris sur le programme 30j de JS de Wes Bos :
  https://javascript30.com/ <--- 100% gratuit

  ainsi que le programme JS de freecodecamp.com
  (excellents exercices sur les manipulations de données notamment)
  https://www.freecodecamp.org/ <--- 100% gratuit

  et une super resource en plus pour js :
  https://youtu.be/BMUiFMZr7vk


*/