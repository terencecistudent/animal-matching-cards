// Example!!
/*describe("Calculator", function() {
    describe("Addition Button", function() {
        it("should add two numbers together correctly", function() {
            expect(addition(11, 11)).toBe(22);
        });
    });
});*/


/*-----------------------------------------------Flipped Cards---*/

// First selected card should turn around
describe("CardGame", function() {
    var firstFlippedCard = true;
    var secondFlippedCard = false;
    var bothFlippedCards = true;

    beforeEach(function() {
        card = new CardGame;
    });

    describe("Flipped Cards", function() {
        it("should allow first card to turn around", function() {
            expect(firstFlippedCard).toBeTruthy();
        });

        it("should allow second card to turn around", function() {
            expect(secondFlippedCard).toBeFalsy();
        });

        it("should make two cards opened at same time", function() {
            expect(bothFlippedCards).toBeTruthy();
        });
    });
});