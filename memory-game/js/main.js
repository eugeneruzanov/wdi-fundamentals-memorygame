//console.log("Up and running!");
//let cardOne = "queen";
//let cardTwo = "queen";
//let cardThree = "king";
//let cardFour = "king";
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push("cardOne");
//console.log("User flipped queen");
let cardTwo = cards[1];
cardsInPlay.push("cardTwo");
//console.log("User flipped king");
if (cardsInPlay.length === 2 & cardsInPlay[0] === cardsInPlay[2]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}