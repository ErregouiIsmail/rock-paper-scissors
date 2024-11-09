let humanScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 1;
let humanChoice;

const parent = document.querySelector("#parent");
const BoardAnoucement = document.querySelector("#BoardAnoucement");
const roundNumber = document.querySelector("#roundNumber");
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
//TEST

roundNumber.textContent = roundCount;
computerScore.textContent = computerScoreCount;
yourScore.textContent = humanScoreCount;

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

function playRound(computerChoice, humanChoice) {
  let annoucement;
  BoardAnoucement.textContent = "";
  switch (computerChoice) {
    case "rock":
      if (humanChoice === "rock") {
        annoucement = "It's a tie.";
        break;
      } else if (humanChoice === "paper") {
        humanScoreCount++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScoreCount++;
        annoucement = "You have lost the round.";
        break;
      }

    case "paper":
      if (humanChoice === "paper") {
        annoucement = "It's a tie.";
        break;
      } else if (humanChoice === "scissors") {
        humanScoreCount++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScoreCount++;
        annoucement = "You have lost the round.";
        break;
      }
    case "scissors":
      if (humanChoice === "scissors") {
        annoucement = "It's a tie.";
        break;
      } else if (humanChoice === "rock") {
        humanScoreCount++;
        annoucement = "You have won this round";
        break;
      } else {
        computerScoreCount++;
        annoucement = "You have lost the round.";
        break;
      }
  }
  if (roundCount != 5) {
    BoardAnoucement.textContent = annoucement;
  } else {
    let maxScore = Math.max(humanScoreCount, computerScoreCount);
    switch (maxScore) {
      case humanScoreCount:
        BoardAnoucement.textContent = "You have won the game.";
        break;
      case computerScoreCount:
        BoardAnoucement.textContent = "You have lost the game.";
        break;
      default:
        BoardAnoucement.textContent = "The game ended on a tie.";
    }
  }
}

const play = function (event) {
  const target = event.target;
  if (roundCount < 6) {
    switch (target.id) {
      case "rock":
        humanChoice = "rock";
        break;
      case "paper":
        humanChoice = "paper";
        break;
      case "scissors":
        humanChoice = "scissors";
        break;
    }
    playRound(getComputerChoice(), humanChoice);
    roundNumber.textContent = roundCount++;
    computerScore.textContent = computerScoreCount;
    yourScore.textContent = humanScoreCount;
  }
};

parent.addEventListener("click", play);

startOver.addEventListener("click", () => {
  humanScoreCount = 0;
  computerScoreCount = 0;
  roundCount = 1;
  roundNumber.textContent = roundCount;
  computerScore.textContent = computerScoreCount;
  yourScore.textContent = humanScoreCount;
  BoardAnoucement.textContent = "";
});
