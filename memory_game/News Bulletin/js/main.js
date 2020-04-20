let cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//create an array to store the cards in play
let cardsInPlay = [];

//create a function to check for a match
let checkForMatch = function() {
	//check to see if the first cards matches the second card selected
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			} else {
			alert("Sorry, try again.");
		} 
};

//create a function representing the user flipping a card
let flipCard = function() {
	//get the data-id of the card that was just selected and cache it
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	//check to see if two cards are drawn, if so check for match;
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};


let createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();