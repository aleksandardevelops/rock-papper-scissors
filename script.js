let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);

  if (computerChoice === 1) {
    console.log('Computer: Rock');
  } else if (computerChoice === 2) {
    console.log('Computer: Papper');
  } else {
    console.log('Computer: Scissors');
  }
}

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt('Enter your choice');
}

getHumanChoice();

function playRound() {}
