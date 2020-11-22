const items = ["rock", "paper", "scissors"];
function computerPlay(){
    return items[Math.round(2*Math.random())]
}

function playRound(playerSelection, computerSelection){
    const p1= items.indexOf(playerSelection.toLowerCase()) 
    const p2= items.indexOf(computerSelection.toLowerCase())
    
    if (p1 ===p2){
        return 'tie!'
    }
    // wrap head 
    if (p1===0 && p2 === items.length-1) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    if(p1 < p2){
        return `You lose! ${playerSelection} loses to ${computerSelection}`
    }else{
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("What's your choice?"),computerPlay()))
    }
}

console.log(playRound('rock','paper'))