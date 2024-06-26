function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
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
