const Choices = ["rock", "paper", "scissors"];

let playerWon = false;
let gameOver= false;
let playerPoints = 0;
let computerPoints = 0;

let computerChoice;
let playerChoice;

const rockImage = document.querySelector('.rock-image');

const middleContainer = document.querySelector('.middle-container');
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

function playing() {
    middleContainer.classList.remove('middle-container');
    middleContainer.classList.add('playing');
    middleContainer.innerHTML = `
<div class="player-playing">
    <p>
        Your choice:
    </p>
    <img src="./images/${playerChoice}.png" alt="player-choice-image">
</div>
<div class="computer-playing">
<p>
Robot's choice:
</p>
<img src="./images/${computerChoice}.png" alt="computer-choice-image">
</div>`
}

function getGameOver(playerWonBool) {
    const mainContainer = document.querySelector('body');
    if (playerWonBool) {
        mainContainer.innerHTML = `
        <div class="winning-screen">
        <p class="animation-text">
        YOU WON.
        </p>
        <button class="try-again">
        Try again.
        </button>
        </div>`
    }
    else {
        mainContainer.innerHTML = `
        <div class="losing-screen">
        <p class="animation-text">
        YOU LOST.
        </p>
        <button class="try-again">
        Try again.
        </button>
        </div>`
    }
    
    const tryAgain = document.querySelector('.try-again');
    
    tryAgain.addEventListener('click', function() {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        playerWon = false;
        gameOver = false;
        playerPoints = 0;
        computerPoints = 0;
    
        // Refresh the page
        location.reload();
    });
}

rockChoice.addEventListener("click", function() {
    if (gameOver) {
        console.log("game has finished");
        getGameOver(gameOver);
        return;
    }
    playerChoice = "rock";
    console.log("rock");
    playerRound();
    playing();
});
paperChoice.addEventListener("click", function() {
    if (gameOver) {
        console.log("game has finished");
        return;
    }
    console.log("paper");
    playerChoice = "paper";
    playerRound();
    playing();
});
scissorsChoice.addEventListener("click", function() {
    if (gameOver) {
        console.log("game has finished");
        return;
    }
    console.log("scissors");
    playerChoice = "scissors";
    playerRound();
    playing();
});

function playerRound() {
    computerChoice = getComputerChoice();
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
        playerWon = true;
        gameOver = true;
        setTimeout(() => {
            getGameOver(playerWon);
        }, 700);
    }
    else if (computerPoints - playerPoints == 3 || computerPoints == 5) {
        console.log('you lost.');
        playerWon = false;
        gameOver = true;
        setTimeout(() => {
            getGameOver(playerWon);
        }, 700);
    }
}
