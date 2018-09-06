//creates an array of letters so that the computer can random select one
var randomLetters = ["a", "b", "c", "d", "e", "f", "g",
                "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u", "v",
                "w", "x", "y", "z"];

//establish values of 0 for wins/losses, empty arrays for user guesses
//and computer guess, and sets the max for total amount of guess to 9
var wins = 0;
var losses = 0;
var guessleft = 9;
var guesssofar = [];
var computerLetter = [];

//function created to allow comp to choose from array of letters and
//console log the letter chosen for debugging purposes if needed
var newcompletter = function() {
    computerLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
    console.log(computerLetter);
};

//function created to update the user with the number of guesses
//remaining after the game begins
var newguessleft = function() {
    document.querySelector("#guessleft-text").innerHTML = "Guesses Left: " + guessleft
};

//function created to update the user of all of the letters chosen,
//spaced correctly with the use of a comma
var newguesssofar = function() {
    document.querySelector("#guesssofar-text").innerHTML = "Your guesses so far: " + guesssofar.join(", ");
};

//function created to reset variables after a win or a loss has occured
var reset = function() {
    guessleft = 9;
    guesssofar = [];

    newguessleft();
    newguesssofar();
    newcompletter();
}

//Takes the key that is pressed and uses it as the user's choice of letter
//Console log will compute the key pressed on the first line and all
//of the keys pressed during the current round underneath
document.onkeyup = function(event) {
    guessleft--;

    console.log(event.key);
    console.log(guesssofar);

    //forces the user's character selection to be lower case, to avoid
    //case sensitivity
    var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
    
    //Updates letters selected and updates variable functions to accurately
    //depict changes to variables
    guesssofar.push(userLetter);
    newguessleft();
    newguesssofar();

    //The user will get to continue selecting letters, as long as they
    //have more guesses than 0 left and if they select the same letter
    //as the computer they win
    //If they use all 9 guesses and never match the comp letter choice,
    //they lose
    if (guessleft > 0) {
    if (userLetter == computerLetter) {
        wins++;
        document.querySelector("#wins-text").innerHTML = "Wins: " + wins;
        
        reset();
        }
    } else if (guessleft ==0) {
        losses++;
        document.querySelector("#losses-text").innerHTML = "Losses: " + losses;
    
        reset();
    } 
    
}
