let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  //   console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Do you wanna pick Rock, Paper or Scissors ?"
  ).toLowerCase();
  switch (humanChoice[0]) {
    case "r":
      humanChoice = "rock";
      break;
    case "p":
      humanChoice = "paper";
      break;
    case "s":
      humanChoice = "scissors";
      break;
  }
  //   console.log(humanChoice);
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  let annoucement;

  switch (computerChoice) {
    case "rock":
      if (humanChoice === "rock") {
        annoucement = "Ta3adol a zebi";
        break;
      } else if (humanChoice === "paper") {
        humanScore++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScore++;
        annoucement = "HIHIHIHIHI";
        break;
      }

    case "paper":
      if (humanChoice === "paper") {
        annoucement = "Ta3adol a zebi";
        break;
      } else if (humanChoice === "scissors") {
        humanScore++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScore++;
        annoucement = "HIHIHIHIHI";
        break;
      }
    case "scissors":
      if (humanChoice === "scissors") {
        annoucement = "Ta3adol a zebi";
        break;
      } else if (humanChoice === "rock") {
        humanScore++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScore++;
        annoucement = "HIHIHIHIHI";
        break;
      }
  }
  console.log(annoucement);
  //   console.log(
  //     "The score is : Computer " + computerScore + " Human " + humanScore
  //   );
}

function playGame() {
  while (roundCount < 6) {
    console.log("Round: " + roundCount);
    console.log(
      "Current score is Computer " + computerScore + " Human " + humanScore
    );
    playRound(getComputerChoice(), getHumanChoice());
    roundCount++;
  }

  console.log(
    "The final score is Computer " + computerScore + " Human " + humanScore
  );
  let maxScore = Math.max(humanScore, computerScore);
  switch (maxScore) {
    case humanScore:
      console.log("You have won");
      break;
    case computerScore:
      console.log("Chuha a zebi");
      break;
    default:
      console.log("Ta3adol d zeb");
  }
}

playGame();
