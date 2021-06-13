(function($) {
	var aiMsg = ["Hello There", "Are you forgetting something?", "You missed a few events, didn't you?", ":)"];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg, 0, 60, 50, 400);
		function aiMSGLoop(wordArray, index, writeSpeed, removeSpeed, waitSpeed) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			// var rand = Math.round(Math.random() * (wordArray.length-1)+ 0);
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[index], writeSpeed).then(function() {
				if(index != aiMsg.length - 1){
					setTimeout(function(){ 
						newElement
						.removeText(wordArray[index], removeSpeed)
						.then(function() {
						aiMSGLoop(wordArray, index + 1, (1.25)*writeSpeed, (1.25)*removeSpeed, (1.25)*waitSpeed);
							
					});
						 }, waitSpeed);
				} else {
					
				}
			});
		}
	});
	//AI Text typer
	$.fn.writeText = function(content, speed) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = speed;
			setInterval(function() {
				rand = Math.round(Math.random() * (300 + 1050));
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				} else {
					resolve();
				}
			}, rand);
		});
	};
	//AI Text Typer backspace
	$.fn.removeText = function(content, speed) {
		var elem = this;
		return new Promise(function(resolve, reject) {
			var contentArray = content.split("");
			var current = 0;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text().slice(0, -1));
					current++;
				} else {
					elem.remove();
					resolve();
				}
			}, speed);
		});
	};
})(jQuery);