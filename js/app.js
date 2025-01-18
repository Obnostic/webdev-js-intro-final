/*  Before you get started, think about the win and lose conditions of the game.

`Win Condition`: Player guesses the correct number within 3 tries.

`Lose Condition`: Player guesses incorrectly 3 times.

All elements that will be referenced in `app.js` will have an id. Read through `index.html` and take note of which elements you will be referencing.

If you get stuck, write psuedocode and break the game's functionality and logic into smaller pieces.

- [ ] The span with the id of `guess-message` should output whether the guess is too high, too low, if the player won, or if the player lost.
- [ ] The span with the id of `current-guess` should output the guess that was just submitted.
- [ ] The span with the id of `computer-guess` should output the guess that was randomly generated.
- [ ] The span with the id of `guess-history` should output your guess history.
- [ ] The "Submit Guess" button should be enabled at the beginning of the game, but when the game is over it should be disabled.
- [ ] The "Restart" button should be disabled at the beginning of the game, but when the game is over it should be enabled.
- [ ] When the "Restart" button is clicked, all values and text output should reset.

*/



"use strict";

/*
const submit = document.getElementById("submit-btn");  Comm with HTML buttons
const restart = document.getElementById("restart-btn");
*/

//  Randomization



let targetNumber = Math.floor(Math.random()*10+1);
console.log(targetNumber);


function theGame (guess) {
    
}


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

.btn:disabled {
    opacity: .3;
}
*/



/*  Button activators

submit.addEventListener("click", function () {

} 

restart.addEventListener("click", function () {

} 

*/
