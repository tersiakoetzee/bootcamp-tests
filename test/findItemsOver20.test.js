describe("the findItemsOver20 function", function () {

    it("should return if items have a quantity is more than 20", function () {
        assert.equal(findItemsOver20("pears"), "")
    })
    it("should return if items have a quantity is more than 20", function () {
        assert.equal(findItemsOver20("bananas"), "")
})

    it("should return false if items quantity is less than 20", function () {
        assert.equal(false, findItemsOver20("apples 3"))

    })
})
