(function($) {
	var aiMsg = ["You're challenging me?", "Fine, we'll see if you're strong enough to survive", "If you can kill 50 of my viruses with your vaccine gun, I will let you live this time", "If you get hit by one though...", "Oh, you thought you could use the attack and defense boosts that you purchased?", "Too bad... My game, my rules.",'You will fight alone.', '...', 'And die alone.'];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg, 0, 80, 70, 600);
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
						aiMSGLoop(wordArray, index + 1, writeSpeed, removeSpeed, waitSpeed);
							
					});
						 }, waitSpeed);
				} else {
					setTimeout(function() {
                        location.href="boss.html"
                    }, 5000);
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