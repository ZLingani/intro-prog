var secret = 7;

numGuess();

function numGuess() {


    var guess = parseInt(prompt("Please guess a number between 1 and 10."));
    myAnswer(guess);

}

function myAnswer(answer) {
    if (answer === secret) {
        alert("Well done , you are correct.");
    } else if (answer < secret) {
        alert("Your guess is too low. Try again!");
        numGuess();
    } else if (answer > secret) {
        alert("Your answer is too high. Try again!");
        numGuess();
    } else {
        alert("Invalid input!");
        numGuess();
    }
}