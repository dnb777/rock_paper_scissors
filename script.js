// ROCK, PAPER OR SCISSORS

let humanScore = 0;
let computerScore = 0;
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnContainer = document.querySelector('#btn-container');
const results = document.querySelector("#results");

const roundResult = document.createElement("p");
results.appendChild(roundResult);

const scoreDisplay = document.createElement("p");
scoreDisplay.textContent = `Player: ${humanScore} \n PC: ${computerScore}`;
results.appendChild(scoreDisplay);




function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice == computerChoice) {
        roundResult.textContent = `It's a tie, both pick ${humanChoice}`;
    } else {
        roundResult.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    displayScore();
}


btnContainer.addEventListener('click', (e) => {
    let target = e.target;

    playRound(e.target.id, getComputerChoice());
})




function displayScore(){
    if (humanScore == 5) {
    scoreDisplay.textContent = `Final score Player: ${humanScore} PC:${computerScore}`;
    scoreRestart();
   } else if (computerScore == 5) {
    scoreDisplay.textContent = `Final score Player:${humanScore} PC:${computerScore}`;
    scoreRestart();
   } else {
    scoreDisplay.textContent = `Player:${humanScore} \n PC:${computerScore}`;
   }
}

function scoreRestart() {
    humanScore = 0;
    computerScore = 0;
}