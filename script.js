let humanScore = 0;
let computerScore = 0;

let computerChoice = undefined;
let humanChoice = undefined;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);

  if (computerChoice === 1) {
    computerChoice = 'rock';
    console.log('Computer: rock');
  } else if (computerChoice === 2) {
    computerChoice = 'papper';
    console.log('Computer: papper');
  } else {
    computerChoice = 'scissors';
    console.log('Computer: scissors');
  }
}

function getHumanChoice() {
  humanChoice = prompt('Enter your choice').toLowerCase();
  console.log(`Human:${humanChoice}`);
}

function playRound() {
  getComputerChoice();
  getHumanChoice();

  switch (true) {
    case computerChoice === 'rock' && humanChoice === 'papper':
    case computerChoice === 'scissor' && humanChoice === 'rock':
    case computerChoice === 'papper' && humanChoice === 'scissor':
      humanScore = humanScore++;
      console.log('Human wins!');
      break;

    case humanChoice === 'rock' && computerChoice === 'papper':
    case humanChoice === 'scissor' && computerChoice === 'rock':
    case humanChoice === 'papper' && computerChoice === 'scissor':
      computerChoice = computerScore++;
      console.log('Computer wins!');
      break;

    case humanChoice === computerChoice:
      console.log("It's a tie");
      break;
  }
}

playRound();
