const Choices = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return Choices[randomIndex];
}

function getPlayerChoice() {
    const playerChoice = prompt("Enter rock, paper or scissors:");
    if (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors') {
        alert('Please enter \"rock\", \"paper\" or \"scissors\"');
        return getPlayerChoice();
    }
    return playerChoice.toLowerCase();
}

function singleRound(playerSelection, computerSelection) {
    console.log(`computerChoice: ${computerSelection}`);
    console.log(`playerChoice: ${playerSelection.toLowerCase()}`);
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log('Draw.');``
            return 'draw';
        }
        else if (computerSelection === 'paper') {
            console.log('You lost.');
            return 'lose';
        }
        else {
            console.log('You won!');
            return 'win';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You won!');
            return 'win';
        }
        else if (computerSelection === 'paper') {
            console.log('Draw.');
            return 'draw';
        }
        else {
            console.log('You lost.');
            return 'lose';
        }
    }
    else {
        if (computerSelection === 'rock') {
            console.log('You lost.');
            return 'lose';
        }
        else if (computerSelection === 'paper') {
            console.log('You won!');
            return 'win';
        }
        else {
            console.log('Draw.');
            return 'draw';
        }
    }
}

function game() {
    let getResult;

    for (let i = 0; i < 100; i++) {
        if (playerPoints - computerPoints == 3 || playerPoints == 5) {
            console.log('YOU WIN!');
            return;
        }
        else if (computerPoints - playerPoints == 3 || computerPoints == 5) {
            console.log('you lost.');
            return        
        }
        
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        
        getResult = singleRound(playerChoice, computerChoice);
        if (getResult === 'win') {
            playerPoints++;
            console.log(`player points: ${playerPoints}`);
        }
        else if (getResult === 'lose') {
            computerPoints++;
            console.log(`computer points: ${computerPoints}`);
        }
    }
}

game();