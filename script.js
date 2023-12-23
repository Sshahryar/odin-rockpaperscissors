function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']

  return choices [getRandomChoice()]; 
}

function getRandomChoice() {
  
  return (getRandomChoice.counter++ % 3);
}

getRandomChoice.counter=0;

function playRound (playerSelection, computerSelection) {
  
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();

 
  if (playerChoice === computerChoice) {
    return "Tie";
  } else {
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

if (winConditions[playerChoice] === computerChoice) {

  return "Win";
} else {
  return "Lose";
    }
  }
}


function game(rounds) {

  let currentRound = 1;

  while (currentRound <= rounds) {
    const playerSelection = prompt("Enter: rock, paper, scissors")
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(result);

    currentRound++;
  }

  alert("Game ended");

}
game (5);