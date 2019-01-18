var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log('You Flipped' + cardOne);
console.log('You Fliiped' + cardTwo);

if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else { alert("Sorry, try again")
};
