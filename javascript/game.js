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
var domWrongWordBank = document.getElementById("wrong");
// var domNewGameButton = document.getElementById("button");

// assign default values to variables
var underScore = [];
var rightWord = [];
var wrongWord = [];
var wins = 0;
var losses = 0;
var guessLeft = 12;
var gameRunning = false;


// <!-- create two random word(s) to be displayed  -->
var wordArray = ["monkey", "anaconda"];
var pickWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var chosenWord = wordArray[pickWord];



 // Add Underscore randomly selected word characters
var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// type and word function
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    if (chosenWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
    } else {
        wrongWord.push(keyWord);
    }
    underScore[chosenWord.indexOf(keyWord)] = keyWord;
});


// domNumGuesses.textContent = guessLeft;
// domPlaceHolder.textContent = generateUnderscore.join("");
// domGuessedLetters.textContent = wrongWord;


// <!-- create hint image and change image once word is guessed correctly -->
// <!-- add number of attempts, display game over after 12 attempts-->
// <!-- add audio for game -->