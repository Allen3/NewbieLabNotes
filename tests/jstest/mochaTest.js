describe("pow", () => {

    beforeEach( () => {
        console.log("Testing started - before test");
        //alert("Testing started - before all tests");
    } );
    afterEach( () => {
        console.log("Testing finished - after test");
        // alert("Testing finished - after all tests");
    } );
    
    describe("raises x to power n", () => {
        function generateTest(num) {
            let expectedResult = num * num * num;
    
            it (`$(num) in the power 3 is ${expectedResult}` , () => {
                assert.equal(power(num, 3), expectedResult);
            });
        }
    
        for (let i = 1;i < 10;i ++) {
            generateTest(i);
        }
    });    
});