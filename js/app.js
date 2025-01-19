/*  Before you get started, think about the win and lose conditions of the game.

`Win Condition`: Player guesses the correct number within 3 tries.

`Lose Condition`: Player guesses incorrectly 3 times.

All elements that will be referenced in `app.js` will have an id. Read through `index.html` and take no
te of which elements you will be referencing.

If you get stuck, write psuedocode and break the game's functionality and logic into smaller pieces.

- [ ] The span with the id of `guess-message` should output whether the guess is too high, too low, if the player won, or if the player lost.
- [ ] The span with the id of `current-guess` should output the guess that was just submitted.
- [ ] The span with the id of `computer-guess` should output the guess that was randomly generated.
- [ ] The span with the id of `guess-history` should output your guess history.
- [ ] The "Submit Guess" button should be enabled at the beginning of the game, but when the game is over
 it should be disabled.
- [ ] The "Restart" button should be disabled at the beginning of the game, but when the
 game is over it should be enabled.
- [ ] When the "Restart" button is clicked, all values and text output should reset.

*/
// DECLARATION OF INTERNAL VARIABLES AND THEIR LINKS TO FIELD IDs IN THE WEB PAGE


const submissionBtn = document.getElementById("submit-btn");

const restartBtn = document.getElementById("restart-btn");
let guessMessage = document.getElementById("guess-message");
let currentGuess = document.getElementById("current-guess");

let sButtonClicked = false;
let turn = 0


/* Event delegation
Inside a list only?    <div class="btn-container">
                    <button id="submit-btn" class="btn">Submit Guess</button>
                    <button id="restart-btn" class="btn" disabled>
                        Restart
                    </button>
                </div>


 } )

TURNING THE BUTTONS ON AND OFF (CHECK OPACITY SWITCHING)
document.getElementById("submit-btn").disabled = true;       //OFF
document.getElementById("submit-btn").disabled = false;      //ON


document.getElementById("restart-btn").disabled = true;       //OFF
document.getElementById("restart-btn").disabled = false;      //ON


 corresponding to HTML code -  restart-btn is declared in a disabled state by: <button .... disabled> Visible Button Label </button> 
 

/* This is the HTML code for the buttons
<div class="btn-container">
//<button id="submit-btn" class="btn">Submit Guess</button>
<button id="restart-btn" class="btn" disabled>
    Restart
</button>
</div>

This is the CSS for the Restart button's beginning state. 
When Submit Guess is pushed it will run through the game
At the end of the game or when the guess is correct (breakout condition),
the Submit Guess button is disabled and the Restart button has full view.


*/




"use strict";

/*
const submit = document.getElementById("submit-btn");  Comm with HTML buttons
const restart = document.getElementById("restart-btn");
*/

//  Randomization



let targetNumber = Math.floor(Math.random()*10+1);
console.log(`The secret number is ${targetNumber}`);







/*  Button activators

submit.addEventListener("click", function () {

} 

restart.addEventListener("click", function () {

} 
*/


function theMainGame(userGuess) {

while (turn <3) {

    console.log("User Guess: " + userGuess);
    console.log("Computer guess: " + targetNumber);
    console.log("This is Turn "+turn);
    //sButtonClicked = !sButtonClicked;
    if (userGuess == targetNumber) {
        console.log ("Success!");
        document.getElementById("submit-btn").disabled = true;
        document.getElementById("restart-btn").disabled = false; 
        break;
        } else {console.log("Wrong! Try Again.");
            turn++;
                submissionBtn.addEventListener("click", function() {
                if (sButtonClicked) {
                    let userGuess = document.getElementById("guess-input").value;
                }
            })
    }
}
}

//if (turn=3) {console.log("Sorry pal, you lost!");
//document.getElementById("submit-btn").disabled = true;
//document.getElementById("restart-btn").disabled = false;
//}


  





submissionBtn.addEventListener("click", function() {
    sButtonClicked = !sButtonClicked;
    if (sButtonClicked) {
        let guessInputBox = document.getElementById("guess-input").value;
           // document.getElementById(currentGuess).value = guessInputBox;
            
            theMainGame(guessInputBox);};
        })
    
