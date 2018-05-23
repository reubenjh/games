var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40; 
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15; 
var trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;


function trackLoadImages() {
    roadPic.src = "images/track_road.png";
    wallPic.src = "images/track_wall.png";
}

function drawTracks() {
    for (var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
        for (var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);

            if (trackGrid[arrayIndex] == TRACK_ROAD) {
                canvasContext.drawImage(roadPic, TRACK_WIDTH*eachCol, TRACK_HEIGHT*eachRow);
            } else if (trackGrid[arrayIndex] == TRACK_WALL) {
                canvasContext.drawImage(wallPic, TRACK_WIDTH*eachCol, TRACK_HEIGHT*eachRow);
            } // end of draw road or track
        } // end of for each col
    } // end of for each row
} // end of drawTracks func

function carTrackHandling() {
    var carTrackCol = Math.floor(carX / TRACK_WIDTH);
    var carTrackRow = Math.floor(carY / TRACK_HEIGHT);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow)
    
    // test its a legal track
    if (carTrackCol >= 0 &&
        carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 &&
        carTrackRow < TRACK_ROWS) {

        // test track collision
        if (isWallAtColRow(carTrackCol, carTrackRow)) {
            // Undoes car movement that gets it stuck inside wall
            carX -= Math.cos(carAng) * carSpeed;
            carY -= Math.sin(carAng) * carSpeed;
            
            carSpeed *= -0.5;
        } // of track collision found
    } // end of valid col and row
} // end of carTrackHandling func

function isWallAtColRow (col, row) {
    // test its a legal track
    if (col >= 0 &&
        col < TRACK_COLS &&
        row >= 0 &&
        row < TRACK_ROWS) {

        var trackIndexUnderCoord = rowColToArrayIndex(col,row)
        return (trackGrid[trackIndexUnderCoord] == TRACK_WALL);
    } else {
        return false;
    }
}

function rowColToArrayIndex(col, row) {
    return col + (TRACK_COLS * row);
}