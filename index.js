const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const mousePositionEl = document.getElementById("mouse-position");


let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
 button.addEventListener("click", () => {
   const result = playRound(button.id, computerPlay());
   resultEl.textContent = result;
   
 });
});

function computerPlay() {
  const choices = ["caillou", "feuille", "ciseau"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Égalité";
  } else if (
    (playerSelection === "caillou" && computerSelection === "ciseau") ||
    (playerSelection === "feuille" && computerSelection === "caillou") ||
    (playerSelection === "ciseau" && computerSelection === "feuille")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "Vous avez gagné " + playerSelection + " bat " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "Vous avez perdu " + computerSelection + " bat " + playerSelection;
  }
}
