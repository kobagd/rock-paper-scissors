console.log("==============");

// start game
let playerScore = 0;
let computerScore = 0;

playRound();

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice)
    console.log(computerChoice)
    getOutcome(humanChoice, computerChoice);
}

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
function getOutcome(x, y) {
    let outcome = String;
    // if player and computer chose the same, outcome is draw
    if (x === y) {
        outcome = "It's a draw!"
    // outcome for when player beats computer
    } else if (x === "rock" && y === "scissors" ||
               x === "scissors" && y === "paper" ||
               x === "paper" && y === "rock") {
        outcome = "You win! " + x + " beats " + y + "."
    // outcome for when computer beats player
    } else if (x === "rock" && y === "paper" ||
               x === "scissors" && y === "rock" ||
               x === "paper" && y === "scissors") {
        outcome = "You lose! " + y + " beats " + x + "."
    }

    console.log(outcome);
}

// evaluate score