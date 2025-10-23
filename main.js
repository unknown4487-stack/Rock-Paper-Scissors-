let humanScore=0, computerScore=0;

function getComputerChoice() {
  const randNum = (Math.random()*100);
  if (randNum <=33){
    return "rock";
  }
  else if(randNum<66){
    return "paper";
  }
  else{
    return "scissors";
  }
}

function getHumanChoice(){
  const choice = prompt("Enter the choice");
  return choice;
}


function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock"){
    if(computerChoice == "paper"){
      console.log("you lose! paper beat rock")
      computerScore++;
    }
    else if(computerChoice == "scissors"){
      console.log("you win! rock beat scissors");
      humanScore++;
    }
    else{
      console.log("Tie! Both choose rock");
    }
  }
  
  if (humanChoice == "paper"){
    if(computerChoice == "scissors"){
      console.log("you lose! scissors beat paper")
      computerScore++;
    }
    else if(computerChoice == "rock"){
      console.log("you win! paper beat rock");
      humanScore++;
    }
    else{
      console.log("Tie! Both choose paper");
    }
  } 
  
  if (humanChoice == "scissors"){
    if(computerChoice == "rock"){
      console.log("you lose! rock beat scissors")
      computerScore++;
    }
    else if(computerChoice == "paper"){
      console.log("you win! scissors beat paper");
      humanScore++;
    }
    else{
      console.log("Tie! Both choose scissors");
    }
  }
}

function oneRound() {
  const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
playRound(humanSelection, computerSelection);
}
function playGame() {
  oneRound();
  oneRound();
  oneRound();
  oneRound();
  oneRound();
  if(humanScore > computerScore){
    console.log("Congratulations! you win");
  }
  else if(humanScore < computerScore){
    console.log("You lose! Try again");
  }
  else{
    console.log("It's tie. Play again");
  }
}

playGame();

