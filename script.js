let humanScore = 0;
let computerScore = 0;

let computerChoice = undefined;
let humanChoice = undefined;

scoreDisplayContainer = document.querySelector('.score-display');
const computerText = document.createElement('p');
scoreDisplayContainer.appendChild(computerText);
const humanText = document.createElement('p');
scoreDisplayContainer.appendChild(humanText);
const scoreStatus = document.createElement('p');
scoreDisplayContainer.appendChild(scoreStatus);

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
  humanChoice = 'rock';
  humanText.textContent = 'Human: rock';
});
rockButton.addEventListener('click', playRound);

paperButton.addEventListener('click', () => {
  humanChoice = 'paper';
  humanText.textContent = 'Human: paper';
});
paperButton.addEventListener('click', playRound);

scissorsButton.addEventListener('click', () => {
  humanChoice = 'scissors';
  humanText.textContent = 'Human: scissors';
});
scissorsButton.addEventListener('click', playRound);

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = 'rock';
    computerText.textContent = 'Computer: rock';
  } else if (computerChoice === 2) {
    computerChoice = 'paper';
    computerText.textContent = 'Computer: paper';
  } else {
    computerChoice = 'scissors';
    computerText.textContent = 'Computer: scissors';
  }
}

// function getHumanChoice() {
//   humanChoice =
//     rockButton.textContent ||
//     paperButton.textContent ||
//     scissorsButton.textContent;
//   console.log(`Human:${humanChoice}`);
// }

function playRound() {
  getComputerChoice();
  // getHumanChoice();

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

  scoreStatus.innerHTML = `Human score: ${humanScore} <br> Computer score: ${computerScore}`;
}
