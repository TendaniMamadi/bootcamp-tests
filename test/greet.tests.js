describe('test my greet function', function (){
    it("It should return 'Hello, Tendani' when called with 'Tendani'", function(){
        assert.equal("Hello, Tendani", greet("Tendani"))
    })

    it("It should return 'Hello, Ngomso' when called with 'Ngomso'", function(){
        assert.equal("Hello, Ngomso", greet("Ngomso"))
    })

    it("It should return 'Hello, ' when called with ''", function(){
        assert.equal("Hello, ", greet(""))
    })

   
})