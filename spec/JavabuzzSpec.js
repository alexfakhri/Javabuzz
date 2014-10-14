describe('Javabuzz', function () {

	beforeEach( function() {
		javabuzz = new Javabuzz();
	});

	var javabuzz

	describe('knows when a number is', function () {

		it ('divisible by 3', function () {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true)
		});

		it ('divisible by 5', function () {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true)
		});

		it ('divisible by 15', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true)
		});

	});
	
	describe('knows when a number is NOT', function () {

		it ('divisible by 3', function()  {
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false)
		});

		it ('divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false)
		});

		it ('divisible by 15', function () {
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false)
		});

	});

	describe('when playing, says', function() {

		it ('"Java" when a number is divisible by 3', function() {
			expect(javabuzz.says(3)).toEqual("Java")
		});

		it ('"Buzz" when a number is divisible by 5', function() {
			expect(javabuzz.says(5)).toEqual("Buzz")
		});

		it ('"JavaBuzz" when a number is divisible by 15', function() {
			expect(javabuzz.says(15)).toEqual("JavaBuzz")
		});

		it('Number', function() {
			expect(javabuzz.says(1)).toEqual(1);
		});


	});
});

