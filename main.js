let playerWin = 0;
let computerWin = 0;
let computerChoice = "";
let choice;
let tempChoice;

const startNewGame = document.querySelector(`#startNewGame`);
startNewGame.addEventListener(`click`, resetGame);

const gameResultText = document.querySelector(`#gameResult`);
const roundResult = document.querySelector(`#whoWonRound p`);
const roundResultPlayer = document.querySelector(`#playerCountText`);
const roundResultComputer = document.querySelector(`#computerCountText`);
const playerChoiceText = document.querySelector(`#playerChoice p`);
const computerChoiceText = document.querySelector(`#computerChoice p`);

//creating buttons for choosing what to play and calling playAGame function in it

const playerButton = Array.from(
  document.querySelectorAll(`#playerButtons button`)
);

playerButton.forEach((button) => {
  button.addEventListener(`click`, function (e) {
    playerChoice = e.target.textContent;
    playAGame();
  });
});

//function to check number of wins and to playARound
function playAGame() {
  if (
    (playerWin === 0 && computerWin === 0) ||
    playerWin === 5 ||
    computerWin === 5
  ) {
    resetGame();
  }
  playARound();

  playerChoiceText.textContent = `You chose: ${playerChoice}`;

  computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

  if (playerWin === 5) {
    gameResultText.textContent = `You won!`;
  } else if (computerWin === 5) {
    gameResultText.textContent = `Computer won!`;
  }
}

//function to reset the game
function resetGame() {
  playerWin = 0;
  computerWin = 0;
  gameResultText.textContent = `First to win 5 Rounds, wins the Game!`;
  roundResultPlayer.textContent = 0;
  roundResultComputer.textContent = 0;
  playerChoiceText.textContent = `Choose Rock, Paper or Scissors`;
  computerChoiceText.textContent = `Computer will choose after you`;
}

//function to playARound to compare Player vs AI choice
function playARound() {
  getComputerChoice();

  if (playerChoice === computerChoice) {
    roundResult.textContent = "Round is a draw !";
    return;
  } else {
    if (playerChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        playerWin++;
        roundResult.textContent = "Nice, you won the round !";
        roundResultPlayer.textContent = `${playerWin}`;
      } else {
        computerWin++;
        roundResult.textContent = "Sorry, computer won the round !";
        roundResultComputer.textContent = `${computerWin}`;
      }
    } else if (playerChoice === "PAPER") {
      if (computerChoice === "ROCK") {
        playerWin++;
        roundResult.textContent = "Nice, you won the round !";
        roundResultPlayer.textContent = `${playerWin}`;
      } else {
        computerWin++;
        roundResult.textContent = "Sorry, computer won the round !";
        roundResultComputer.textContent = `${computerWin}`;
      }
    } else if (playerChoice === "SCISSORS") {
      if (computerChoice === "PAPER") {
        playerWin++;
        roundResult.textContent = "Nice, you won the round !";
        roundResultPlayer.textContent = `${playerWin}`;
      } else {
        computerWin++;
        roundResult.textContent = "Sorry, computer won the round !";
        roundResultComputer.textContent = `${computerWin}`;
      }
    }
  }
}

//function getComputerChoice to get a random choice for computer

// get random from 0 to 2,round it up with floor and set it up as index of the array I sent in

function random(numbers) {
  tempChoice = numbers[Math.floor(Math.random() * numbers.length)];
  while (tempChoice === numbers[3]) {
    tempChoice = numbers[Math.floor(Math.random() * numbers.length)];
  }
  return tempChoice;
}

function getComputerChoice() {
  choice = random([1, 2, 3]);
  if (choice === 1) {
    computerChoice = "ROCK";
  }
  if (choice === 2) {
    computerChoice = "PAPER";
  }
  if (choice === 3) {
    computerChoice = "SCISSORS";
  }
}
