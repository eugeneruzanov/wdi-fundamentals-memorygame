//console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}	
}
//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne + ".");
//let cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo + ".");
//if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//alert("You found a match!");
//} else {
//alert("Sorry, try again.");
//}
function flipCard(cardId) {
	//if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	//alert("You found a match!");
	//} else {
	//alert("Sorry, try again.");
	//}
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
	}
flipCard(0);
flipCard(2);