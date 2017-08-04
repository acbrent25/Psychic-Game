
// User clicks any letter to make a guess

// guesses get printed on screen

// 9 guesses = 1 loss


var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// empty array for holding guesses
var guessList = [];

// makes computer guess random letter from a - z
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// record what key user hits
document.onkeyup = function(event) {

    var userGuess = event.key;

    // capture the key and push into array for printing on scrren
    guessList.push(userGuess);

    // if guesses are greater than 9 then run the program
    if (guessesLeft > 0) {


        // if guess equals the computer then reset count, add a point and add to guesslist
        if (userGuess === computerGuess) {
            guessesLeft = 9;
            wins++;
            guessList = [];
        } 
        
        // if user's guess doesn't equal computers then substract from number of guesses left
        if (userGuess !== computerGuess) {
            guessesLeft--;
        }

        // if user is out of guesses then add to losses, reset guesses left and record guesslist
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessList = [];
        }

    
    

    // if userGuess does not = computerChoice subbract 1 from guesses left

    // if guesses left = 0 then add 1 to losses and add 9 to guesses left 

    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses +  "</p>" +
    "<p>Guesses Left: " + guessesLeft +  "</p>" +
    "<p>Your Guesses so far: " + guessList +   "</p>";

    document.querySelector("#game").innerHTML = html;
}

};