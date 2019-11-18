$(document).ready(function() {

    const restart = document.querySelector(".restart");
    const cards = document.querySelectorAll(".memory-card");
    restart.innerHTML = "Start Game";

    let haveFlippedCard = false;
    let lockGame = false;
    let firstCard, secondCard;

    let moves = 0;
    let counter = 0;

    // Variables for countdown timer
    let timerStartTime = 40;
    let countdownElement = document.getElementById('countdown');
    let timerId;


    // Timer which counts down from 40
    function countdown() {
        if (timerStartTime <= -1) {
            lockGame = true;
            clearTimeout(timerId);
            outOfTimeModal();
            cards.forEach(card => card.removeEventListener("click", flipCard));
        } else {
            countdownElement.innerHTML = timerStartTime;
            timerStartTime--;
        }
    }


    // A function that pops up the modal when the time runs out
    outOfTimeModal = () => {
        $("#timer-modal").modal("show");
    }


    // Flips the card
    function flipCard() {
        if(lockGame) return;

        if(this === firstCard) return;

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
        moves++;
    }


    // Checks for any matches
    function checkMatches() {
        let cardsMatch = firstCard.dataset.framework === secondCard.dataset.framework;

        if(cardsMatch) {
            counter += 1;
        }

        if(counter === 6) {
            $("#myModal").modal("show");
            timerStartTime = 40;
        }

        // ternary operator
        cardsMatch ? cardsThatAreDisabled() : unflipCards();
    }


    // Cards which are disabled - matches or when 2 cards are already opened
    function cardsThatAreDisabled() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }


     // Unflips cards if not a match
    function unflipCards() {
        lockGame = true;

        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            resetCards();
        }, 1400);
    }


    // Reset cards after each game
    function resetCards() {
        [haveFlippedCard, lockGame] = [false, false];
        [firstCard, secondCard] = [null, null];
    }


    // Shuffles the cards
    function shuffleCards() {
        cards.forEach(card => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        });
    };

    function newGame() {
        // un-flip all cards
        cards.forEach(card => card.classList.remove("flip"));
        // reset the cards
        resetCards();
        // reset the timer
        clearTimeout(timerId);
        timerId = setInterval(countdown, 1000);
        // shuffle the cards
        setTimeout(shuffleCards, 500);
        // loop through list of cards
        cards.forEach(card => card.addEventListener("click", flipCard));
        // reset the timer
        timerStartTime = 40;
        // reset total moves and matches count
        moves = 0;
        counter = 0;
    }

    // Resets and reshuffles the game
    restart.addEventListener("click", function() {
        restart.innerHTML = "Loading...";
        newGame();
        setTimeout(function() {restart.innerHTML = "New Game";}, 500);
    })
});