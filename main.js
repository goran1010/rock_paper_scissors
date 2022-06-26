let playerWin = 0;
let computerWin = 0;

//function getComputerChoice to get a random choice for computer
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 2.99); //Is there better way than *2.99 to get random 0-3 ?
  if (computer === 0) {
    return "rock";
  }
  if (computer === 1) {
    return "paper";
  }
  if (computer === 2) {
    return "scissors";
  }
}

//function to playARound which creates a user prompt and makes it lowerCase and is compared vs AI
function playARound() {
  let userChoice = prompt(
    "Choose between 'rock','paper'and 'scissors': "
  ).toLowerCase();
  if (
    !(
      userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissors"
    )
  ) {
    alert("You need to write rock,paper or scissors");
    return;
  } else {
    let computerChoice = getComputerChoice();
    alert(`You chose ${userChoice} and computer chose ${computerChoice}`);
    if (userChoice === computerChoice) {
      alert("It's a draw !");
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        playerWin++;
        alert("You win the round!");
      } else {
        computerWin++;
        alert("You lost the round!");
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        playerWin++;
        alert("You win the round!");
      } else {
        computerWin++;
        alert("You lost the round!");
      }
    } else if (userChoice === "scissors") {
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
    return `With ${numberOfRounds} rounds played you won the game with ${playerWin} rounds won and ${computerWin} rounds lost!`;
  else if (computerWin > playerWin)
    return `With ${numberOfRounds} rounds played you lost the game with ${computerWin} rounds lost and ${playerWin} rounds won!`;
  else
    return `With ${numberOfRounds} rounds played game is a draw with ${playerWin} rounds won by you and ${computerWin} rounds won by the computer!`;
}

//GetNumberOfRounds player wants to play
function getNumberOfRounds() {
  let numberOfRounds = Number(
    prompt("Choose how many rounds you want to play: ", 3)
  );
  if (isNaN(numberOfRounds)) {
    numberOfRounds = prompt(
      "You need to write a NUMBER of rounds you want to play: ",
      3
    );
  } else return numberOfRounds;
}

//start the game
alert(playAGame(getNumberOfRounds()));
