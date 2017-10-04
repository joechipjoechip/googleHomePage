
// variables
const container = document.getElementById('container-grille');


// functions
const ask = (heho) => {
  let firstTime = true,
      n;

  // on check si c'est la premiere fois que la chose est demandée
  // et on le stock dans firstTime
  if (heho) {
    firstTime = false;
  }

  
  if (firstTime) {
    n = prompt("hey, tu veux quoi comme grille ?");  
  } else {
    n = prompt("allez, sérieusement, tu veux quoi comme grille ?");
  }

  n = parseInt(n);

  if (!isNaN(n)) {
    gen(n);
  } else {
    ask(true);
  }
};

const gen = n => {
  const ratio = container.offsetWidth / n;

  console.log(ratio);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.cssText = `width : ${ratio}px; height : ${ratio}px`;
      container.appendChild(cell);
    }  
  }
};

// events
// => none lol

// init
ask(false);