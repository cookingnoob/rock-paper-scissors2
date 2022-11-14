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






















function round (player, computer){
    let roundWinnerText = document.querySelector('#roundWinnerText')
    if (player === 'Rock' && computer === 'Scissors'){
        roundWinnerText.textContent = `You win ${player} beats ${computer}`;
        return (++playerScore);
    } else if (player === 'Paper' && computer === 'Rock'){
        roundWinnerText.textContent = `You win ${player} beats ${computer}`;
        return (++playerScore);
    } else if (player === 'Scissors' && computer === 'Paper'){
        roundWinnerText.textContent = `You win ${player} beats ${computer}`;
        return (++playerScore);
    }else if (computer === 'Rock' && player === 'Scissors'){
        roundWinnerText.textContent = `You lose ${computer} beats ${player}`;
        return (++computerScore);
    } else if (computer === 'Paper' && player === 'Rock'){
        roundWinnerText.textContent = `You lose ${computer} beats ${player}`;
        return (++computerScore);
    } else if (computer === 'Scissors' && player === 'Paper'){
        roundWinnerText.textContent = 'you lose, scissors beats paper';
        return (++computerScore);
    }  else if (computer === player) {
        roundWinnerText.textContent = 'its a tie';
    } else {
        roundWinnerText.textContent = `wrong input`
    }
    
    }





























let playerScore = 0;
let computerScore = 0;

// function game (){ 
// for (i = 0; i < 5; ++i){ 
//     let player = playerSelection()
//     let computer = getComputerChoice()  
//     round(computer, player);
//     // console.log(computer, player, playerScore, computerScore);
// }
// };


function declareWinner (playerScore, computerScore){
    if (playerScore > computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You won the match`) 
    } else if (playerScore < computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You lost the match`) 
    }
}
declareWinner(playerScore, computerScore);













