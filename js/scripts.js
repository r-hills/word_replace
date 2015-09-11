var wordReplace = function(inputString, wordToReplace, replacementWord) {

	var regex = new RegExp("\\b" + wordToReplace + "\\b", "gi");
	var outputString = inputString.replace(regex, replacementWord);

	return outputString;
};







 


