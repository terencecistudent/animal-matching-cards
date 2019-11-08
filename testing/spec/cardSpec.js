// Example!!
/*describe("Calculator", function() {
    describe("Addition Button", function() {
        it("should add two numbers together correctly", function() {
            expect(addition(11, 11)).toBe(22);
        });
    });
}); */


/*-----------------------------------------------Flipped Cards---*/

describe("Cards", function() {

    beforeEach(function() {
        cards = new Cards;
    });

    // Click event
    describe("Click event", function(){
        it("should select the first card", function() {
            $(".memory-card").trigger("click");
            expect("click").toHaveBeenTriggeredOn(".memory-card");
        });
    });

    beforeEach(function() {
        modal = new Modal;
    });

    describe("Modal HTML Content", function() {
        it("should contain HTML", function() {
            expect(modal($(`<div class="modal-header text-center"><h5 class="modal-title">Congratulations!</h5></div>`))).toContainHtml("<h5></h5>");
        });
    });
});