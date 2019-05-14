describe("the findItemsOver20 function", function () {

    it("should return true if items have a quantity is more than 20", function () {
        assert.equal(true, findItemsOver20("bananas 27"))
    })

    it("should return false if items quantity is less than 20", function () {
        assert.equal(false, findItemsOver20("apples 3"))

    })
})
