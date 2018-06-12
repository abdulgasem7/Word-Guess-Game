// var popUp = prompt("What's your name?");
// if (popUp) {

// }
// console.log("Hello " + popUp);



// Image ID's from html

var animalsImg = document.getElementById("animals");
var monkeyImg = document.getElementById("monkeyimage");
var snakeImg = document.getElementById("anacondaimg");

// <!--Dom elements from html  -->

var domPlaceHolder = document.getElementById("placeholders");
var domNumWins = document.getElementById("wins");
var domNumLosses = document.getElementById("losses");
var domNumGuesses = document.getElementById("numberOfguesses");
var domWrongWordBank = document.getElementById("wrongWordBank");
// var domNewGameButton = document.getElementById("button");

// assign default values to variables
var rightWord = [];
var wrongWord = [];
var wins = 0;
var losses = 0;
var guessLeft = 12;
var gameRunning = false;
var pickWord
var underScore = [];
// <!-- create two random word(s) to be displayed  -->
var wordArray = ["monkey", "anaconda"];


 // Add Underscore randomly selected word characters
var generateUnderscore = () => {
    var underScoreArray = [];
    for (var i = 0; i < pickWord.length; i++) {
        underScoreArray.push('_');
    }
    underScore = underScoreArray
}

// type and word function
document.addEventListener("keypress", (event) => {
    console.log(pickWord);
    var keyWord = String.fromCharCode(event.keyCode);
    if (pickWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
    } else {
        wrongWord.push(keyWord);
    }
    underScore[pickWord.indexOf(keyWord)] = keyWord;
    domNumGuesses.textContent = guessLeft--;
    domGuessedLetters.textContent = wrongWord;
});

var gameStart = () => {
    pickWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    wins = 0;
    losses = 0;
    guessLeft = 12;
    gameRunning = true;
    generateUnderscore()
    console.log(underScore);
    domPlaceHolder.innerHTML = underScore.join("");
}
gameStart();

// Game Play
// 1. cick to start
// 2. press key to play
// 3. print on screen
// 4. correct letters go into correct spot
// 5. incorrect letters go into incorrect spot
// 6. if the letters match the random word letter
// place where placeholders are
// 7. else, send to wrong word bank 
// 8. if the player correct amount

// game start 
    // 1. page loads and everything is at its default value
    // 2. length of the array of the random word generates
    // 3. right guesses go in the underscore array

// 


// <!-- create hint image and change image once word is guessed correctly -->
// <!-- add number of attempts, display game over after 12 attempts-->
// <!-- add audio for game -->

