describe("the transportFee", function () {

    it("Should return morning shift by amount spent on travelling ", function () {
        assert.equal(transportFee("morning"), "R20");
    });
    it("Should return afternoon shift by money spent on travelling ", function () {
        assert.equal(transportFee("afternoon"), "R10");
    })
    it("should return night shift if travelling was free",function(){
        assert.equal(transportFee("night"),"free")
})
})