let playerScore = 0;
let computerScore = 0;

function game (){ 
for (i = 0; i < 5; ++i){ 
    let player = playerSelection()
    let computer = getComputerChoice()  
    round(computer, player);
    // console.log(computer, player, playerScore, computerScore);
}
};
game()

function declareWinner (playerScore, computerScore){
    if (playerScore > computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You won the match`) 
    } else if (playerScore < computerScore){
        console.log(`your score ${playerScore}, computer score ${computerScore}. You lost the match`) 
    }
}
declareWinner(playerScore, computerScore);

function playerSelection (){
    let userChoice = prompt('Rock, Paper or Scissors');
    let caseInsensitive = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    return (caseInsensitive);  
}



function getComputerChoice (){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    return(randomChoice);
}

function round (computer, player){
    if (player === 'Rock' && computer === 'Scissors'){
        console.log(`You win ${player} beats ${computer}, player score `);
        return (++playerScore);
    } else if (player === 'Paper' && computer === 'Rock'){
        console.log(`You win ${player} beats ${computer}, player score `);
        return (++playerScore);
    } else if (player === 'Scissors' && computer === 'Paper'){
        console.log(`You win ${player} beats ${computer}, player score `);
        return (++playerScore);
    }else if (computer === 'Rock' && player === 'Scissors'){
        console.log(`You lose ${computer} beats ${player}, player score `);
        return (++computerScore);
    } else if (computer === 'Paper' && player === 'Rock'){
        console.log(`You lose ${computer} beats ${player}, player score `);
        return (++computerScore);
    } else if (computer === 'Scissors' && player === 'Paper'){
        console.log('you lose, scissors beats paper');
        return (++computerScore);
    }  else if (computer === player) {
        console.log('its a tie')
    } else {
        console.log('wrong input')
    }
    }