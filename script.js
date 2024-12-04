function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    console.log('Computer: Rock');
  } else if (randomNumber === 2) {
    console.log('Computer: Papper');
  } else {
    console.log('Computer: Scissors');
  }
}

getComputerChoice();
