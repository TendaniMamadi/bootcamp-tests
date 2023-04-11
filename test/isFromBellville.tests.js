describe('test my registration origin function', function(){
    it('it should return registration that starts with "CY" when called with "Bellville"', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CY 223'), true);
    })

    it('it should return registration that starts with "CJ" when called with "Cape Town"', function(){
        assert.equal(isFromBellville('CA 123'), false);
        assert.equal(isFromBellville('CJ 123'), false);
    })

    it('it should return registration that starts with "CY" when called with "Bellville"', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    })
})