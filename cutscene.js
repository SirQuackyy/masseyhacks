var interval = 0;
(function($) {
	var aiMsg = ["Many months pass and things only get worse.", "Students are now all online doing virtual schooling.", "People lose their jobs due to the now-global pandemic.", "Trump almost starts World War III by killing an Iranian General with a drone.", "Kobe Bryant and his daughter die in a helicopter crash.", "A plane crash in Tehran kills 176 people.", "A white cop kneels on George Floyd’s neck for nine minutes, killing him on camera.", "Wildfires in the west cause the sun to turn red.", "Murder hornets storm the Pacific Northwest.", "Locust swarms are devastating Africa and Asia.", "A dam bursts in Michigan and floods a bunch of towns.", "No HP, No Attack, No Defense, No Sanity."
];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg, 0, 90, 80, 400);
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
						aiMSGLoop(wordArray, index + 1, (0.75)*writeSpeed, (0.75)*removeSpeed, (0.75)*waitSpeed);
							
					});
						 }, waitSpeed);
				} else {
					clearInterval(interval);
					document.getElementById('btn').style.visibility="visible";

					document.getElementById('attack_bar').style.color = "#ec008c";
					document.getElementById('attack_bar').style.width = "0px";
					
					document.getElementById('defense_bar').style.color = "#0093dd";
					document.getElementById('defense_bar').style.width = "0px";

					document.getElementById('hp_bar').style.color = "#00e51f";
					document.getElementById('hp_bar').style.width = "0px";
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

var sanity = 379;
function decreaseSanity(removeValue) {
    sanity = sanity - removeValue;
    if(sanity >= 379){
      sanity = 379;
    }
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

var attack = 1;
function increaseAttack(addValue) {
  attack = parseInt(attack) + parseInt(addValue);
  if(attack > 5){
    attack = 5;
    return;
  }
  if(attack < 0){
    attack = -1;
    return;
  }
  document.getElementById('attack_bar').style.color = "#ec008c";
  document.getElementById('attack_bar').style.width = attack * 40 + "px";
}

var defense = 1;
function increaseDefense(addValue) {
  defense = parseInt(defense) + parseInt(addValue);
  if(defense > 5){
    defense = 5;
    return;
  }
  if(defense < 0){
    defense = -1;
    return;
  }
  document.getElementById('defense_bar').style.color = "#0093dd";
  document.getElementById('defense_bar').style.width = defense * 40 + "px";
}

var hp = 1;
function increaseHP(addValue) {
  hp = parseInt(hp) + parseInt(addValue);
  if(hp > 5){
    hp = 5;
    return;
  }
  if(hp < 0){
    hp = -1;
    return;
  }
  document.getElementById('hp_bar').style.color = "#00e51f";
  document.getElementById('hp_bar').style.width = hp * 40 + "px";
}

setInterval(update, 30);
interval = setInterval(slowUpdate, 50);

function update() {
	decreaseSanity(0.865);
}

function slowUpdate() {
	var changeAtk = Math.random();
	var changeDef = Math.random();
	var changeHp = Math.random();
	if(changeAtk < 0.5){
		increaseAttack(1);
	} else {
		increaseAttack(-1);
	}
	if(changeDef < 0.5){
		increaseDefense(1);
	} else {
		increaseDefense(-1);
	}
	if(changeHp < 0.5){
		increaseHP(1);
	} else {
		increaseHP(-1);
	}
}

