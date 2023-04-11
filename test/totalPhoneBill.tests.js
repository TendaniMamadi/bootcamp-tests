describe('test my totalPhoneBill function', function(){
    it("it should calculate the total bill for the data provided.The cost is:R2.75 per call, R0.65 per sms.", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })

    it("it should calculate the total bill for the data provided.The cost is:R2.75 per call, R0.65 per sms.", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("it should calculate the total bill for the data provided.The cost is:R2.75 per call, R0.65 per sms.", function(){
       
        assert.equal('R3.40', totalPhoneBill('call, sms'));
       
    })
})