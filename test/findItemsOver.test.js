
describe("the findItemsOver function", function () {

    it("Should return quantity of items left over", function () {
        assert.deepEqual(findItemsOver(itemList), results);
    })

        it("Should return quantity of items left over", function () {
            assert.equal(findItemsOver("pears 37"),"" );

    });
    it("should return false for items with quantity under 20", function(){
         assert.equal(false, findItemsOver("apples 10"))
}) 
})
