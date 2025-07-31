// start game
console.log("==============");
let playerScore = 0;
let computerScore = 0;
playGame();

// play 5 rounds
function playGame() {
    for (let count = 1; count < 6; count++) {
    playRound();
    }
console.log("Final score, Player: " + playerScore + ", Computer: " + computerScore)
}

function playRound() {
    console.log("==============");
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Your choice: " + humanChoice)
    console.log("Computer's choice: " + computerChoice)
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

// evaluate outcome and update score
function getOutcome(x, y) {
    let outcome = String;
    // if player and computer chose the same, outcome is draw
    if (x === y) {
        outcome = "It's a draw!"
    // outcome for when player beats computer
    } else if (x === "rock" && y === "scissors" ||
               x === "scissors" && y === "paper" ||
               x === "paper" && y === "rock") {
        outcome = "You win! " + x + " beats " + y + ".";
        playerScore += 1;
    // outcome for when computer beats player
    } else if (x === "rock" && y === "paper" ||
               x === "scissors" && y === "rock" ||
               x === "paper" && y === "scissors") {
        outcome = "You lose! " + y + " beats " + x + ".";
        computerScore += 1;
    }

    console.log(outcome);
    console.log("Player score: " + playerScore)
    console.log("Computer score: " + computerScore)
}
