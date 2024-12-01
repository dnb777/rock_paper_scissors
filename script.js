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

function getHumanChoice() {
    let choice = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    if (choice != "piedra" && choice != "papel" && choice != "tijeras") {
        alert("Opcion no valida");
    } else {
        return choice;
    }
}
