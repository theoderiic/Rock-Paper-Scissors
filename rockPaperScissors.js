const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb'){
    return userInput;
  } 

  
  else{
    return console.log('Please enter a valid item.');
  }
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Game was a tie.';
  }
  if (userChoice==='rock'){
    if (computerChoice = 'paper'){
      return 'Computer won.';
    }
    else {
      return 'User won.';
    }
  }
  else if (userChoice==='paper'){
    if (computerChoice === 'rock'){
      return 'User won.';
    }
    else {
      return 'Computer won.';
    }
  }
  else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won'
    }
  
    else {
      return 'User won.';
    }
  }

} 

const playGame = () => {
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log(`You threw ${userChoice}`);
console.log(`The computer threw ${computerChoice}`);
 console.log(determineWinner(userChoice, computerChoice));
};

playGame();



