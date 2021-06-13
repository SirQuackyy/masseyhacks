const overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
const result = document.querySelector(".result");

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

var sanity = parseInt(params["sanity"]);
function decreaseSanity(removeValue) {
  sanity = removeValue;
  document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

function decreaseSanityShop(removeValue) {
  sanity = parseInt(sanity) - parseInt(removeValue);
  console.log(sanity)
  document.getElementById('sanityBar').style.width = 379 - sanity + "px";
}

popup = document.getElementById("popup");
openPopup();

function startGame(){
  var oneMinutes = 7,
  display = document.querySelector('#time');
  startTimer(oneMinutes, display);
  closePopup();
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    
    // set the position
    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';
  
    document.body.appendChild(img);
}
  
// collect all the divs
var divs = document.getElementsByClassName('fire');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(document.getElementById("backImg").getBoundingClientRect().top + 60, document.getElementById("backImg").getBoundingClientRect().height + 80);
    randomLeft = getRandomNumber(document.getElementById("backImg").getBoundingClientRect().left + 60, document.getElementById("backImg").getBoundingClientRect().width + 260);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
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

document.getElementById('backImg').setAttribute('draggable', false);
document.getElementById('fiyr').setAttribute('draggable', false);
document.getElementById('fiyr1').setAttribute('draggable', false);
document.getElementById('fiyr2').setAttribute('draggable', false);
document.getElementById('fiyr3').setAttribute('draggable', false);
document.getElementById('fiyr4').setAttribute('draggable', false);
document.getElementById('fiyr5').setAttribute('draggable', false);
document.getElementById('fiyr6').setAttribute('draggable', false);
document.getElementById('fiyr7').setAttribute('draggable', false);
document.getElementById('fiyr8').setAttribute('draggable', false);
document.getElementById('fiyr9').setAttribute('draggable', false);
document.getElementById('fiyr10').setAttribute('draggable', false);
document.getElementById('fiyr11').setAttribute('draggable', false);
document.getElementById('fiyr12').setAttribute('draggable', false);
document.getElementById('fiyr13').setAttribute('draggable', false);
document.getElementById('fiyr14').setAttribute('draggable', false);
document.getElementById('fiyr15').setAttribute('draggable', false);
document.getElementById('fiyr16').setAttribute('draggable', false);
document.getElementById('fiyr17').setAttribute('draggable', false);
document.getElementById('fiyr18').setAttribute('draggable', false);
document.getElementById('fiyr19').setAttribute('draggable', false);
document.getElementById('fiyr20').setAttribute('draggable', false);

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}

var putOut = 0;

disappear = function () {
  document.getElementById("fiyr").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear1 = function () {
  document.getElementById("fiyr1").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear2 = function () {
  document.getElementById("fiyr2").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear3 = function () {
  document.getElementById("fiyr3").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear4 = function () {
  document.getElementById("fiyr4").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear5 = function () {
  document.getElementById("fiyr5").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear6 = function () {
  document.getElementById("fiyr6").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear7 = function () {
  document.getElementById("fiyr7").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear8 = function () {
  document.getElementById("fiyr8").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear9 = function () {
  document.getElementById("fiyr9").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear10 = function () {
  document.getElementById("fiyr10").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear11 = function () {
  document.getElementById("fiyr11").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear12 = function () {
  document.getElementById("fiyr12").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear13 = function () {
  document.getElementById("fiyr13").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear14 = function () {
  document.getElementById("fiyr14").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear15 = function () {
  document.getElementById("fiyr15").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear16 = function () {
  document.getElementById("fiyr16").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear17 = function () {
  document.getElementById("fiyr17").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear18 = function () {
  document.getElementById("fiyr18").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear19 = function () {
  document.getElementById("fiyr19").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}
disappear20 = function () {
  document.getElementById("fiyr20").style.display = "none";
  putOut++;
  if(putOut == 21){
    clearInterval(interval);
    popup = document.getElementById("victory");
    openPopup();
  }
}

function victory() {
  closePopup();
  window.location.href = `masseyhacks/game.html?atk=${attack}&def=${defense}&hp=${hp}&sanity=${sanity}&pos=6`
}

var gameOver = false;
var interval = 0;
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (timer == 0) {
      // document.getElementById("69").style.display = "none";
      // document.getElementById("timer").style.display = "none";
      decreaseSanityShop(37.9)
      if(sanity < -72.01){
        gameOver = true;
      }
      if(gameOver) {
        return gameOverFunc();
      } else {
        return resultFunc();
      }
    }
    timer -= 1;
  }, 1000);
} 
function resultFunc() {
  popup = document.getElementById("results");
  openPopup();
}

function gameOverFunc() {
  popup = document.getElementById("gameover");
  openPopup();
}

function playAgain() {
  closePopup();
  window.location.pathname = "/game.html"
}

function startAgain() {
  closePopup();
  clearInterval(interval);
  putOut = 0;
  for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(document.getElementById("backImg").getBoundingClientRect().top + 60, document.getElementById("backImg").getBoundingClientRect().height + 80);
    randomLeft = getRandomNumber(document.getElementById("backImg").getBoundingClientRect().left + 60, document.getElementById("backImg").getBoundingClientRect().width + 260);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
  }
  document.getElementById("fiyr").style.display = "block";
  document.getElementById("fiyr1").style.display = "block";
  document.getElementById("fiyr2").style.display = "block";
  document.getElementById("fiyr3").style.display = "block";
  document.getElementById("fiyr4").style.display = "block";
  document.getElementById("fiyr5").style.display = "block";
  document.getElementById("fiyr6").style.display = "block";
  document.getElementById("fiyr7").style.display = "block";
  document.getElementById("fiyr8").style.display = "block";
  document.getElementById("fiyr9").style.display = "block";
  document.getElementById("fiyr10").style.display = "block";
  document.getElementById("fiyr11").style.display = "block";
  document.getElementById("fiyr12").style.display = "block";
  document.getElementById("fiyr13").style.display = "block";
  document.getElementById("fiyr14").style.display = "block";
  document.getElementById("fiyr15").style.display = "block";
  document.getElementById("fiyr16").style.display = "block";
  document.getElementById("fiyr17").style.display = "block";
  document.getElementById("fiyr18").style.display = "block";
  document.getElementById("fiyr19").style.display = "block";
  document.getElementById("fiyr20").style.display = "block";
  startTimer(10, document.querySelector('#time'));
}