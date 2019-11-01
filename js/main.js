$(document).ready(function() {

    const cards = document.querySelectorAll(".memory-card");

    let haveFlippedCard = false;
    let lockGame = false;
    let firstCard, secondCard;

    let moves = 0;
    let counter = document.querySelector(".moves");

    let modal = document.getElementsByClassName("modal");

    /*------------------------------------Flips the card--*/
    function flipCard() {
        if(lockGame) {
            return;
        }

        if(this === firstCard) {
            return;
        }

        this.classList.add("flip");

        if(!haveFlippedCard) {
            // first click
            haveFlippedCard = true;
            firstCard = this;

            return;
        }
        // second click
        haveFlippedCard = false;
        secondCard = this;

        checkMatches();
    }


    /*------------------------------------Checks for any matches--*/
    function checkMatches() {
        let cardsMatch = firstCard.dataset.framework === secondCard.dataset.framework;

        // ternary operator
        cardsMatch ? cardsThatAreDisabled() : unflipCards();
    }


    /*---------------------Cards which are disabled - matches or when 2 cards are already opened--*/
    function cardsThatAreDisabled() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }


     /*------------------------------------Unflips cards if not a match--*/
    function unflipCards() {
        lockGame = true;

        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            resetCards();
        }, 1400);
    }


    /*------------------------------------Reset cards after each game--*/
    function resetCards() {
        [haveFlippedCard, lockGame] = [false, false];
        [firstCard, secondCard] = [null, null];
    }


    /*------------------------------------Shuffles the cards--*/
    (function shuffleCards() {
        cards.forEach(card => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        })
    })();

    /*------------------------------------Modal at the end of the game--*/
    function endGameModal() {
        if(flipCard === 16) {
            modal.classList.add("show-modal");
        }
    }


    /*------------------------------------Resets and reshuffles the game--*/
    $('#restart').click(function(){
    location.reload();
    });

    // loop through list of cards
    cards.forEach(card => card.addEventListener("click", flipCard));
});