function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getArandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstwxyz";
  const alphabets = alphabetString.split("");
//   console.log(alphabets);

  //   random number 0 to 25
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  const alphabet = alphabets[randomIndex];
  //   console.log(randomIndex, alphabet.toUpperCase());
  return alphabet;
}
