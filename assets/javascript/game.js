
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','y','z'];
var guesses = ['1','2','3','4','5','6','7','8','9'];
var wins = "";
var losses = "";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess)



document.onkeyup = function(event){
    var userGuess = event.key;
    var guessed = userGuess;

    if(userGuess === computerGuess){
        wins++;

    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

    var html =
    // "<p>Pyschic Game</p>"
    // "<p>You chose: " + userGuess + "</p>" +
    // "<p>The computer chose: " + computerGuess+ "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guesses + "</p>"+
    "<p>Your Guesses so far: " + guessed + "</p>";

    document.querySelector("#game").innerHTML = html;
}