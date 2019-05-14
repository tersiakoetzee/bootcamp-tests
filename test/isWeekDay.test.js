describe("The isWeekDay function", function () {

    it("should return true if day is a weekday", function () {
        assert.equal(true, isWeekDay("Monday"));
    });

    it("should return false if day is not a weekday", function () {
        assert.equal(false, isWeekDay("Saturday"));
    })
})
