describe('test my fromWhere function', function(){
    it('it should take a car registration number as a parameter and returns the town the car is from,otherwise return Some other place!', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })

    it('it should take a car registration number as a parameter and returns the town the car is from,otherwise return Some other place!', function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })

    it('it should take a car registration number as a parameter and returns the town the car is from,otherwise return Some other place!', function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })
})