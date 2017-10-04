console.log('ok bien loaded');


// variables
const appearAfter = document.querySelectorAll('.appearAfter'),
      button = document.querySelector('#clickToShow button'),
      launchSearchButton = document.getElementById('launchSearch'),
      input = document.querySelector('#query > input'),
      form = document.getElementById('query'),
      popup = document.getElementById('popup');


// fonctions
const activateContent = () => {
  const containerToHide = document.getElementById('clickToShow'),
        cssValues = window.getComputedStyle(containerToHide);

  let delay = cssValues.getPropertyValue('transition-duration');

  delay = delay.replace('s', '') * 1000 + 50;

  button.classList.add('unopacity');
  setTimeout(() => {
    containerToHide.style.cssText = `opacity : 0;`;
  }, delay);

  setTimeout(() => {
    containerToHide.style.cssText = `display: none;`;
  }, delay * 2);
};

const launchQuery = () => {
  let query = document.querySelector('#query > input').value;
  query = query.replace(' ', '+');
  window.location = `http://www.google.fr/search?q=${query}`;
};

const snitchEnterKey = e => {
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    launchQuery();
  }
};

const noSub = e => {
  e.preventDefault();
};

const popupUndisplay = () => {
  popup.classList.remove('active');
};

const init = () => {
  setTimeout(() => {
    popup.classList.add('active');
  }, 10000);
};


// events
button.addEventListener('click', activateContent);
launchSearchButton.addEventListener('click', launchQuery);
input.addEventListener('keypress', snitchEnterKey);
form.addEventListener('submit', noSub);
popup.addEventListener('click', popupUndisplay);



// init
init();


