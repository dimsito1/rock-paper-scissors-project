const Choices = {
    ROCK: "rock",
    PAPER: "pepper",
    SCISSORS: "scissors"
};

function getComputerChoice() {
    const randomIndex = Math.random() * 3;
    const choiceKeys = Object.keys(Choices);
    const randomChoiceKey = choiceKeys[randomIndex];
    return raadnomChoiceKey;
}

const computerChoice = getComputerChoice();
console.log(computerChoice);
alert(computerChoice);