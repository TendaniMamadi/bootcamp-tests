describe('test my totalPhoneBill function', function(){
    it("it should take in a string calls made and sms's sent. Calculate the total bill for the data provided.In the string 'call, sms, call, sms, sms' there are 2 calls and 3 sms's.The cost is:R2.75 per call, R0.65 per sms.For the string totalPhoneBill should return R7.45", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})