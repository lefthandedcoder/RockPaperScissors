// Function to randomly return either 'Rock,' 'Paper,' or 'Scissors'
function computerPlay(){
    const num = Math.floor(Math.random() * 3);
    if (num === 0) return 'Rock';
    else if (num === 1) return 'Paper';
    else if (num === 3) return 'Scissors';
    else return computerPlay();
}


// Plays a single round of rps, compares user response to computer play
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') return 'You win! Rock beats Scissors';
        else if (computerSelection == 'rock') return 'Tie!';
        else if (computerSelection == 'paper') return 'You lose! Paper beats Rock';
        else return 'Uh oh... Something\'s not right';
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') return 'You win! Paper beats Rock';
        else if (computerSelection == 'paper') return 'Tie!';
        else if (computerSelection == 'scissors') return 'You lose! Scissors beats Paper';
        else return 'Uh oh... Something\'s not right';
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') return 'You win! Scissors beats Paper';
        else if (computerSelection == 'scissors') return 'Tie!';
        else if (computerSelection == 'rock') return 'You lose! Rock beats Scissors';
        else return 'Uh oh... Something\'s not right';
    }
    else return 'Uh oh... Something\'s not right';
}

function game(){
    let user = 0;
    let pc = 0;
    let tie = 0;
    const click = " Click OK!"; 
    let result = "";
    let start = prompt("Let's play!" + click);
    while (pc < 3 || user < 3) { 
        let playerSelection = prompt("Type 'rock', 'paper', or 'scissors'");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)
        prompt(result + click);
        if (result.includes('win')) user++;
        else if (result.includes('lose')) pc++;
        else tie++;
        if (user > 2) {
            result = "Congratulations! You won!";
            prompt(result + click);
            console.log("Stats: PC: " + pc + " | User: " + user + " | Ties: " + tie);
            break;
        } else if (pc > 2) {
            result = "Gameover! You lost!";
            prompt(result + click);
            console.log("Stats: PC: " + pc + " | User: " + user + " | Ties: " + tie);
            break;
        } else continue;
    }
}

