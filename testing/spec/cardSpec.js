describe("Matching Card Game", function() {

    /*---------------------------------------------------------------CARDS----*/

    /*------Checks the selected card and returns Matches!----*/
    beforeEach(function() {
            SelectedCards = new selectedCard;
    });

    describe("Check Cards", function() {

        it("should return Matches! for selecting bee card", function() {
            var selected = selectedCard("bee");
            expect(selected).toBe("Matches!");
        });

        it("should return Matches! for selecting crab card", function() {
            var selected = selectedCard("crab");
            expect(selected).toBe("Matches!");
        });

        it("should return Matches! for selecting fish card", function() {
            var selected = selectedCard("fish");
            expect(selected).toBe("Matches!");
        });

        it("should return Matches! for selecting koala card", function() {
            var selected = selectedCard("koala");
            expect(selected).toBe("Matches!");
        });

        it("should return Matches! for selecting squirrel card", function() {
            var selected = selectedCard("squirrel");
            expect(selected).toBe("Matches!");
        });

        it("should return Matches! for selecting turtle card", function() {
            var selected = selectedCard("turtle");
            expect(selected).toBe("Matches!");
        });
    });


    /*------Back Faced Cards should be an airplane----*/

    describe("Back Faced Cards", function() {
        it("should be an image of an airplane", function() {
            var selected = backFacedCard("Airplane");
            expect(selected).toBe("Airplane");
        });
    });


    /*-----Checks the matched cards and returns Matched!----*/
    beforeEach(function() {
        MatchedCards = new matchedCards;
    });

    describe("Cards Matched", function() {
        it("should return Matched! for matched bee cards", function() {
            var card1 = matchedCards("bee");
            var card2 = matchedCards("bee");

            expect(card1 && card2).toBe("Matched!");
        });

        it("should return Matched! for matched crab cards", function() {
            var card1 = matchedCards("crab");
            var card2 = matchedCards("crab");

            expect(card1, card2).toBe("Matched!");
        });

        it("should return Matched! for matched fish cards", function() {
            var card1 = matchedCards("fish");
            var card2 = matchedCards("fish");

            expect(card1, card2).toBe("Matched!");
        });

        it("should return Matched! for matched koala cards", function() {
            var card1 = matchedCards("koala");
            var card2 = matchedCards("koala");

            expect(card1, card2).toBe("Matched!");
        });

        it("should return Matched! for matched squirrel cards", function() {
            var card1 = matchedCards("squirrel");
            var card2 = matchedCards("squirrel");

            expect(card1, card2).toBe("Matched!");
        });

        it("should return Matched! for matched turtle cards", function() {
            var card1 = matchedCards("turtle");
            var card2 = matchedCards("turtle");

            expect(card1, card2).toBe("Matched!");
        });
    });


    /*-----Click Event----*/
    describe("Click Event", function() {
        it("should trigger the click event when a card is clicked on", function() {
            var spyEvent = spyOnEvent('.memory-card', 'click');
            $('.memory-card').click();
            expect('click').toHaveBeenTriggeredOn('.memory-card');
            expect(spyEvent).toHaveBeenTriggered();
        });
    });
})