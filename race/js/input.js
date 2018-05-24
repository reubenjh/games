const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeldGas = false;
var keyHeldReverse = false;
var keyHeldTurnLeft = false;
var keyHeldTurnRight = false;

var mouseX = 0;
var mouseY = 0;


function startGameOnKeyPress(evt) {
    evt.preventDefault();
    loadImages(); // starts game once image loading complete
    document.removeEventListener("keydown", startGameOnKeyPress);
}

function setupInput() {
    canvas.addEventListener("mousemove", updateMousePos);

    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}

function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left
    mouseY = evt.clientY - rect.top

    /*// cheat to test car in any position
    carX = mouseX;
    carY = mouseY;
    carSpeedX = 3;
    carSpeedY = -4;
    */
}

function keyPressed(evt) {
    //console.log(evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW) {
        keyHeldTurnLeft = true;
    }
    if (evt.keyCode == KEY_RIGHT_ARROW) {
        keyHeldTurnRight = true;
    }
    if (evt.keyCode == KEY_UP_ARROW) {
        keyHeldGas = true;
    }
    if (evt.keyCode == KEY_DOWN_ARROW) {
        keyHeldReverse = true;
    }
    evt.preventDefault();
}

function keyReleased(evt) {
    //console.log(evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW) {
        keyHeldTurnLeft = false;
    }
    if (evt.keyCode == KEY_RIGHT_ARROW) {
        keyHeldTurnRight = false;
    }
    if (evt.keyCode == KEY_UP_ARROW) {
        keyHeldGas = false;
    }
    if (evt.keyCode == KEY_DOWN_ARROW) {
        keyHeldReverse = false;
    }
    evt.preventDefault();
}