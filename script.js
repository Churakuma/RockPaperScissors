function getComputerChoice() {
    computerChoice = ""
    // GET random integer
    randInt = Math.floor(Math.random() * (3) + 1)

    switch (randInt) {
        case 1:
            // IF RandInt == 1, computer selects Rock
            computerChoice = "Rock";
        break;

        case 2:
            // IF RandInt == 2, computer selects Paper
            computerChoice = "Paper";
        break;

        case 3:
            // IF RandInt == 3, computer selects Scissors
            computerChoice = "Scissors";
        break;
    }
    //console.log(computerChoice)
    return computerChoice
}

function getPlayerChoice() {
    playerChoice = ""
    
    input = prompt('Select either "Rock", "Paper" or "Scissors"').toLowerCase()

    switch (input) {
        case "rock":
            playerChoice = "Rock";
        break;

        case "paper":
            playerChoice = "Paper";
        break;

        case "scissors":
            playerChoice = "Scissors";
        break;
    }
    //console.log(playerChoice)
    return playerChoice
}

function playRound(computerSelection, playerSelection) {
    result = ""
    computerWins = 0
    playerWins = 0

    // UPDATE result to a tie if selection is the same
    if (playerSelection == computerSelection) {
        result = "You have Tied! Replay the round!"
    }

    // UPDATE result depending on player's selection of ROCK
    else if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            result = "Player wins!"
        }
        else {
            result = "Computer wins!"
        }
    }

    // UPDATE result depending on Player's selection of PAPER
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            result = "Player wins!"
        }
        else {
            result = "Computer wins!"
        }
    }

    // UPDATE result depeding on Player's selection of SCISSORS
    else {
        if (computerSelection == "Paper") {
            result = "Player wins!"
        }
        else {
            result = "Computer wins!"
        }
    }
    return result
}


function game() {
    counter = 0;
    playerScore = 0;
    computerScore = 0;

    // Play five rounds of the game
    do {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(playRound(computerSelection, playerSelection));

        if (result == "Player wins!") {
            counter++;
            playerScore++;
        }
        else if (result == "Computer wins!") {
            counter++;
            computerScore++;
        }
        else {
            counter = counter;
        }
        console.log("Round: " + counter)
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
    }
    while (counter < 5)
}

game()