// Number Guessing Game

"use strict";

// DECLARATION OF INTERNAL VARIABLES AND THEIR LINKS TO FIELD IDs IN THE WEB PAGE

const submissionBtn = document.getElementById("submit-btn");
const guessInput = document.getElementById("guess-input");
const restartBtn = document.getElementById("restart-btn");
const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const guessHistory = document.getElementById("guess-history")
const computerGuess = document.getElementById("computer-guess");

let sButtonClicked = false;
let rButtonClicked = true;
let turn=0;
let targetNumber=0;
let secret=0;
let userGuess=0;
let guessHistoryString="";



function theMainGame() {
    console.log("Going into the main game");
    console.log("This is Turn "+ turn);
    if (userGuess == targetNumber) {
        guessMessage.textContent = "Success!";
        computerGuess.textContent = targetNumber;
        document.getElementById("submit-btn").disabled = true;
        document.getElementById("restart-btn").disabled = false; 
    } else {
        if (turn < 3) {
          guessMessage.textContent = "Wrong! Try Again.";  // display in the 'Guess History' field  
             } else {                                   // WHY DOES THIS NOT BLOODY WORK
               guessMessage.textContent ="Sorry pal, you lost!";
               computerGuess.textContent = targetNumber;
               document.getElementById("submit-btn").disabled = true;
               document.getElementById("restart-btn").disabled = false; 
             }                    
        document.getElementById("submit-btn").disabled = false;
        document.getElementById("restart-btn").disabled = true;
        sButtonClicked = !sButtonClicked;     
    }
}



function grabTheStuffAndPlay()  {
  if (turn<4)   {
    userGuess=0
    submissionBtn.addEventListener("click", function() {
      sButtonClicked = !sButtonClicked;
      console.log(`button is now ${sButtonClicked}`);
      if (sButtonClicked) {
        userGuess = guessInput.value;                   // Grab the number the user put in the window
        currentGuess.textContent = userGuess;           // display in the 'Your Guess' field
        guessHistoryString = (guessHistoryString + userGuess.toString()+"  ");   //  Add guess to prior history (if any)
        guessHistory.textContent = guessHistoryString;  // display in the 'Guess History' field  
        turn++;
        theMainGame();
        }
      })
  }
}


function generateRandomNumber() {
targetNumber = Math.floor(Math.random()*10+1);          // PICK THE RANDOM NUMBER YOU SILLY
console.log(`The secret number is ${targetNumber}`);    // HIDE THE SECRET FROM THE USER (TEMP USE)
}



function startTheGame(turn) {
    generateRandomNumber();
    guessMessage.textContent = ""

    if (turn < 3) { grabTheStuffAndPlay(); }
    else {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("restart-btn").disabled = false;
    }
}



startTheGame(turn);


    










   