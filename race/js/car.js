var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.96;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.07;


function carReset() {
    for (var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
        for (var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                trackGrid[arrayIndex] = TRACK_ROAD;
                carAng = -Math.PI/2;
                carX = eachCol * TRACK_WIDTH;
                carY = eachRow * TRACK_HEIGHT;
            } // end of if car found
        } // end of search columns
    } // end of search rows
} // end of carReset func

function carMove() {
    carSpeed *= GROUNDSPEED_DECAY_MULT; // Handling natural deceleration

    if (keyHeldGas) { // Accelerate
        carSpeed += DRIVE_POWER;
    }
    if (keyHeldReverse) { // Brake
        carSpeed -= REVERSE_POWER;
    }
    if (keyHeldTurnRight) { // Turn right
        carAng += TURN_RATE;
    }
    if (keyHeldTurnLeft) { // Turn left
        carAng -= TURN_RATE;
    }

    // Account for angle
    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
}

function drawCar() {
    drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}