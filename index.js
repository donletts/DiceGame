var randomNumber1 = Math.floor ( Math.random () * 6 ) + 1;
var randomNumber2 = Math.floor ( Math.random () * 6 ) + 1;

console.log ( randomNumber1 );
console.log ( randomNumber2 );

document
    .querySelector ( ".dice .img1" )
    .setAttribute ( "src", "images/dice" + randomNumber1 + ".png" );
document
    .querySelector ( ".dice .img2" )
    .setAttribute ( "src", "images/dice" + randomNumber2 + ".png" );

if (randomNumber1 > randomNumber2) {
    // Player 1 Wins!
    document
        .querySelector ( "h1" )
        .innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    // Player 2 Wins!
    document
        .querySelector ( "h1" )
        .innerHTML = "Player 2 Wins!🚩";
} else {
    //Draw!
    document
        .querySelector ( "h1" )
        .innerHTML = "Draw!";
}