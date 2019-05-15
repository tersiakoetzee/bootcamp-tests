describe("the mostProfitableDepartment function", function () {

    it("Should return true for the most profitable department ", function () {
        assert.equal(true, mostProfitableDepartment("highestSale outdoor sales Thursday"), 18007 );
    });
    it("should return true for the most profitable department", function () {
        assert.equal(true, mostProfitableDepartment("highestSale carpentry, sales", 16109, "Friday"),);
    })

    it("should return false for the least profitable department", function () {
        assert.equal(false, mostProfitableDepartment("leastProfitable hardware sales 1500 Wednesday"), );

    })
})
