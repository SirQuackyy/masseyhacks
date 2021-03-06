var backgroundMusic = new Audio('./sounds/backgroundStart.m4a');
backgroundMusic.play();
(function($) {
	var aiMsg = ["The End", "Are you forgetting something?", "Did you actually think that was the end?", "I'm not done with you just yet...", ":)"];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg, 0, 60, 50, 400);
		function aiMSGLoop(wordArray, index, writeSpeed, removeSpeed, waitSpeed) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			// var rand = Math.round(Math.random() * (wordArray.length-1)+ 0);
			//my type writer uses object function so no need to code 
			//long function every time
            if(index == aiMsg.length - 1 || index == 0){
                writeSpeed = 400;
            }
            if(index == 1){
                writeSpeed = 81
            }
			newElement.writeText(wordArray[index], writeSpeed).then(function() {
				if(index != aiMsg.length - 1){
					setTimeout(function(){ 
                        if(index == 0){
                            backgroundMusic.pause();
                            document.getElementById("static").style.display = "block";
                            document.getElementById("reg_ai").style.display = "none";
                            var audio = new Audio('./sounds/static.mp3');
                            audio.play();
                            setTimeout(function() {
                            audio.pause();
                            document.getElementById("static").style.display = "none";
                            document.getElementById("reg_ai").style.display = "table";
                            }, 700);
                            newElement
						        .removeText(wordArray[index], removeSpeed)
						        .then(function() {
						            aiMSGLoop(wordArray, index + 1, (1.35)*writeSpeed, (1.35)*removeSpeed, (1.35)*waitSpeed);
                                });
                        } else {
                            newElement
						        .removeText(wordArray[index], removeSpeed)
						        .then(function() {
						            aiMSGLoop(wordArray, index + 1, (1.35)*writeSpeed, (1.35)*removeSpeed, (1.35)*waitSpeed);
                                });
                        }
					}, waitSpeed);
				} else {
                    document.getElementById("static").style.display = "block";
                    document.getElementById("reg_ai").style.display = "none";
                    var audio = new Audio('./sounds/static.mp3');
                    audio.play();
					setTimeout(function() {
                        location.href="cutscene.html"
                    }, 700);
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