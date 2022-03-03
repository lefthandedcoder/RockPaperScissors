const statsBar = document.getElementById("stats").innerHTML;
const roundResults = document.getElementById("round-result").innerHTML;
let user = 0;
let pc = 0;
let ties = 0;
const win = 'You win! ';
const lose = 'You lose! ';
const tie = 'Tie!';
const rbs = 'Rock beats Scissors';
const sbp = 'Scissors beats Paper';
const pbr = 'Paper beats Rock';
const error = 'Uh oh... Something\'s not right';

// Function to randomly return either 'Rock,' 'Paper,' or 'Scissors'
function computerPlay(){
    const num = Math.floor(Math.random() * 3);
    if (num === 0) return 'rock';
    else if (num === 1) return 'paper';
    else if (num === 3) return 'scissors';
    else return computerPlay();
}

function loseRound(expl) {
    roundResults = lose + expl;
    pc++;
    stats(pc, user, ties);
}

function winRound(expl) {
    roundResults = win + expl;
    user++;
    stats(pc, user, ties);
}

function tie() {
    roundResults = tie;
    tie++;
    stats(pc, user, ties);
}

// Plays a single round of rps, compares user response to computer play
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            winRound(rbs);
        } else if (computerSelection == 'rock') {
            tie();
        } else if (computerSelection == 'paper'){
            loseRound(pbr);
        } else roundResults = error;
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            winRound(pbr);
        } else if (computerSelection == 'paper') {
            tie();
        } else if (computerSelection == 'scissors'){
            loseRound(sbp);
        } else roundResults = error;
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper'){
            winRound(sbp);
        } else if (computerSelection == 'scissors') {
            tie();
        } else if (computerSelection == 'rock'){
            loseRound(rbs);
        } else roundResults = error;
    } else roundResults = error;
}

function stats(pc, user, tie){
    prompt("Stats: PC: " + pc + " | User: " + user + " | Ties: " + tie);
}

// Actual game, uses while loop until someone wins
function game(playerSelection){
    let computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);
}