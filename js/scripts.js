var wordReplace = function(inputString, wordToReplace, replacementWord) {

	var regex = new RegExp("\\b" + wordToReplace + "\\b", "gi");
	return inputString.replace(regex, replacementWord);

};


$(document).ready(function() {
	$("form#word-replace").submit(function(event) {

		var inputString = $("input#string").val();
		var wordToReplace = $("input#word").val();
		var replacementWord = $("input#replacement").val();
		var outputString = wordReplace(inputString, wordToReplace, replacementWord);

		$("form#word-replace")[0].reset();

		$(".input").text(inputString);
		$(".output").text(outputString);

		$("#result").show();

		event.preventDefault();
	});

});





 


