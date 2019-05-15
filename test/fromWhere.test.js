describe("the town fromWhere a car comes function",function(){
    it("Should return a cars registration number and return the town the car is from",function(){
        assert.equal(fromWhere("CY"), "Bellville");
    })
    it("should return a cars registration number and return the town the car is from", function(){
        assert.equal(fromWhere("CJ"), "Paarl");
    })
    it("should return a cars registration number and return the town the car is from", function(){
        assert.equal(fromWhere("CA"), "Cape Town");
    })
    it("should return a cars registration number and return the town the car is from", function(){
        assert.equal(fromWhere(""), "Some other place!")
    });
})

