let playerText = document.querySelector('#playerText')

let choiceBtns = document.querySelectorAll(".choiceBtn")

let player;
let computer;

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

let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');
let playerScore = 0;
let computerScore = 0;

playerScoreText.textContent = `${playerScore}`;


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
        return (++playerScore);
    }else if (computer === 'Rock' && player === 'Scissors'||computer === 'Paper' && player === 'Rock'||computer === 'Scissors' && player === 'Paper'){
        roundWinnerText.textContent = `You lose ${computer} beats ${player}`;
        return (++computerScore);
    }  else if (computer === player) {
        roundWinnerText.textContent = 'its a tie';
    } else {
        roundWinnerText.textContent = `wrong input`
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







