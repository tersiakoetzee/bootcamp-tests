describe("the countRegNumber function", function () {

    it("should return registrations for that town  ", function () {
        assert.equal(countRegNumber("CL 124,CL 345, CL 341,CL "), "");
    });
    it("should return registration for that town", function () {
        assert.equal(countRegNumber('CL 124,CY 567,CL 345, CJ 456,CL 341,CF'), "");
    })
})