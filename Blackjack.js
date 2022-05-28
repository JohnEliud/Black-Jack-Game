let cards = []; //Array (Ordered list of items.)
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""; //Assigning the message an empty string

let messageEl = document.getElementById("message-el"); /*Links the message-el command in the
html file*/
let sumEl = document.getElementById("sum-el"); /*Can also use the document.querySelector to
link to the html file. However needs to include a # e.g document.querySelector("#sum-el").*/
let cardsEl = document.getElementById("cards-el");

//Creating and object to store two or more variables(player name and player chips) at once.
let player = {
    name: "John",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard () {
    let randomCardNumber = Math.floor( Math.random() * 13 ) + 1; // 1 - 13
    if (randomCardNumber > 10) {
        return 10;
    } else if (randomCardNumber === 1) {
        return 11;
    } else {
        return randomCardNumber;
    }
}

function startGame() {
    isAlive = true;
/*Generating two random numbers. Re-assigning the cards and sum variables to that the game can
start*/
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "; //Refers to our array
    //Loop renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card; //Adds the card to the sum variable.
    cards.push(card);  
    renderGame(); // Calling the start game function.
    }
}