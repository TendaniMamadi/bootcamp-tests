describe('test isWeekday fuction', function(){
    it("it should take a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day).",function(){
       
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);

    })

    it("it should take a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day).",function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);

    })

    it("it should take a string parameter - to find out if the parameter passed in is a day of the week (ie. Not a weekend day).",function(){
        
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        

    })
})