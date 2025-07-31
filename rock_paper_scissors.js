// start game
// choose rock, paper or scissors
function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper or scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Wrong input!");
    }
}

// computer chooses rock, paper or scissors randomly
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else if (computerChoice === 3) {
        return "scissors"
    };
}

// evaluate outcome
// evaluate score