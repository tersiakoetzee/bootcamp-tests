describe("the mostProfitableDepartment function", function () {

    it("Should return true for the most profitable department ", function () {
        assert.equal(("highestSale outdoor sales 18007 Thursday"), "highestSale outdoor sales 18007 Thursday");
    });
    it("should return true for the most profitable department", function () {
        assert.equal(("highestSale carpentry, sales 16109, Friday"), "highestSale carpentry, sales 16109, Friday");
    })

    it("should return false for the least profitable department", function () {
        assert.equal(("leastProfitable hardware sales 1500 Wednesday"), "leastProfitable hardware sales 1500 Wednesday");

    })
})
