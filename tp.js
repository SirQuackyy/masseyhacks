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
block.style.left = Math.floor((Math.random() * (0.6 * screen.width - 55)) + 5);
gameover.style.top = 150;
gameover.style.left = 150;
const overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
const result = document.querySelector(".result");

var speed = 12;

function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        for (var i=0; i<pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1].split("#")[0];
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
    decreaseSanity(params["sanity"])
}
 
var attack = params["atk"];
function increaseAttack(addValue) {
    attack = addValue;
    document.getElementById('attack_bar').style.color = "#ec008c";
    document.getElementById('attack_bar').style.width = attack * 40 + "px";
}
 
function increaseAttackStore(addValue) {
    attack = parseInt(attack) + parseInt(addValue);
    if(attack > 5){
        attack = 5;
        return;
    }
    if(attack < 1){
        attack = 0;
        return;
    }
    if(sanity < -15.16){
        return;
    }
    decreaseSanityShop(67.6515);
    document.getElementById('attack_bar').style.color = "#ec008c";
    document.getElementById('attack_bar').style.width = attack * 40 + "px";
}

var defense = params["def"];
function increaseDefense(addValue) {
    defense = addValue;
    document.getElementById('defense_bar').style.color = "#0093dd";
    document.getElementById('defense_bar').style.width = defense * 40 + "px";
}
 
function increaseDefenseStore(addValue) {
    defense = parseInt(defense) + parseInt(addValue);
    if(defense > 5){
        defense = 5;
        return;
    }
    if(defense < 1){
        defense = 0;
        return;
    }
    if(sanity < -15.16){
        return;
    }
    decreaseSanityShop(67.6515);
    document.getElementById('defense_bar').style.color = "#0093dd";
    document.getElementById('defense_bar').style.width = defense * 40 + "px";
}

var hp = params["hp"];
function increaseHP(addValue) {
    hp = addValue;
    document.getElementById('hp_bar').style.color = "#00e51f";
    document.getElementById('hp_bar').style.width = hp * 40 + "px";
}
console.log(sanity)
function increaseHPStore(addValue) {
    hp += addValue;
    if(hp > 5){
        hp = 5;
        return;
    }
    if(hp < 1){
        hp = 0;
        return;
    }
    if(sanity < -15.16){
        return;
    }
    decreaseSanityShop(67.6515);
    document.getElementById('hp_bar').style.color = "#00e51f";
    document.getElementById('hp_bar').style.width = hp * 40 + "px";
}

var sanity = params["sanity"];
function decreaseSanity(removeValue) {
    sanity = removeValue;
    document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

function decreaseSanityShop(removeValue) {
    sanity = sanity - removeValue;
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

openPopup();

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
    closePopup();
    reset();
    movedown();
}

var gameOver = false;

function startAgain() {
    hp = params["hp"];
    increaseHP(params["hp"]);
    brick.style.align
    started = true;
    closePopup();
    reset();
    movedown();
}

function gameOverFunc() {
    popup = document.getElementById("gameover");
    openPopup();
}

function playAgain() {
    closePopup();
    window.location.pathname = "/game.html"
}

function openPopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
    popup.style.opacity = "1";
    overlay.style.opacity = "1";
}
  
function closePopup() {
    overlay.style.opacity = "0";
    popup.style.opacity = "0";
    popup.style.display = "none";
    overlay.style.display = "none";
}

function continueGame() {
    window.location.href = `/precut.html`
}

var score = 0
function movedown() {
    var top = 0
    function frame() {
        top += 2
        block.style.top = top + 'px'
        var blockRect = block.getBoundingClientRect(),
            brickRect = brick.getBoundingClientRect()
        if (blockRect.top >= brickRect.top && blockRect.right >= brickRect.left && blockRect.left <= brickRect.right) {
            clearInterval(id)
            updateScore()
            block.style.top = 10;
            block.style.left = Math.floor((Math.random() * (0.6 * screen.width - 55)) + 5);
            if(score >= 30){
                popup = document.getElementById("winner");
                openPopup();
            } else {
                movedown()
            }
        }
        if (top == 650) {
            brick.style.left = left + 'px'
            if(hp < 2){
                increaseHP(hp - 1);
                clearInterval(id);
                started = false;
                document.getElementById("gameover").innerHTML="GAME OVER";
                decreaseSanityShop(37.9)
                if(sanity < -72.01){
                    gameOver = true;
                }
                if(gameOver) {
                    return gameOverFunc();
                }
                result.innerHTML = "You picked up " + score + " rolls of toilet paper!";
                popup = document.getElementById("results");
                openPopup();
            } else {
                increaseHP(hp - 1);
                clearInterval(id)
                block.style.top = 10;
                block.style.left = Math.floor((Math.random() * (0.6 * screen.width - 55)) + 5);
                movedown()
            }
        }
    }
    var id = setInterval(frame, 2)
}

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
    left = 0;
    score = 0
    document.getElementById("score").innerHTML="Toilet Paper: " + score;
    
}

function update() {
    move();
    brick.style.left = left + 'px'
}