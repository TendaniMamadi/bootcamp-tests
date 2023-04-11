describe('test my transportFee function', function(){
    it("it should return the right price based on the shift you are working. 'morning' shift the transport cost is R20, 'afternoon' shift is R10. If you work 'nightshift' you pay R0.00", function(){
        assert.equal(transportFee('morning'), 'R20');
       
    })

    it("it should return the right price based on the shift you are working. 'morning' shift the transport cost is R20, 'afternoon' shift is R10. If you work 'nightshift' you pay R0.00", function(){
        
        assert.equal(transportFee('afternoon'), 'R10');
       
    })

    it("it should return the right price based on the shift you are working. 'morning' shift the transport cost is R20, 'afternoon' shift is R10. If you work 'nightshift' you pay R0.00", function(){
       
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })
})