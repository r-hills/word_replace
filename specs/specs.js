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

	it("Test replacing only whole word occurences of word in string", function() {
		string = "This is it, or this isn't it, or is it?";
		wordToReplace = "is";
		replacement = "was";
		results = "This was it, or this isn't it, or was it?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	

	it("Test replacing word with punctuation in it in string", function() {
		string = "This is it, or this isn't it, or is it?";
		wordToReplace = "isn't";
		replacement = "wasn't";
		results = "This is it, or this wasn't it, or is it?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	

	it("Test replacing any word with anything else in string", function() {
		string = "This <is> (*&^) is it?";
		wordToReplace = "is";
		replacement = "+";
		results = "This <+> (*&^) + it?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	

	it("Test replacing a chunk of string with something else", function() {
		string = "This is great isn't it?";
		wordToReplace = "is great";
		replacement = "BOB";
		results = "This BOB isn't it?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	

	it("Test replacing word surrounded by special characters in string", function() {
		string = "This (*is^) it?";
		wordToReplace = "is";
		replacement = "PLEASE HELP ME!!!  I AM TRAPPED IN A ROOM BEING FORCED TO PROGRAM AT GUN POINT! 123456 MAIN STREET";
		results = "This (*PLEASE HELP ME!!!  I AM TRAPPED IN A ROOM BEING FORCED TO PROGRAM AT GUN POINT! 123456 MAIN STREET^) it?";
	  expect(
	  	wordReplace(string, wordToReplace, replacement)
	  ).to.eql(results);
	});	


});

