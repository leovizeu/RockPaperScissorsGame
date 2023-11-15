const choices = ["rock", "paper", "scissors"]

function game () {
    //Play 5 rounds
    //console game
    playRound()
}

function playRound () {
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
}

function playerChoice () {
    //get input from player
    let input = prompt("Chose between Rock, Paper or Scissors")
}

function computerChoice () {
    return choices [Math.floor(Math.random() * choices.length)]
}

game()