let playerText = document.querySelector('#playerText')
let computerText = document.querySelector('#computerText')
let choiceBtns = document.querySelectorAll(".choiceBtn")
let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');
let player;
let computer;
let playerScore = 0;
let computerScore = 0;

//el jugador escoge piedra papel o tijera
choiceBtns.forEach(button => button.addEventListener("click", () => {
       player = button.textContent;
       playerText.textContent = `Player: ${player}`;
       getComputerChoice()
    } ))  


//la computer escoge
function getComputerChoice (){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let computer = choice[Math.floor(Math.random()*choice.length)];
    computerText.textContent = `Computer: ${computer}`;
    round (player, computer)
}




function scoreCount (playerScore, computerScore){
    if (playerScore > computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You won the match`) 
    } else if (playerScore < computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You lost the match`) 
    }
}




function round (player, computer){
    let roundWinnerText = document.querySelector('#roundWinnerText')
    if (player === 'Rock' && computer === 'Scissors'|| player === 'Paper' && computer === 'Rock'||player === 'Scissors' && computer === 'Paper'){
        roundWinnerText.textContent = `You win ${player} beats ${computer}`;
        playerScoreText.textContent = `Player score: ${++playerScore}`;
    }else if (computer === 'Rock' && player === 'Scissors'||computer === 'Paper' && player === 'Rock'||computer === 'Scissors' && player === 'Paper'){
        roundWinnerText.textContent = `You lose ${computer} beats ${player}`;
        computerScoreText.textContent = `Computer score: ${++computerScore}`;
    }  else if (computer === player) {
        roundWinnerText.textContent = 'its a tie';
    } 
    }
    
    








// function game (){ 
// for (i = 0; i < 5; ++i){ 
//     let player = playerSelection()
//     let computer = getComputerChoice()  
//     round(computer, player);
//     // console.log(computer, player, playerScore, computerScore);
// }
// };







