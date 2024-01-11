let playerScore = 0;
let computerScore = 0;
let rounds = 5;
let currentRound = 1;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];

  return choices[getRandomChoice()];
}

function getRandomChoice() {
  return Math.floor(Math.random() * 3);
}

getRandomChoice.counter = 0;

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();

  if (playerChoice === computerChoice) {
    return 'Tie';
  }
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (winConditions[playerChoice] === computerChoice) {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}

function updateDisplay(result) {
  const resultDisplay = document.getElementById('result-display');
  const scoreDisplay = document.getElementById('score-display');

  resultDisplay.textContent = result;
  scoreDisplay.textContent = `Score - Player ${playerScore}, Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    resultDisplay.textContent = `Game over! ${winner} wins!`;

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    const playAgain = confirm('Do you want to play again?');

    if (playAgain) {
      playerScore = 0;
      computerScore = 0;
      enableButtons();
    } else {
      disableButtons();
    }
  }
}

function enableButtons() {
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', function () {
  const result = playRound('rock', getComputerChoice());
  updateDisplay(result);
});

document.getElementById('paper').addEventListener('click', function () {
  const result = playRound('paper', getComputerChoice());
  updateDisplay(result);
});

document.getElementById('scissors').addEventListener('click', function () {
  const result = playRound('scissors', getComputerChoice());
  updateDisplay(result);
});

enableButtons();
