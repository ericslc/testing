const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }else{
    console.log('try again');
  }
}
function getComputerChoice(){

  switch(Math.floor(Math.random() * 3)) {
    case 0: return 'rock';
      break;
    case 1: return 'paper';
      break;
    case 2: return 'scissors';
      break;
  }
}
function determineWinner(userChoice, computerChoice){
   if(userChoice === 'bomb'){
    return 'You blew it up';}

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'computer wins';
    }else if(computerChoice === 'scissors'){
      return 'you win!';
    }else{
       return 'tie';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'computer wins this one'
    }else if(computerChoice ==='rock'){
      return 'you are not the loser!';
    }else{
      return 'tie';
}
  }
  if(userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'you are the loser';
    } else if (computerChoice === 'paper'){
      return 'you are the winner';
    }else{
      return 'tie';
    }
  }


}
function playGame() {
  let userChoice = getUserChoice();
  console.log(userChoice)
  let computerChoice = getComputerChoice();
	console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
console.log(playGame());
