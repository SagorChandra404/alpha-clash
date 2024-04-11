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

// functional way to do this
function continueGame() {
  // genarate a random alphabet
  const alphabet = getArandomAlphabet();
  console.log("your random alphabet :", alphabet);

  // random li genaratited to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
