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

// Create an array to store the cards in play
let cardsInPlay = [];

// Create a function to check for a match
let checkForMatch = function() {
	// Check to see if the first cards matches the second card selected
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			} else {
			alert("Sorry, try again.");
		} 
};

// Create a function representing the user flipping a card
let flipCard = function() {
	// Get the data-id of the card that was just clicked and store it in the variable cardId
	let cardId = this.getAttribute('data-id');

	// Display in the console which card was just flipped
	console.log("User flipped " + cards[cardId].rank);

	// Add the card that was just clicked to the cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);

	// Update the src attribute to the image of the card that was just clicked
	this.setAttribute('src', cards[cardId].cardImage);

	// Check to see if two cards are drawn, if so check for match;
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};

// This function will create a new game board
let createBoard = function() {
	// To add each card to the board, loop through the cards array
	for (var i = 0; i < cards.length; i++) {

		//For each card use, use createElement to create an img element and store it in a variable
		var cardElement = document.createElement('img');

		// Use the setAttribute() method on cardElement. We want to add a src attribute of 'images/back.png'. Now the user will see the back of the card
		cardElement.setAttribute("src", "images/back.png");

		// use the setAttribute() method on cardElement. Set the card's 'data-id' attribute to be the current index of the card array, i. Now, we can track which card it is. 
		cardElement.setAttribute('data-id', i);

		// Creates an event to 'listen' for the user to click and call upon the flipCard function. 
		cardElement.addEventListener('click', flipCard);

		// Appends the last card to the 'game-bard' id
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();