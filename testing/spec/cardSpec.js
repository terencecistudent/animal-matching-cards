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


    /*------Should return false if cards don't match----*/
    describe("Cards That Don't Match Equal Boolean false", function() {
        // card1 = bee
        it("should return false if cards bee and crab don't match", function() {
            var card1 = notMatchingCards("bee");  
            var card2 = notMatchingCards("crab");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return false if cards bee and fish don't match", function() {
            var card1 = notMatchingCards("bee");  
            var card2 = notMatchingCards("fish");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return false if cards bee and koala don't match", function() {
            var card1 = notMatchingCards("bee");  
            var card2 = notMatchingCards("koala");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return false if cards bee and squirrel don't match", function() {
            var card1 = notMatchingCards("bee");  
            var card2 = notMatchingCards("squirrel");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return false if cards bee and turtle don't match", function() {
            var card1 = notMatchingCards("bee");  
            var card2 = notMatchingCards("turtle");
            expect(card1 + card2).toBeFalsy();
        });

        // card1 = crab
        it("should return a false if cards crab and fish don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("bee");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards crab and fish don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("fish");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards crab and koala don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("koala");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards crab and squirrel don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("squirrel");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards crab and turtle don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("turtle");
            expect(card1 + card2).toBeFalsy();
        });

        // card1 = fish
        it("should return a false if cards fish and bee don't match", function() {
            var card1 = notMatchingCards("fish");  
            var card2 = notMatchingCards("bee");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards fish and crab don't match", function() {
            var card1 = notMatchingCards("fish");  
            var card2 = notMatchingCards("crab");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards fish and koala don't match", function() {
            var card1 = notMatchingCards("crab");  
            var card2 = notMatchingCards("koala");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards fish and squirrel don't match", function() {
            var card1 = notMatchingCards("fish");  
            var card2 = notMatchingCards("squirrel");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards fish and turtle don't match", function() {
            var card1 = notMatchingCards("fish");  
            var card2 = notMatchingCards("turtle");
            expect(card1 + card2).toBeFalsy();
        });

        // card1 = koala
        it("should return a false if cards koala and bee don't match", function() {
            var card1 = notMatchingCards("koala");  
            var card2 = notMatchingCards("bee");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards koala and crab don't match", function() {
            var card1 = notMatchingCards("koala");  
            var card2 = notMatchingCards("crab");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards koala and fish don't match", function() {
            var card1 = notMatchingCards("koala");  
            var card2 = notMatchingCards("fish");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards koala and squirrel don't match", function() {
            var card1 = notMatchingCards("koala");  
            var card2 = notMatchingCards("squirrel");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards koala and turtle don't match", function() {
            var card1 = notMatchingCards("koala");  
            var card2 = notMatchingCards("turtle");
            expect(card1 + card2).toBeFalsy();
        });

        // card1 = squirrel
        it("should return a false if cards squirrel and bee don't match", function() {
            var card1 = notMatchingCards("squirrel");  
            var card2 = notMatchingCards("bee");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards squirrel and crab don't match", function() {
            var card1 = notMatchingCards("squirrel");  
            var card2 = notMatchingCards("crab");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards squirrel and fish don't match", function() {
            var card1 = notMatchingCards("squirrel");  
            var card2 = notMatchingCards("fish");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards squirrel and koala don't match", function() {
            var card1 = notMatchingCards("squirrel");  
            var card2 = notMatchingCards("koala");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards squirrel and turtle don't match", function() {
            var card1 = notMatchingCards("squirrel");  
            var card2 = notMatchingCards("turtle");
            expect(card1 + card2).toBeFalsy();
        });

        // card1 = turtle
        it("should return a false if cards turtle and bee don't match", function() {
            var card1 = notMatchingCards("turtle");  
            var card2 = notMatchingCards("bee");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards turtle and crab don't match", function() {
            var card1 = notMatchingCards("turtle");  
            var card2 = notMatchingCards("crab");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards turtle and fish don't match", function() {
            var card1 = notMatchingCards("turtle");  
            var card2 = notMatchingCards("fish");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards turtle and koala don't match", function() {
            var card1 = notMatchingCards("turtle");  
            var card2 = notMatchingCards("koala");
            expect(card1 + card2).toBeFalsy();
        });

        it("should return a false if cards turtle and squirrel don't match", function() {
            var card1 = notMatchingCards("turtle");  
            var card2 = notMatchingCards("squirrel");
            expect(card1 + card2).toBeFalsy();
        });
    });


    /*------Should return Boolean true if selected card matches----*/

    describe("Cards Matching Boolean", function() {
        it("should return true if it is a bee card", function() {
            var card = cardBoolean("bee")
            expect(card).toBeTruthy();
        });

        it("should return true if it is a crab card", function() {
            var card = cardBoolean("crab")
            expect(card).toBeTruthy();
        });

        it("should return true if it is a fish card", function() {
            var card = cardBoolean("fish")
            expect(card).toBeTruthy();
        });

        it("should return true if it is a koala card", function() {
            var card = cardBoolean("koala")
            expect(card).toBeTruthy();
        });

        it("should return true if it is a squirrel card", function() {
            var card = cardBoolean("squirrel")
            expect(card).toBeTruthy();
        });

        it("should return true if it is a turtle card", function() {
            var card = cardBoolean("turtle")
            expect(card).toBeTruthy();
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