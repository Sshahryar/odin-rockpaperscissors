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
  // Commenting out the following code as required by the "Revisiting Rock Paper Scissors" assignment.
  /* 
  let currentRound = 1;

  while (currentRound <= rounds) {
    const playerSelection = prompt("Enter: rock, paper, scissors")
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(result);

    currentRound++;
  } 
  */

  document.getElementById('result-display').innerText = `Result: ${result}`;

}
// Commenting out the following code as required by the "Revisitng Rock Paper Scissors" assignment.
  /* 
game (5);
  */

document.getElementById('rock').addEventListener('click', function () {
  const result = playRound('rock', getComputerChoice());
  console.log(result);                     
});

document.getElementById('paper').addEventListener('click', function () {
  const result = playRound('paper', getComputerChoice());
  console.log(result);                     
});

document.getElementById('scissors').addEventListener('click', function () {
  const result = playRound('scissors', getComputerChoice());
  console.log(result);                     
});
