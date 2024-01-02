let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    // GET random integer
    let randInt = Math.floor(Math.random() * (3) + 1)
    console.log(randInt)

    switch (randInt) {
        case 1:
            // IF RandInt == 1, computer selects Rock
            console.log('Computer selection is ROCK')
            return "ROCK";
        break;
        case 2:
            // IF RandInt == 2, computer selects Paper
            // IF RandInt == 1, computer selects Rock
            console.log('Computer selection is PAPER')
            return "PAPER";
        break;
        case 3:
            // IF RandInt == 3, computer selects Scissors
            // IF RandInt == 1, computer selects Rock
            console.log('Computer selection is SCISSORS')
            return "SCISSORS";
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    // UPDATE result to a tie if selection is the same
    if (playerSelection == computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// UI

const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const rockBtn = document.getElementById('rock-button')
const paperBtn = document.getElementById('paper-button')
const scissorBtn = document.getElementById('scissor-button')
const scoreInfo = document.getElementById('score-info')
const scoreMessage = document.getElementById('score-message')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const endgameModal = document.getElementById('endgameModal')
const endgameMessage = document.getElementById('endgameMsg')
const restartBtn = document.getElementById('restartBtn')
const overlay = document.getElementById('overlay')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndgameModal()
        return
    }
    console.log('Player selection is: ' + playerSelection)

    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = "You won!"
    } else {
        scoreInfo.textContent = "You lost!"
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊'
            break;
        case 'PAPER':
            playerSign.textContent = '✋'
            break;
        case 'SCISSORS':
            playerSign.textContent = '✌'
            break
    }
    switch(computerSelection) {
        case 'ROCK':
            computerSign.textContent = '✊'
            break;
        case 'PAPER':
            computerSign.textContent = '✋'
            break;
        case 'SCISSORS':
            computerSign.textContent = '✌'
            break
    }
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'player') {
      scoreMessage.textContent = `${capitaliseFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (roundWinner === 'computer') {
      scoreMessage.textContent = `${capitaliseFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitaliseFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore
    ? (endgameMessage.textContent = 'You won!')
    : (endgameMessage.textContent = 'You lost...')
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}