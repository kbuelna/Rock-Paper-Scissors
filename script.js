let options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

