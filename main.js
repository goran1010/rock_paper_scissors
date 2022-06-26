//Start the game
let playerWin = 0;
let computerWin = 0;
let noWinner = 0;
let condition = true;

while (condition) {
  let numberOfRounds = prompt("Choose how many rounds you want to play: ", 3);
  if (numberOfRounds === undefined || numberOfRounds === null) {
    alert("Game canceled!");
    condition = false;
  } else if (isNaN(Number(numberOfRounds))) {
    alert("You need to write a NUMBER of rounds you want to play: ");
  } else {
    alert(playAGame(Number(numberOfRounds)));
    condition = false;
  }
}

//function getComputerChoice to get a random choice for computer
function getComputerChoice() {
  let computer = Math.random() * 3;
  if (computer >= 0 && computer < 1) {
    console.log(computer);
    return "rock";
  }
  if (computer >= 1 && computer < 2) {
    console.log(computer);
    return "paper";
  }
  if (computer >= 2 && computer <= 3) {
    console.log(computer);
    return "scissors";
  }
}

//function to getUserChoice with some conditions
function getUserChoice() {
  condition = true;
  while (condition) {
    let userChoice = prompt(
      "Choose between 'rock','paper'and 'scissors': ",
      "rock"
    );
    if (userChoice === undefined || userChoice === null) {
      condition = false;
    } else if (
      !(
        userChoice.toLowerCase() === "rock" ||
        userChoice.toLowerCase() === "paper" ||
        userChoice.toLowerCase() === "scissors"
      )
    ) {
      alert(
        `You wrote ${userChoice}, but you need to write rock, paper or scissors`
      );
    } else {
      condition = false;
      return userChoice;
    }
  }
}

//function to playARound which creates a user prompt and makes it lowerCase and is compared vs AI
function playARound() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  if (userChoice === undefined) {
    alert("You chose to lose the round!");
    computerWin++;
  } else {
    alert(
      `You chose ${userChoice.toLowerCase()} and computer chose ${computerChoice}`
    );
    if (userChoice.toLowerCase() === computerChoice) {
      alert("It's a draw !");
      noWinner++;
    } else if (userChoice.toLowerCase() === "rock") {
      if (computerChoice === "scissors") {
        playerWin++;
        alert("You win the round!");
      } else {
        computerWin++;
        alert("You lost the round!");
      }
    } else if (userChoice.toLowerCase() === "paper") {
      if (computerChoice === "rock") {
        playerWin++;
        alert("You win the round!");
      } else {
        computerWin++;
        alert("You lost the round!");
      }
    } else if (userChoice.toLowerCase() === "scissors") {
      if (computerChoice === "paper") {
        playerWin++;
        alert("You win the round!");
      } else {
        computerWin++;
        alert("You lost the round!");
      }
    }
  }
}

//function to playAGame where player vs computer play a certain number of playARound games
function playAGame(numberOfRounds) {
  for (i = 0; i < numberOfRounds; i++) {
    playARound();
  }
  if (playerWin > computerWin)
    return `With ${numberOfRounds} rounds played you WON THE GAME with ${playerWin} rounds won and ${computerWin} rounds lost, with ${noWinner} draw rounds!`;
  else if (computerWin > playerWin)
    return `With ${numberOfRounds} rounds played you LOST THE GAME with ${computerWin} rounds lost and ${playerWin} rounds won, with ${noWinner} draw rounds!`;
  else
    return `With ${numberOfRounds} rounds played GAME IS A DRAW with ${playerWin} rounds won by you and ${computerWin} rounds won by the computer, with ${noWinner} draw rounds!`;
}
