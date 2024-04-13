// function play() {
//   const homeSection = document.getElementById("home-screen");

//   // hidden the home section
//   // console.log(homeSection.classList);
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   // console.log(playGroundSection.classList);
//   playGroundSection.classList.remove("hidden");
// }

function handelKeyBordButtonKyeUp(event) {
  const playerPress = event.key;
  console.log("player press", playerPress);
  // stop the game
  if (playerPress === "Escape") {
    gameOver();
  }
  // get the expected key

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPress, expectedAlphabet);

  // cheaked matched or not

  if (playerPress === expectedAlphabet) {
    console.log("you get a point ");
    console.log("your point :", expectedAlphabet);

    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    // --------------------------------------------------------
    // update score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // // console.log("my current text", currentScore);
    // // increase the score by 1
    // const newScore = currentScore + 1;
    // // console.log(newScore);

    // currentScoreElement.innerText = newScore;
    // start a new round
    removeBgColor(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed a life");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // ---------------------------------------------------------------
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;

    // currentLifeElement.innerText = newLife;

    // new game and end game
  }
}
document.addEventListener("keyup", handelKeyBordButtonKyeUp);

// functional way to do this

function continueGame() {
  // genarate a random alphabet
  const alphabet = getArandomAlphabet();
  // console.log("your random alphabet :", alphabet);

  // random li genaratited to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set the kyebord color
  setBgColor(alphabet);
}

function play() {
  // hide everyyhing show only playground
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  // reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  // update final sore
  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("game-score", lastScore);

  // clear the last hilighted alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  console.log(currentAlphabet);
  removeBgColor(currentAlphabet);
}
