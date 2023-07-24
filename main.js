const Choices = ["rock", "paper", "scissors"];


let gameOver= false;
let playerPoints = 0;
let computerPoints = 0;
let playerChoice;

let playerScoreElement = document.querySelector(".player-score");
let computerScoreElement = document.querySelector(".computer-score");

const rockChoice = document.querySelector("#rock-choice");
const paperChoice = document.querySelector("#paper-choice");
const scissorsChoice = document.querySelector("#scissors-choice");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return Choices[randomIndex];
}

// function getPlayerChoice() {
//     const playerChoice = prompt("Enter rock, paper or scissors:");
//     if (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors') {
//         alert('Please enter \"rock\", \"paper\" or \"scissors\"');
//         return getPlayerChoice();
//     }
//     return playerChoice.toLowerCase();
// }

rockChoice.addEventListener("click", function() {
    console.log("rock");
    playerChoice = "rock";
    playerRound();
});
paperChoice.addEventListener("click", function() {
    console.log("paper");
    playerChoice = "paper";
    playerRound();
});
scissorsChoice.addEventListener("click", function() {
    console.log("scissors");
    playerChoice = "paper";
    playerRound();
});

function playerRound() {
    if (gameOver) {
        console.log("game has finished");
        return;
    }
    let computerChoice = getComputerChoice();
    console.log(`computer choice: ${computerChoice}`);

    let result = singleRound(playerChoice, computerChoice);

    if (result === 'win') {
        playerPoints++;
        playerScoreElement.textContent = playerPoints;
    }
    else if (result === 'lose') {
        computerPoints++;
        computerScoreElement.textContent = computerPoints;
    }
    console.log(`Player points: ${playerPoints}, Computer points: ${computerPoints}`);

    game();
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("draw");
        return 'draw';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You won!');
        return 'win';
    }
    else {
        console.log('You lost.');
        return 'lose';
    }
}

function game() {
    if (playerPoints - computerPoints == 3 || playerPoints == 5) {
        console.log('YOU WIN!');
        gameOver = true;
        return;
    }
    else if (computerPoints - playerPoints == 3 || computerPoints == 5) {
        console.log('you lost.');
        gameOver = true;
        return;
    }
}