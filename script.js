let humanScore = 0;
let computerScore = 0

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 100);

    if (randomValue >= 0 && randomValue <= 33) {
        return "rock"
    } else if (randomValue >= 34 && randomValue <= 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const userChoice = prompt("Enter your choice");

    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return;
    } else if (humanChoice === "rock") {
        computerChoice === "paper" ?
            computerScore++ :
            humanScore++;

    } else if (humanChoice === "paper") {
        computerChoice === "rock" ?
            humanScore++ :
            computerScore++;

    } else {
        computerChoice === "rock" ?
            computerScore++ :
            humanScore++;
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);    
}

for (let i = 0; i < 5; i++) {   
    playGame()
}

if (humanScore === computerScore) {
    console.log("It's a draw match :|");
} else if (humanScore > computerScore) {
    console.log("Hoooraayyyy!! Congratulations! You win :)");
} else {
    console.log("Oh, no! You lose. :( \nIt's ok play again.");
}

