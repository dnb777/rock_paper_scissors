// ROCK, PAPER OR SCISSORS

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch(random){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper o scissors").toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("invalid choice");
    } else {
        return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log(`It's a tie, both pick ${humanChoice}`);
    } else {
        console.log (`You lose, ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
}

