let options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

let computerSelection = computerPlay();
let playerSelection = "Paper";

function singleRound(player, computer) {
    let message = "";
    if (playerSelection == computerSelection) {
        message = "It's a tie!";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        message = "You won! " + playerSelection + " beats " + computerSelection;
    } else {
        message = "You lost! " + computerSelection + " beats " + playerSelection;
    }

    return message;
}


