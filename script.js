const btnsList = document.querySelectorAll("#btns-cont");

btnsList.forEach((btn) => btn.addEventListener("click", (e) => {
    playRound(e.target.id);
}))

let humanScore = 0;
let computerScore = 0;

const choiceCont = document.querySelector("#choice-cont");

const scoreCont = document.querySelector("#score-cont");

const mainCont = document.querySelector("#main-cont");

const humanChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");
const humanScorePara = document.createElement("p");
const computerScorePara = document.createElement("p");

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

const startMessage = document.querySelector(".startMsg");

function playRound(humanSelection) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    startMessage.style.display = "none";

    const humanChoice = humanSelection;
    const computerChoice = getComputerChoice();

    humanChoicePara.innerHTML = `<span>You:</span> ${humanChoice}`;
    computerChoicePara.innerHTML = `<span>Computer:</span> ${computerChoice}`;

    choiceCont.appendChild(humanChoicePara);
    choiceCont.appendChild(computerChoicePara);

    if (humanChoice === computerChoice) {
        displayScore();
        return;
    }

    switch (humanChoice) {
        case "rock": computerChoice === "paper" ?
            computerScore++ :
            humanScore++;
            break;

        case "paper": computerChoice === "rock" ?
            humanScore++ :
            computerScore++;
            break;

        case "scissors": computerChoice === "rock" ?
            computerScore++ :
            humanScore++;
            break;
    }

    displayScore();
}


function displayScore() {
    humanScorePara.innerHTML = `<span>Your Score:</span> ${humanScore}`;
    computerScorePara.innerHTML = `<span>Computer Score:</span> ${computerScore}`;

    scoreCont.appendChild(humanScorePara);
    scoreCont.appendChild(computerScorePara);

    if (humanScore === 5 || computerScore === 5) {
        displayFinalMsg();
    }
}

const finalMsg = document.createElement("p");
finalMsg.setAttribute("class", "msgEle");

const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "resetBtnEle")

function displayFinalMsg() {
    if (humanScore === 5 && computerScore === 5) {
        finalMsg.innerText = "It's a draw match :|";
        finalMsg.style.color = "blue";
    } else if (humanScore === 5) {
        finalMsg.innerText = "Hoooraayyyy!! Congratulations! You win :)";
        finalMsg.style.color = "#0ffd0f";
    } else if (computerScore === 5) {
        finalMsg.innerHTML = `<pre>Oh, no! You lose. :(
It's ok play again.</pre>`;
        finalMsg.style.color = "red";
    }

    mainCont.appendChild(finalMsg);

    resetBtn.innerText = "Reset";

    mainCont.appendChild(resetBtn);

    resetBtn.addEventListener("click", handleReset);
}

function handleReset() {
    startMessage.style.display = "block";

    humanScore = 0;
    computerScore = 0;

    choiceCont.innerHTML = "";
    scoreCont.innerHTML = "";

    finalMsg.remove();
    resetBtn.remove();
}