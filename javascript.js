function getComputerChoice(){

    let num = Math.random()
    let hand = ""

    if (num<(1/3)) {
        hand="rock";

    } else if (num>=(1/3) && num<(2/3)) {
        hand="paper";

    } else {
        hand="scissors";
    }
    console.log(num)

return hand;

}

function getHumanChoice(){
    let hand;
    const options = ["rock", "paper", "scissors"];

    while (!options.includes(hand) ) {
        hand = prompt("Choose an option: rock, paper or scissors");
    }
    return hand;
}

function playGame(computerSelection, humanSelection){




    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice ) {
            console.log("Draw!");
        }   else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ){
            humanScore = humanScore + 1;
            console.log("Human!");
        } else{
            computerScore = computerScore + 1;
            console.log("Computer!");
        }

    }
    playRound(humanSelection, computerSelection);

}
let humanScore = 0;
let computerScore = 0;

let i = 0;
while (i < 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playGame(computerSelection, humanSelection);
    i++;
  }
if (humanScore > computerScore) {
    console.log("Human wins");
}   else if (computerScore > humanScore){
    console.log("Computer wins");
}   else {
    console.log("Draw");
}


