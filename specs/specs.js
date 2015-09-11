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

	it("Test replacing word with punctuation in string", function() {
		string = "This is a better test!!";
		wordToReplace = "test";
		replacement = "place";
		results = "This is a better place!!";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	

	it("Test replacing multiple occurences of word in string", function() {
		string = "This is a better place, or is it a better place?";
		wordToReplace = "better";
		replacement = "beer";
		results = "This is a beer place, or is it a beer place?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	





});

