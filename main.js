let humanScore=0, computerScore=0;
let btnR = document.querySelector(".btn-rock");
let btnP = document.querySelector(".btn-paper");
let btnS = document.querySelector(".btn-scissor");
let div = document.querySelector(".result");
function getComputerChoice() {
  const randNum = (Math.random()*100);
  if (randNum <=33){
    return "rock";
  }
  else if(randNum<66){
    return "paper";
  }
  else{
    return "scissor";
  }
}

  btnR.addEventListener("click", ()=>{
    playRound(btnR.value);
    return
  }
  );
  btnP.addEventListener("click", ()=>{
    playRound(btnP.value);
    return
  }
  );
  btnS.addEventListener("click", ()=>{
    playRound(btnS.value);
    return
  }
  );

function playRound(humanChoice){
  let computerChoice = getComputerChoice();
  if (humanChoice == "rock"){
    if(computerChoice == "paper"){
      computerScore++;
      div.textContent= 'Player score:'+ humanScore + ' Computer score:' + computerScore +' You lose! paper beat rock'
    }
    else if(computerChoice == "scissor"){
      humanScore++;
      div.textContent= 'Player score:'+ humanScore + ' Computer score:' + computerScore +' You win! rock beat scissor'
    }
    else{
      
      div.textContent= 'Player score:'+ humanScore +' Computer score:' + computerScore +'Tie! Both choose rock'
    
    }
  }
  
  if (humanChoice == "paper"){
    if(computerChoice == "scissor"){
      computerScore++;
      div.textContent = 'Player score:' + humanScore + 'Computer score:' + computerScore + ' You lose! scissor beat paper'

    }
    else if(computerChoice == "rock"){
    
      humanScore++;
      div.textContent = 'Player score:' + humanScore + ' Computer score:' + computerScore + ' You win! paper beat rock'

    }
    else{
      div.textContent = 'Player score:' + humanScore + ' Computer score:' + computerScore + 'Tie! Both choose paper'

    }
  } 
  
  if (humanChoice == "scissor"){
    if(computerChoice == "rock"){
      computerScore++;
      div.textContent = 'Player score:' + humanScore + ' Computer score:' + computerScore + ' You lose! rock beat scissor'

    }
    else if(computerChoice == "paper"){

      humanScore++;
      div.textContent = 'Player score:' + humanScore + 'Computer score:' + computerScore + ' You win! scissor beat paper'

    }
    else{
      
      div.textContent = 'Player score:' + humanScore + ' Computer score:' + computerScore + 'Tie! Both choose scissors'

    }
  }
  winner();
}

function playGame() {
  
}

//playGame();
function winner(){
  if(humanScore == 5){
    div.textContent = "You won! Relod to play again"
  }
  else if(computerScore== 5){
    div.textContent= "I won! Relod to play again"
  }
}
