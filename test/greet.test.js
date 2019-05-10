describe("Greet Function",function(){
    it("Should return 'Hello, Sam'",function(){
        assert.equal(greet("Sam"),"Hello, Sam");

         assert.equal(greet("7"),"Hello, 7");
        // assert.deepEqual([Hello,sam],[Hello, sam]);
    }) 
})