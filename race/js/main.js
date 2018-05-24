var canvas, canvasContext;


window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    // Welcome screen
    colorRect(0,0,canvas.width,canvas.height, "black");
    colorText("PRESS ANY KEY TO GOOOOOO", (canvas.width/2) - 70, (canvas.height/2) - 5, "white");
    document.addEventListener("keydown", startGameOnKeyPress);
}

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    carReset();
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    carMove();
    carTrackHandling();
}

function drawAll() {
    drawTracks();
    drawCar();
}