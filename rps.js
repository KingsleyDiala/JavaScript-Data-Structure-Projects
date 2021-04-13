// Defining user's coice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {console.log('invalid input. Try again.')
  }
}
// Defining Computer generated choice
const getComputerChoice = Math.floor(Math.random() * 3);

const getCompChoice = () => {
  if (getComputerChoice === 0) {
    return 'rock'
  } else if (getComputerChoice === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

// Determining the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return console.log('game was a tie');
  }

  // Rock Logic
  if (userChoice === 'rock') {
    if (computerChoice == 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }

// Papper Logic
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }

  // Scissors Logic
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer Won!'
    } else {
      return 'You Won!'
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getCompChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()