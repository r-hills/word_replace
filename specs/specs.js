describe('wordReplace', function() {

	it("Test returning one simple word string", function() {
		var string = "wow";
		var wordToReplace = "wow";
		var replacement = "how"
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql("how");
	});

	it("Test replacing one word in simple multiple word string", function() {
		var string = "its wow";
		var wordToReplace = "wow";
		var replacement = "how"
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql("its how");
	});


});

