var wins = 0;
var losses = 0;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','y','z'];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = alaphabet[Math.florr(Math.random() * alphabet.length)];

}