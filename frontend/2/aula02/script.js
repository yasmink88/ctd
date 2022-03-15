// capture players choice (1 (Rock),2 (Paper),3 (Scissors))

let choices = ["Rock", "Paper", "Scissors"];

let player1, player2
let userScore = 0;
let computerScore = 0;



function startGame() {
  player1 = prompt("Rock, Paper or Scissors?");
  player2 = choices[Math.floor(Math.random(choices) * choices.length)];
  
  alert(`You chose ${player1} and the computer chose ${player2}`);

  if (player1 == player2) {
    alert("That's a tie! No points scored!");
    alert(`Your score: ${userScore}, Computer score: ${computerScore}`)
   
  } else if (
    (player1 == "Paper" && player2 == "Rock") ||
    (player1 == "Rock" && player2 == "Scissors") ||
    (player1 == "Scissors" && player2 == "Paper")
  ) {
    userScore++;
    alert(`You won this round! Your score is: ${userScore}`);
  } else if (
    (player2 == "Paper" && player1 == "Rock") ||
    (player2 == "Rock" && player1 == "Scissors") ||
    (player2 == "Scissors" && player1 == "Paper")
  ) {
    computerScore++;
    alert(`You lost this round! Computer score is: ${computerScore}`);
  }

  gameScore()
  
}

function gameScore() {
    if (userScore < 2 || computerScore < 2) {
        alert("Next round!");
    }
    else if (userScore == 2) {
        alert("You win!");

      } else if (computerScore == 2) {
        alert("Computer wins!");
      }
}


startGame()

