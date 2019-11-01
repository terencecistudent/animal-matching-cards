describe("Cards", function() {
    describe("Flipped Cards", function() {
        it("should select two cards which are the same", function() {
            expect(selected(firstCard, secondCard)).toMatch("matched");
        });
    });
});