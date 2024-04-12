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

  // get the expected key

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPress, expectedAlphabet);

  // cheaked matched or not

  if (playerPress === expectedAlphabet) {
    console.log("you get a point ");
  } else {
    console.log("you missed a life");
  }
}
document.addEventListener("keyup", handelKeyBordButtonKyeUp);

// functional way to do this

function continueGame() {
  // genarate a random alphabet
  const alphabet = getArandomAlphabet();
  console.log("your random alphabet :", alphabet);

  // random li genaratited to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set the kyebord color
  setBgColor(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
