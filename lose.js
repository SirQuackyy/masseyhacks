var audio = new Audio('./sounds/jump.mp3');
audio.play();

setTimeout(function() {
    window.location.href = "loseReplay.html"
}, 2000)