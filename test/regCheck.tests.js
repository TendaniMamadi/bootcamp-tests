describe('test my regCheck function', function(){
    it("it should check if a registration number is for GP.", function(){

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    })

    it("it should check if a registration number is for MP.", function(){
       
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })

    it("it should check if a registration number is for L.", function(){
       

        assert.equal(regCheck('BCC 230 L', 'L'), true);
        assert.equal(regCheck('BCC 230 L', 'M'), false);

   
    })
})