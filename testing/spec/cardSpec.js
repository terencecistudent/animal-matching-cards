
describe("Matching Card Game", function() {

    /*--------------------------------------Cards----*/

    describe("Cards", function() {
        // Memory Game and Cards should be visible
        it("memory game container should be visible", function() {
            expect($(".memory-game")).toBeVisible();
        });
        it("memory game container should be visible", function() {
            expect($(".memory-card")).toBeVisible();
        });
    });


    /*--------------------------------------Modal----*/

    describe("Modal", function() {
        it("should be hidden until called upon", function() {
            expect($("#myModal")).toBeHidden();
        });
    });


    /*--------------------------------------Reset Button----*/
    describe("Check New Game Button", function() {
        beforeEach(function() {
            btn = $("#restart");
        });

        it("should allow user to play again", function() {
            expect(btn).toHaveClass(".btn-lg");
        });
    });
});