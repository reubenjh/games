var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();


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
    blueCar.reset(otherCarPic);
    greenCar.reset(carPic);
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    blueCar.move();
    greenCar.move();
}

function drawAll() {
    drawTracks();
    blueCar.draw();
    greenCar.draw();
}