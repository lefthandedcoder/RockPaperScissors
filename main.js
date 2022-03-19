const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundResult = document.getElementById('round-result');
const gameEnd = document.getElementById('game-result');
const pcScore = document.getElementById('pc-score');
const playerScore = document.getElementById('player-score');
const playerImg = document.getElementById('player-img');
const pcImg = document.getElementById('pc-img');
const rockImg = "images\\rock.png";
const scissorsImg = "images\\scissors.png";
const paperImg = "images\\paper-plane.png";
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
    else if (num === 2) return 'scissors';
    else return computerPlay();
}

function loseRound(expl) {
    roundResult.style.color = "red";
    roundResult.innerHTML = lose + expl;
    pc++;
    stats(pc, user, ties);
}

function winRound(expl) {
    roundResult.style.color = "green";
    roundResult.innerHTML = win + expl;
    user++;
    stats(pc, user, ties);
}

function tieRound() {
    roundResult.style.color = "black";
    roundResult.innerHTML = tie;
    ties++;
    stats(pc, user, ties);
}

// Plays a single round of rps, compares user response to computer play
function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock') {
        playerImg.src = rockImg;
        if (computerSelection == 'scissors'){
            pcImg.src = scissorsImg;
            winRound(rbs);
        } else if (computerSelection == 'rock') {
            pcImg.src = rockImg;
            tieRound();
        } else if (computerSelection == 'paper'){
            pcImg.src = paperImg;
            loseRound(pbr);
        } else roundResult = error;
    } else if (playerSelection == 'paper') {
        playerImg.src = paperImg;
        if (computerSelection == 'rock'){
            pcImg.src = rockImg;
            winRound(pbr);
        } else if (computerSelection == 'paper') {
            tieRound();
        } else if (computerSelection == 'scissors'){
            pcImg.src = scissorsImg;
            loseRound(sbp);
        } else roundResult = error;
    } else if (playerSelection == 'scissors') {
        playerImg.src = scissorsImg;
        if (computerSelection == 'paper'){
            pcImg.src = paperImg;
            winRound(sbp);
        } else if (computerSelection == 'scissors') {
            pcImg.src = scissorsImg;
            tieRound();
        } else if (computerSelection == 'rock'){
            pcImg.src = rockImg;
            loseRound(rbs);
        } else roundResult = error;
    } else roundResult = error;
}

function display(){
    document.getElementById('round-result').style.display = 'block';
    document.getElementById('game-result').style.display = 'none';
}

function stats(pc, user){
    playerScore.innerHTML = user;
    pcScore.innerHTML = pc;
}

function gameResult(final){
    gameEnd.innerHTML = final;
    pc = 0;
    user = 0;
    ties = 0;
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    roundResult.style.display = 'none';
    document.getElementById('reset').style.gap = 0;
    document.getElementById('round-result').style.display = 'none';
    document.getElementById('screen').style.display = 'none';
    document.getElementById('game-result').style.fontSize = "large";
}

// Actual game, uses while loop until someone wins
function game(playerSelection){
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (pc > 2) {
        gameResult('Gameover! You lose!');
        document.getElementById('game-result').style.display = 'block';
        document.getElementById('player').style.display = 'none';
        document.getElementById('pc').style.display = 'block';
        document.getElementById('pc-score').style.display = 'none';
        pcImg.src = "images\\ai.png";
        pcImg.style.maxWidth = '10vw';
        document.getElementById('screen').style.display = 'block';
        document.getElementById('game-result').style.color = "red";
    }
    else if (user > 2) {
        gameResult('Congrats! You win!');
        document.getElementById('game-result').style.display = 'block';
        document.getElementById('player').style.display = 'block';
        playerImg.src = "images\\headband.png";
        playerImg.style.maxWidth = '10vw';
        document.getElementById('player-score').style.display = 'none';
        document.getElementById('pc').style.display = 'none';
        document.getElementById('screen').style.display = 'block';
        document.getElementById('game-result').style.color = "green";
    }
};

const buttons = document.querySelector('#buttons').querySelectorAll('img');

buttons.forEach((button) => button.addEventListener('click', () => {
    display();
    if (button.id != 'reset') game(button.id);
    else location.reload();    
}));