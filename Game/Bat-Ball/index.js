let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `No of mathches Won:${score.win},
    Lost:${score.lost},
    Tie:${score.tie}`;
  },
};

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return `Bat`;
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return `Ball`;
  } else {
    return `Stump`;
  }
}

function getResult(userMove, computrMove) {
  if (userMove === "Bat") {
    if (computrMove === "Ball") {
      score.win++;
      return "user won.";
    } else if (computrMove === "Bat") {
      score.tie++;
      return `It's a tie.`;
    } else if (computrMove === "Stump") {
      score.lost++;
      return `computer has won.`;
    }
  } else if (userMove === "Ball") {
    if (computrMove === "Stump") {
      score.win++;
      return "user won.";
    } else if (computrMove === "Ball") {
      score.tie++;
      return `It's a tie.`;
    } else if (computrMove === "Bat") {
      score.lost++;
      return `computer has won.`;
    }
  } else if (userMove === "Stump") {
    if (computrMove === "Bat") {
      score.win++;
      return "user won.";
    } else if (computrMove === "Stump") {
      score.tie++;
      return `It's a tie.`;
    } else if (computrMove === "Ball") {
      score.lost++;
      return `computer has won.`;
    }
  }
}

function showResult(userMove, computrMove, result) {
  alert(`you have chosen ${userMove}. Computer choice is ${computrMove}
    
    ${result}
    
    won: ${score.win}, 
     Lost:${score.lost},
     Tie:${score.tie}`);
}
