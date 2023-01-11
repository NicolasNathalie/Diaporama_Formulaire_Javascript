let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let carImg = document.getElementById('carImg');
let demarrer = document.getElementById('dem');
let capitale = document.getElementById('capitale');
let txtCapitale = document.getElementById('txtCapitale');
let form = document.getElementById('form');
let timer = document.querySelector('#timer');
let score = document.getElementById('sco');
let bravo = document.getElementById("bravo");
let bravos = document.getElementById("score");
let perdu = document.getElementById("perdu");

let scoreValue = 0;

demarrer.addEventListener('click', click);
capitale.addEventListener('click', clickCapitale);
form.addEventListener('submit', onSubmit);

/*lorsque l'on clique sur démarrer le bouton disparait*/

function click() {
  if (demarrer.style.display !== "block") {
      demarrer.style.display = "none";
  }
  updateDisplay();
  updateTimer();
  timerInterval = setInterval(compte, 1000);
}

function onSubmit(e) {
  e.preventDefault();
  if (txtCapitale.value.toLowerCase() === gameArray[captialNumber].ville.toLowerCase() && gameArray[captialNumber].reponse === '') {
    scoreValue++;
    gameArray[captialNumber].reponse = txtCapitale.value;
  }
  score.innerHTML = 'Score :' + scoreValue;

  if (scoreValue == 5) {
    bravos.style.display = "none";
    bravo.style.display = "block";
    bravo.innerHTML = "Bravo! Votre temps est de : " + (30 - compteur) + "secondes";
    clearInterval(timerInterval);
   
  }

  nextItem();
}
/*compte a rebours*/
let compteur = 30;
let timerInterval;
function compte() {
  compteur--;
  updateTimer();
}

function updateTimer() {
  timer.innerHTML = "Temps restant : " + compteur;

  if (compteur === 0) {
    clearInterval(timerInterval);
    timer.innerHTML = "Temps écoulé ";
    bravos.style.display = "none";
    perdu.style.display = "block";
    perdu.innerHTML = "Perdu!";
  }
}

/*bouton du carrousel*/
prev.addEventListener('click', prevItem);
next.addEventListener('click', nextItem);

let captialNumber = 0;
function prevItem() {
  captialNumber--;
  if (captialNumber === -1) {
    captialNumber = 4;
  }
  updateDisplay();
}

function nextItem() {
  captialNumber++;
  if (captialNumber === 5) {
    captialNumber = 0;
  }
  updateDisplay();
}

/*Images avec carrousel et noms*/
function clickCapitale() {
  if (capitale.style.display === "block")
    console.log(displayImg)
}

let gameArray = [
  {
    image: '0.jpg',
    capitale: 'Canada',
    ville: 'Ottawa',
    reponse: ''
  },
  {
    image: '1.jpg',
    capitale: 'Niger',
    ville: 'Niamey',
    reponse: ''
  },
  {
    image: '2.jpg',
    capitale: 'Suisse',
    ville: 'Bern',
    reponse: ''
  },
  {
    image: '3.jpg',
    capitale: 'Japon',
    ville: 'Tokyo',
    reponse: ''
  },
  {
    image: '4.jpg',
    capitale: 'Bolivie',
    ville: 'Sucre',
    reponse: ''
  },
]

function updateDisplay() {
  carImg.src = 'img/' + gameArray[captialNumber].image;
  capitale.innerHTML = 'Capitale : ' + gameArray[captialNumber].capitale;
  txtCapitale.value = gameArray[captialNumber].reponse;
  console.log(carImg);
}