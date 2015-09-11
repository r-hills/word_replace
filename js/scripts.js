var wordReplace = function(inputString, wordToReplace, replacementWord) {

	var regex = new RegExp("\\b" + wordToReplace + "\\b", "gi");
	return inputString.replace(regex, replacementWord);

};







 


