var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 3;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImages(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = fileName;
}

function loadImages() {
    beginLoadingImages(carPic, "images/player1car.png");
    beginLoadingImages(roadPic, "images/track_road.png");
    beginLoadingImages(wallPic, "images/track_wall.png");
}