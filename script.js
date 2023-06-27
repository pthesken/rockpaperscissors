//play rps
// report a winner
// r,p,s
//handle winning losing tieing

//ioce
//I inputs: what goes into function? arguements and their types?
//O outputs: what comes out of funtion? what does it return? what type?
//C constraints: limitations, ie memory scalability etc
//E edge cases: unexpected inputs, error handling

//I none
//O return r,p,s: one of three strings
//C skip
//E none

const getComputerChoice = () => {
  // generate random number
  //associate each number with one of the three choices
  // randomly return the chosen choice

  const randNum = Math.ceil(Math.random() * 3);
  // if (randNum === 1) {
  //   return "Rock";
  // } else if (randNum === 2) {
  //   return "Scissors";
  // } else {
  //   return "Paper";
  // }

  switch (randNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
    default:
      return "scissors";
  }
};
const getPlayerChoice = () => {
  let playerChoice = prompt("Enter 'rock', 'paper', or 'scissors' to play.");
  // If player hits cancel
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', or 'scissors' to play.");
    // If player hits cancel
    if (playerChoice === null) {
      return;
    }
  }

  return playerChoice;
};

//I playerSelection and computerSelection, strings
//O a string declaring win, lose, tie
//C n/a
//E case of playerSelection, player inputting nothing/something unexpected

const playRound = (playerSelection, computerSelection) => {
  //compare playerSelction and computerSelection
  //determine who wins
  // return the outcome
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock");

  const computerWins =
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock");

  if (playerWins) {
    console.log(
      `You win this round! ${playerSelection} beats ${computerSelection}.`
    );
    return "Player wins!";
  } else if (computerWins) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection};`);
    return "Computer wins!";
  } else {
    console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
    return "It's a tie";
  }
};

//plays 5 games and decides the winner
//I- none
//O - the winner or loser, or its a tie
//C- skip
//E- what if player cancels game

const game = () => {
  let computerTotalWins = 0;
  let playerTotalWins = 0;
  let ties = 0;

  for (let round = 1; round <= 5; round++) {
    // get computer choice
    let computerChoice = getComputerChoice();
    // get player choice
    let playerChoice = getPlayerChoice();
    // If player hits cancel
    if (!playerChoice) {
      console.log("Game canceled");
      return;
    }
    //let playerChoice = prompt(
    // "Let's play rock, paper, scissors! Select rock, paper, or scissors."

    //play a round
    let roundOutcome = playRound(playerChoice, computerChoice);
    if (roundOutcome === "Player wins!") {
      playerTotalWins++;
    } else if (roundOutcome === "Computer wins!") {
      computerTotalWins++;
    } else {
      ties++;
    }
    //repeat 5 times
    //get track of each round
    //return overall winner
  }
  if (playerTotalWins > computerTotalWins) {
    console.log("You win the game! Refresh to play again!");
  } else if (computerTotalWins > playerTotalWins) {
    console.log("You lose the game! Refresh to play again!");
  } else {
    console.log("The game is a tie! Refresh to play again!");
  }
};

game();

// probably remove lower line?
//let outcome = playRound("paper", "rock");

//console.log(computerChoice);
//console.log(outcome);
