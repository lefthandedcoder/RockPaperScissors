const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
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
    document.getElementById('round-result').innerHTML = lose + expl;
    pc++;
    stats(pc, user, ties);
}

function winRound(expl) {
    document.getElementById('round-result').innerHTML = win + expl;
    user++;
    stats(pc, user, ties);
}

function tieRound() {
    document.getElementById('round-result').innerHTML = tie;
    ties++;
    stats(pc, user, ties);
}

// Plays a single round of rps, compares user response to computer play
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            winRound(rbs);
        } else if (computerSelection == 'rock') {
            tieRound();
        } else if (computerSelection == 'paper'){
            loseRound(pbr);
        } else roundResults = error;
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            winRound(pbr);
        } else if (computerSelection == 'paper') {
            tieRound();
        } else if (computerSelection == 'scissors'){
            loseRound(sbp);
        } else roundResults = error;
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper'){
            winRound(sbp);
        } else if (computerSelection == 'scissors') {
            tieRound();
        } else if (computerSelection == 'rock'){
            loseRound(rbs);
        } else roundResults = error;
    } else roundResults = error;
}

function display(){
    document.getElementById('stats').style.display = 'block';
    document.getElementById('round-result').style.display = 'block';
}

function stats(pc, user, tie){
    document.getElementById('stats').innerHTML = "Stats: PC: " + pc + " | User: " + user + " | Ties: " + tie;
}

function gameResult(final){
    document.getElementById('game-result').innerHTML = final;
    pc = 0;
    user = 0;
    ties = 0;
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    document.getElementById('round-result').style.display = 'none';
}

// Actual game, uses while loop until someone wins
function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (pc > 2) gameResult('Gameover! You lose!');
    else if (user > 2) gameResult('Congrats! You win!');
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', () => {
    display();
    if (button.id != 'reset') game(button.id);
    else location.reload();    
}));