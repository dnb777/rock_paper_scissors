// ROCK, PAPER OR SCISSORS

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
