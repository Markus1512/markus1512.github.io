// Velg HTML-elementer
const clickButton = document.getElementById("klikk-knapp");
const time = document.getElementById("tid");
const count = document.getElementById("tall");
const resetButton = document.getElementById("restart-knapp");
const counter = document.getElementById("teller");
const highScore = document.getElementById("highscores");

// Sett variabler
let remainingTime = 10;
let clickCount = 0;
let timer;
let gameEnded = false; 

// Les antall klikk og high score fra localStorage hvis det finnes 
if(!localStorage.getItem("clickCount")){
  // parseInt brukes til å konvertere en lagret streng til et hetall, slik at tallet kan vises på nettsiden
  clickCount = parseInt(localStorage.getItem("clickCount"));
  count.textContent = clickCount;
  counter.textContent = "Du har klikket " + clickCount + " ganger!";
}
if(localStorage.getItem("highScore")){
  highScore.textContent = "HIGH SCORE: " + localStorage.getItem("highScore");
}

// Lytt etter klikk på knappen
clickButton.addEventListener("click", () => {
  if (!gameEnded) {
    clickCount++;
    count.textContent = clickCount;
    counter.textContent = "Du har klikket " + clickCount + " ganger";
    localStorage.setItem("clickCount", clickCount);

    // Oppdater high score hvis det er nødvendig
    if(!localStorage.getItem("highScore") || clickCount > parseInt(localStorage.getItem("highScore"))){
      localStorage.setItem("highScore", clickCount);
      highScore.textContent = "HIGH SCORE: " + clickCount;
    }
  }
});

// Lytt etter klikk på reset-knappen
resetButton.addEventListener("click", () => {
  resetGame();
});

// Start nedtelling av tid
function startTimer() {
  timer = setInterval(() => {
    remainingTime--;
    time.textContent = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Avslutt spillet
function endGame() {
  gameEnded = true;
  clickButton.disabled = true;
  resetButton.style.display = "block";
  counter.textContent = "Du klarte å klikke " + clickCount + " ganger!";
}

// Tilbakestill spillet
function resetGame() {
  gameEnded = false;
  remainingTime = 10;
  clickCount = 0;
  time.textContent = remainingTime;
  count.textContent = clickCount;
  clickButton.disabled = false;
  resetButton.style.display = "none";
  counter.textContent = "Du har klikket " + clickCount + " ganger";
  highScore.textContent = "HIGH SCORE" + (localStorage.getItem("highScore") || 0);
  localStorage.removeItem("clickCount");
  startTimer();
}

// Start spillet
startTimer();
