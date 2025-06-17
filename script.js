console.log("Hello World");

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  else if (randomNum === 1) return "paper";
  else return "scissors";
}


function getHumanChoice() {
  const choice = prompt("Enter Rock, Paper, or Scissors:");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const player = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (player === computer) {
    console.log(`It's a tie! You both chose ${player}`);
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${player} beats ${computer}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${player}`);
    computerScore++;
  }
}


function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  if (humanScore > computerScore) {
    console.log("🏆 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

playGame();
