/*----------------------------------------------FUNCTIONS FOR CARDS---*/

/*---------------------------------function for selectedCard----*/
function selectedCard(card) {
    if (card === "bee") {
        return ("Matches!");
    } else if (card === "crab") {
        return("Matches!");
    } else if (card === "fish") {
        return("Matches!");
    } else if (card === "koala") {
        return("Matches!");
    } else if (card === "squirrel") {
        return("Matches!");
    } else if (card === "turtle") {
        return("Matches!");
    };
}

/*---------------------------------function for backFaceCards----*/
function backFacedCard(card) {
    if(card === "Airplane") {
        return ("Airplane");
    }
}


/*---------------------------------function for notMatchingCards - returns false----*/
function notMatchingCards(firstCard, secondCard) {

    // firstCard = bee
    if (firstCard === "bee" && secondCard === "crab") {
        return (false);
    } else if (firstCard === "bee" && secondCard === "fish") {
        return (false);
    } else if (firstCard === "bee" && secondCard === "koala") {
        return (false);
    } else if (firstCard === "bee" && secondCard === "squirrel") {
        return (false);
    } else if (firstCard === "bee" && secondCard === "turtle") {
        return (false);
    };

    // firstCard = crab
    if (firstCard === "crab" && secondCard === "bee") {
        return (false);
    } else if (firstCard === "crab" && secondCard === "fish") {
        return (false);
    } else if (firstCard === "crab" && secondCard === "koala") {
        return (false);
    } else if (firstCard === "crab" && secondCard === "squirrel") {
        return (false);
    } else if (firstCard === "crab" && secondCard === "turtle") {
        return (false);
    };

    // firstCard = fish
    if (firstCard === "fish" && secondCard === "bee") {
        return (false);
    } else if (firstCard === "fish" && secondCard === "crab") {
        return (false);
    } else if (firstCard === "fish" && secondCard === "koala") {
        return (false);
    } else if (firstCard === "fish" && secondCard === "squirrel") {
        return (false);
    } else if (firstCard === "fish" && secondCard === "turtle") {
        return (false);
    };

    // firstCard = koala
    if (firstCard === "koala" && secondCard === "bee") {
        return (false);
    } else if (firstCard === "koala" && secondCard === "crab") {
        return (false);
    } else if (firstCard === "koala" && secondCard === "fish") {
        return (false);
    } else if (firstCard === "koala" && secondCard === "squirrel") {
        return (false);
    } else if (firstCard === "koala" && secondCard === "turtle") {
        return (false);
    };

    // firstCard = squirrel
    if (firstCard === "squirrel" && secondCard === "bee") {
        return (false);
    } else if (firstCard === "squirrel" && secondCard === "crab") {
        return (false);
    } else if (firstCard === "squirrel" && secondCard === "fish") {
        return (false);
    } else if (firstCard === "squirrel" && secondCard === "koala") {
        return (false);
    } else if (firstCard === "squirrel" && secondCard === "turtle") {
        return (false);
    };

    // firstCard = turtle
    if (firstCard === "turtle" && secondCard === "bee") {
        return (false);
    } else if (firstCard === "turtle" && secondCard === "crab") {
        return (false);
    } else if (firstCard === "turtle" && secondCard === "fish") {
        return (false);
    } else if (firstCard === "turtle" && secondCard === "koala") {
        return (false);
    } else if (firstCard === "turtle" && secondCard === "squirrel") {
        return (false);
    };
}


/*---------------------------------function for cardBoolean----*/
function cardBoolean(card) {
    if (card === "bee") {
        return true;
    } else if (card === "crab") {
        return true;
    } else if (card === "fish") {
        return true;
    } else if (card === "koala") {
        return true;
    } else if (card === "squirrel") {
        return true;
    } else if (card === "turtle") {
        return true;
    }
}


/*---------------------------------function for matchedCards----*/
function matchedCards(card1, card2) {
    if (card1 === "bee" && card2 === "bee") {
        return ("Matched!");
    } else if (card1 === "crab" && card2 === "crab") {
        return ("Matched!");
    } else if (card1 === "fish" && card2 === "fish") {
        return ("Matched!");
    } else if (card1 === "koala" && card2 === "koala") {
        return ("Matched!");
    } else if (card1 === "squirrel" && card2 === "squirrel") {
        return ("Matched!");
    } else if (card1 === "turtle" && card2 === "turtle") {
        return ("Matched!");
    } else {
        return ("Final Else - nothing else Matched!");
    }
}


/*----------------------------------------------FUNCTIONS FOR NEW GAME BUTTON---*/

/*---------------------------------function for buttonHtml----*/

function buttonElement() {
    if ($("#restart:contains('New Game')")) {
        return true;
    };

    if ($("#restart:contains('<button></button>')")) {
        return true;
    };
}

/*---------------------------------function for buttonClick----*/

function setUpResetButton() {
    setFixtures = $(`<button id="restart" type="button" onclick="newGame()" class="btn btn-danger btn-lg">New Game</button>`);
}