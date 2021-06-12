var block     = document.getElementById('block'),
    brick     = document.getElementById('brick'),
    path      = document.getElementById('path'),
    gameover  = document.getElementById('gameover')
var blockRect = block.getBoundingClientRect(),
    brickRect = brick.getBoundingClientRect()
var left = 10;
brick.style.left = 10;
brick.style.top = 600;
block.style.top = 10;
block.style.left = Math.floor((Math.random() * (0.9 * screen.width - 5)) + 5);
block.style.backgroundColor = "purple";
gameover.style.top = 150;
gameover.style.left = 150

var speed = 8;

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
        if(LEFT) {
            left -= speed;
        }
        if(RIGHT) {
            left += speed;
        }
    }
}

var colors = ['pink', 'blue', 'purple', 'green', 'grey', 'yellow', 'orange']

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
        if (block.style.top === '595px' && blockRect.right > brickRect.left && blockRect.left < brickRect.right) {
            clearInterval(id)
            updateScore()
            block.style.top = 10;
            block.style.left = Math.floor((Math.random() * 390) + 5);
            block.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
            movedown()
        }
        if (top == 650) {
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
    document.getElementById("gameover").innerHTML="";
    score = 0
    document.getElementById("score").innerHTML=score;
    
}

function update() {
    move();
    brick.style.left = left + 'px'
    console.log(brick.style.left)
}