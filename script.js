let humanScore = 0;
let computerScore = 0;

let computerChoice = undefined;
let humanChoice = undefined;

scoreDisplayContainer = document.querySelector('.score-display');

const computerText = document.createElement('p');
scoreDisplayContainer.prepend(computerText);

const humanText = document.createElement('p');
scoreDisplayContainer.prepend(humanText);

const humanStatus = document.createElement('p');
scoreDisplayContainer.prepend(humanStatus);

const computerStatus = document.createElement('p');
scoreDisplayContainer.prepend(computerStatus);

const humanBox = document.querySelector('.human-box');
const computerBox = document.querySelector('.computer-box');

const victoryAnnouncement = document.createElement('p');
scoreDisplayContainer.append(victoryAnnouncement);

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
  humanChoice = 'rock';
  humanText.textContent = 'Human: rock 🪨';
});
rockButton.addEventListener('click', playRound);

paperButton.addEventListener('click', () => {
  humanChoice = 'paper';
  humanText.textContent = 'Human: paper 🗒️';
});
paperButton.addEventListener('click', playRound);

scissorsButton.addEventListener('click', () => {
  humanChoice = 'scissors';
  humanText.textContent = 'Human: scissors ✂️';
});
scissorsButton.addEventListener('click', playRound);

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = 'rock';
    computerText.textContent = 'Computer: rock 🪨';
  } else if (computerChoice === 2) {
    computerChoice = 'paper';
    computerText.textContent = 'Computer: paper 🗒️';
  } else {
    computerChoice = 'scissors';
    computerText.textContent = 'Computer: scissors ✂️';
  }
}

function playRound() {
  getComputerChoice();

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
  }

  if (humanChoice === computerChoice) {
    victoryAnnouncement.textContent = 'This round is a tie!';
  } else {
    victoryAnnouncement.textContent = '';
  }

  humanBox.innerHTML = `Human score: ${humanScore}`;
  computerBox.innerHTML = `Computer score: ${computerScore}`;

  if (humanScore == 5) {
    victoryAnnouncement.textContent = 'Humans wins!';
  } else if (computerScore == 5) {
    victoryAnnouncement.textContent = 'Computer wins!';
  }

  if (humanScore === 5) {
    victoryAnnouncement.textContent = 'Human wins!';
    humanBox.classList.add('pop'); // Add pop effect
    setTimeout(() => {
      humanBox.classList.remove('pop'); // Remove after animation
      resetGame();
    }, 2000);
  } else if (computerScore === 5) {
    victoryAnnouncement.textContent = 'Computer wins!';
    computerBox.classList.add('pop');
    setTimeout(() => {
      computerBox.classList.remove('pop');
      resetGame();
    }, 2000);
  }
  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanBox.innerHTML = `Human score:  ${humanScore}`;
    computerBox.innerHTML = `Computer score: ${computerScore}`;
    victoryAnnouncement.textContent = '';
  }
}
