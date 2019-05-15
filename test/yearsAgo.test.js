describe('how many years ago that was' , function(){
    
    it('should return how many years ago it was' , function(){
        assert.equal(yearsAgo(2000),19);

    });
    it('should return exact years ago it was' , function(){
        assert.equal(yearsAgo(1995),24)

})
})
