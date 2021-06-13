(function($) {
	var aiMsg = ["Many months pass and things only get worse.", "Students are now all online doing virtual schooling.", "Social interaction barely exists now.", "People lose their jobs due to the now-global pandemic.", "This causes a global economic recession.", "Trump almost starts World War III by killing an Iranian General with a drone.", "He is impeached, but not removed from office.", "Kobe Bryant and his daughter die in a helicopter crash.", "A plane crash in Tehran kills 176 people.", "Prince Harry and Megan Markle renounce their royalty.", "The UK leaves the EU.",  "A white cop kneels on George Floyd’s neck for nine minutes, on camera." , "He dies, beginning a revolution for rights called Black Lives Matter.", "Wildfires in the west cause the sun to turn red.", "Murder hornets storm the Pacific Northwest.", "Puerto Rico is hit with many earthquakes.", "Flint, Michigan doesn’t have any clean water.", "Locust swarms are devastating Africa and Asia.", "A Saharan dust storm sweeps over southern US.", "A dam bursts in Michigan and floods a bunch of towns.",  "There is an Ebola outbreak in Africa.",  "Scandinavian sensors detect a radiation leak in Russia, which Russia denies."
];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg, 0);
		function aiMSGLoop(wordArray, index) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			// var rand = Math.round(Math.random() * (wordArray.length-1)+ 0);
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[index]).then(function() {
				setTimeout(function(){ 
					newElement
					.removeText(wordArray[index])
					.then(function() {
					aiMSGLoop(wordArray, index + 1);
						
				});
					 }, 2500);
			});
		}
	});
	//AI Text typer
	$.fn.writeText = function(content) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = 50;
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
	$.fn.removeText = function(content) {
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
			}, 40);
		});
	};
})(jQuery);

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}