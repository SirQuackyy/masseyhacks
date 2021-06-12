var block     = document.getElementById('block'),
    brick     = document.getElementById('brick'),
    path      = document.getElementById('path'),
    gameover  = document.getElementById('gameover')
var blockRect = block.getBoundingClientRect(),
    brickRect = brick.getBoundingClientRect(),
    pathRect  = path.getBoundingClientRect()
var left = 10;
brick.style.left = 10;
brick.style.top = Math.floor(screen.height * 0.69 - 170);
block.style.top = 10;
block.style.left = Math.floor((Math.random() * (0.6 * screen.width - 15)) + 5);
gameover.style.top = 150;
gameover.style.left = 150

var speed = 9;

function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        for (var i=0; i<pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

var params = getParams();

if(params["atk"]){
    increaseAttack(params["atk"])
}
if(params["def"]){
    increaseDefense(params["def"])
}
if(params["hp"]){
    increaseHP(params["hp"])
}
if(params["sanity"]){
    decreaseSanity(params["sanity"] * 3.79)
}

function increaseAttack(addValue) {
    attack = addValue;
    document.getElementById('attack_bar').style.color = "#ec008c";
    document.getElementById('attack_bar').style.width = attack * 40 + "px";
}
  
var defense = 0;
function increaseDefense(addValue) {
    defense = addValue;
    document.getElementById('defense_bar').style.color = "#0093dd";
    document.getElementById('defense_bar').style.width = defense * 40 + "px";
}
  
var hp = 0;
function increaseHP(addValue) {
    hp = addValue;
    document.getElementById('hp_bar').style.color = "#00e51f";
    document.getElementById('hp_bar').style.width = hp * 40 + "px";
}

var sanity = 379;
function decreaseSanity(removeValue) {
    sanity = removeValue;
    console.log(sanity);
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

//Keys
document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            LEFT = true;
            break;
        case 39:
            RIGHT = true;
            break;
        case 65:
            LEFT = true;
            break;
        case 68:
            RIGHT = true;
            break;
    }
};

document.onkeyup = function() {
    switch (window.event.keyCode) {
        case 37:
            LEFT = false;
            break;
        case 39:
            RIGHT = false;
            break;
        case 65:
            LEFT = false;
            break;
        case 68:
            RIGHT = false;
            break;
    }
};

//Movement
var LEFT = false;
var RIGHT = false;

function move() {
    if(started){
        brickRect = brick.getBoundingClientRect()
        if(LEFT && brickRect.left >= pathRect.left) {
            left -= speed;
        }
        if(RIGHT && brickRect.right <= pathRect.right) {
            left += speed;
        }
    }
}

var started = false;

function start() {
    brick.style.align
    started = true;
    reset();
    movedown();
}

function movedown() {
    var top = 0
    function frame() {
        top++
        block.style.top = top + 'px'
        var blockRect = block.getBoundingClientRect(),
            brickRect = brick.getBoundingClientRect()
        if (block.style.top == brick.style.top && blockRect.right >= brickRect.left && blockRect.left <= brickRect.right) {
            clearInterval(id)
            updateScore()
            block.style.top = 10;
            block.style.left = Math.floor((Math.random() * (0.6 * screen.width - 15)) + 5);
            movedown()
        }
        if (top == 650) {
            brick.style.left = left + 'px'
            document.getElementById("startButton").style.display = 'block';
            clearInterval(id);
            started = false;
            document.getElementById("gameover").innerHTML="GAME OVER";
        }
    }
    var id = setInterval(frame, 2)
}

var score = 0
function updateScore() {
    score++
    document.getElementById("score").innerHTML="Toilet Paper: " + score;
}

//Swipe Functionality
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            LEFT = true;
            RIGHT = false;
        } else {
            LEFT = false;
            RIGHT = true;
        }                       
    } 
    xDown = null;
    yDOwn = null;                                             
}

setInterval (update, 10);

function reset() {
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("gameover").innerHTML="";
    left = 0;
    score = 0
    document.getElementById("score").innerHTML="Toilet Paper: " + score;
    
}

function update() {
    move();
    brick.style.left = left + 'px'
}