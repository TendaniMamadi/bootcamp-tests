describe('test countAllPaarl function',function(){
    it('it should take a parameter string with registration numbers that starts with "CJ" separated with a comma and returns the number of registration numbers in the string for Paarl',function(){
        
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    })
})