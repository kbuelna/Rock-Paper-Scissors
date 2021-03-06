let playerSelection = "";
let computerSelection = "";

function selections() {
   playerSelection = window.prompt("Rock, Paper or Scissors?");
   computerSelection = computerPlay();
}

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function singleRound(player, computer) {
    let message = "";
    if (playerSelection == computerSelection) {
        message = "It's a tie!";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        message = "You won! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
    } else {
        message = "You lost! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
    }

    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Rock, Paper or Scissors?");
        computerSelection = computerPlay();
        console.log(singleRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log("Congratulations, you won! Final score is You: " + playerScore + " Computer: " + computerScore); 
    } else if (playerScore < computerScore) {
        console.log("Oh no, you lost! Final score is You: " + playerScore + " Computer: " + computerScore);
    } else {
        console.log("It was a tie! Final score is You: " + playerScore + " Computer: " + computerScore);
    }
}

