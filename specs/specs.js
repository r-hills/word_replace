describe('wordReplace', function() {

	var string, wordToReplace, replacement, results;

	it("Test returning one simple word string", function() {
		string = "wow";
		wordToReplace = "wow";
		replacement = "how";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql("how");
	});

	it("Test replacing word at end simple multiple word string", function() {
		string = "its wow";
		wordToReplace = "wow";
		replacement = "how";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql("its how");
	});

	it("Test replacing word in the middle of a multiple word string", function() {
		string = "its wow bob";
		wordToReplace = "wow";
		replacement = "how";
		results = "its how bob";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});

	it("Test replacing word with mixed case in string", function() {
		string = "its wOw bob";
		wordToReplace = "wow";
		replacement = "how";
		results = "its how bob";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});



});

