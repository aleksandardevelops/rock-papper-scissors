let humanScore = 0;
let computerScore = 0;

let computerChoice = undefined;
let humanChoice = undefined;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);

  if (computerChoice === 1) {
    computerChoice = 'rock';
    console.log('Computer: rock');
  } else if (computerChoice === 2) {
    computerChoice = 'paper';
    console.log('Computer: paper');
  } else {
    computerChoice = 'scissors';
    console.log('Computer: scissors');
  }
}

function getHumanChoice() {
  humanChoice =
    rockButton.textContent ||
    paperButton.textContent ||
    scissorsButton.textContent;
  console.log(`Human:${humanChoice}`);
}

function playRound() {
  getComputerChoice();
  getHumanChoice();

  if (
    humanChoice !== 'rock' &&
    humanChoice !== 'paper' &&
    humanChoice !== 'scissors'
  ) {
    console.log('Check spelling! Choose: Rock, Paper or Scissors');
  }

  switch (true) {
    case computerChoice === 'rock' && humanChoice === 'paper':
    case computerChoice === 'scissors' && humanChoice === 'rock':
    case computerChoice === 'paper' && humanChoice === 'scissors':
      humanScore++;
      console.log('Human wins!');
      break;

    case humanChoice === 'rock' && computerChoice === 'paper':
    case humanChoice === 'scissors' && computerChoice === 'rock':
    case humanChoice === 'paper' && computerChoice === 'scissors':
      computerScore++;
      console.log('Computer wins!');
      break;

    case humanChoice === computerChoice:
      console.log("It's a tie");
      break;
  }

  console.log(`Human has a score of ${humanScore}`);
  console.log(`Computer has a score of ${computerScore}`);
}

playRound();
