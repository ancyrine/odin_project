const choices = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll("button");
const player = document.querySelector(".playerscore");
const computer = document.querySelector(".computerscore");

const computerResult = document.querySelector("#computerresult");
const winner = document.querySelector("#winner");

let playerScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return 0;
        case "paper":
          return -1;
        case "scissor":
          return 1;
      }
    case "paper":
      switch (computerChoice) {
        case "rock":
          return 1;
        case "paper":
          return 0;
        case "scissor":
          return -1;
      }
    case "scissor":
      switch (computerChoice) {
        case "rock":
          return -1;
        case "paper":
          return 1;
        case "scissor":
          return 0;
      }
  }
  return 0;
}

function calculateScore(score) {
  console.log("debug Score : ", score);
  if (score > 0) {
    winner.textContent = "Winner is the PLAYER";
    ++playerScore;
  } else if (score < 0) {
    winner.textContent = "Winner is the COMPUTER";
    ++computerScore;
  } else {
    winner.textContent = "NO Winner";
  }
  player.textContent = playerScore;
  computer.textContent = computerScore;
}

function game() {
  let playerChoice = this.value;
  if (playerChoice == "reset") {
    playerScore = 0;
    computerScore = 0;
    computerResult.textContent = "  ";
    winner.textContent = "  ";
    return;
  }

  if (playerScore >= 5 || computerScore >= 5) {
    console.log("End Game");
    computerResult.textContent =
      "Final Winner is " +
      (playerScore > computerScore ? "Player" : "Computer");
    winner.textContent = "The Game Ends";
    return;
  }

  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Debug player choice: ", playerChoice);
  computerResult.textContent = "The computer choose " + computerChoice;
  let score = playRound(computerChoice, playerChoice);
  calculateScore(score);
}

buttons.forEach((button) => button.addEventListener("click", game));
