
// Initialize some variables
let counter = 0;
let startTime;
let wordObjectList;
let secretWord;
let initialHint;
let wordFunction;
let wordDetail;

// Initialize list and guess arrays
let guesses = [];
let hints = [];

// Add an event listener to the play button
const playButton = document.querySelector("#play");
playButton.addEventListener("click", initializeGame);

// Create the game interface
const gameContainer = document.getElementById("game-container");
const content = document.createElement("div");
content.innerHTML = `
  <p id="hint"></p>
  <label for="guess">Your guess:</label>
  <input type="text" id="guess" placeholder="Enter your guess">
  <button id="submitButton" onclick="submitGuess()">Submit Guess</button>
  <p id="result"></p>
  <p id="counter">Guesses: 0/10</p>
  <p id="time">Time spent: 00:00:00</p>`;

// Get the JSON file from an external database  
async function getObjectList() {
  const url = "https://run.mocky.io/v3/36bdcec5-701c-46b4-bca4-c39882f85213";
  const response = await fetch(url);
  let wordList = await response.json();
  return wordList;
}

async function initializeGame() {
  wordObjectList = await getObjectList();

  // Set up a random word
  const randomObject = getRandomWordObject();
  secretWord = randomObject.word.toLowerCase();
  wordFunction = randomObject.grammaticalFunction;
  wordDetail = randomObject.additionalDetail;

  initialHint = getInitialHint(secretWord);

  // Remove the click event listener after initializing the game
  playButton.removeEventListener("click", initializeGame);

  // Display gameContainer content
  displayGameInterface();
}

function getRandomWordObject() {
  const randomIndex = Math.floor(Math.random() * wordObjectList.length);
  const randomObject = wordObjectList[randomIndex];
  return randomObject;
}

function displayGameInterface() {
  const rulesBox = document.querySelector("#instructions");

  // Check if gameContainer exists before appending content
  if (gameContainer) {
    rulesBox.remove();
    gameContainer.appendChild(content);
  }
  initialHint = getInitialHint(secretWord);
  let initialHintElement = document.getElementById("hint");
  initialHintElement.innerHTML = `The hint is: ${initialHint}`;
  hints.push(initialHint)
}

function getInitialHint(secretWord) {
  if (!secretWord) return "";

  let iHint = "";
  for (let i = 0; i < secretWord.length; i++) {
    iHint += "_ ";
  }
  return iHint;
}


// Create an aside element and add some content to it
const aside = document.createElement("aside");

const main = document.querySelector("main");
const title = document.createElement("h1");
title.textContent = "Hints & Tips";
aside.appendChild(title);
main.appendChild(aside);

// Initially set aside to display: none
aside.style.display = "none";

function submitGuess() {
  // Format the guess
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.trim().toLowerCase();
  // Increment the counter
  counter++
  // Make some functional check to the guess 
  if (guess.length === 0) {
    alert("Please enter a guess.");
    return;
  }
  else if (guess.length != secretWord.length){
    alert(`Please enter a ${secretWord.length} letters guess.`);
    return;
  }

  // Show the aside after the first guess
  if (counter === 1) {
    aside.style.display = "block";
    main.style.display = "grid";
    main.style.gridTemplateColumns = "1fr 1fr";
    // Initialize the chronometer
    startTime = new Date();
  }
  

    // Check the hint and make adjusments based on its value
  if (guess != secretWord)
  {
    // Update the hint, result, and counter on the webpage
    let hint = createHint(secretWord, guess);
    document.getElementById("hint").textContent = `The hint is: ${hint}`;
    document.getElementById("result").textContent = "Result: Incorrect";
    document.getElementById("counter").textContent = `Guesses: ${counter}/10`;
    
    hints.push(hint);
    
    // Add content to aside
    let para = document.createElement("p");
    para.textContent = `Previous hint: ${hints[counter-1]} => You answered: ${guess}`;
    aside.appendChild(para);
    
    if (counter === 4)
    {
      para.textContent = `The secret word is a ${wordFunction}.`;
      aside.appendChild(para);
    }
    else if (counter === 9)
    {
      para.textContent = `${wordDetail}.`;
      aside.appendChild(para);
    }
    else if (counter === 10)
    {
      const endTime = new Date();
      const timeSpent = calculateTimeDifference(startTime, endTime);
      document.getElementById("hint").innerHTML = "Game over!"
      document.querySelector("label").replaceWith("Refresh the page to restart the Game.");
      document.getElementById("guess").remove();
      document.getElementById("submitButton").remove();
      document.getElementById("time").textContent = `Time spent: ${timeSpent}`;
    }
    
    main.appendChild(aside);

  }
      

  // Check if the game is won and update the webpage
  else if (secretWord === guess) {
    const endTime = new Date();
    document.querySelector("label").replaceWith("Refresh the page to restart the Game.");
    document.getElementById("guess").remove();
    document.getElementById("submitButton").remove();
    document.getElementById("counter").textContent = `Guesses: ${counter}/10`;
    const timeSpent = calculateTimeDifference(startTime, endTime);
    document.getElementById("result").textContent = "You\'ve got it! Congratulations!";
    document.getElementById("time").textContent = `Time spent: ${timeSpent}`;
  
  }

  // Clear the input field
  guessInput.value = ""; 

}


function createHint(secretWord, guess) {
  // Logic for generating a hint

  let hint = "";
  let letterOccurrences = {};

  // Create a dictionary to track the occurrences of each letter in the secret word
  Array.from(new Set(secretWord)).forEach(letter => {
    letterOccurrences[letter] = secretWord.split(letter).length - 1;
  });

  for (let i = 0; i < secretWord.length; i++) {
      if (guess[i].toLowerCase() === secretWord[i]) {
          hint += secretWord[i].toUpperCase();
          // Update the occurrences object to reflect the correct count
          letterOccurrences[guess[i].toLowerCase()] -= 1;
      } else if (secretWord.includes(guess[i]) && letterOccurrences[guess[i].toLowerCase()] > 0) {
          // Update the hint to reveal the correct number of occurrences for the guessed letter
          hint += guess[i].toLowerCase();
          // Update the occurrences object to reflect the correct count
          letterOccurrences[guess[i].toLowerCase()] -= 1;
      } else {
          hint += "_ ";
      }
  }
  return hint;
}

function calculateTimeDifference(start, end) 
{
  const timeDifference = end - start;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours.toString().padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

