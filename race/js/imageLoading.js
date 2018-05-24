var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0; // Set automatically based on imageList.length in loadImages

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
    var imageList = [
        {varName: carPic, fileName: "images/player1car.png"},
        {varName: roadPic, fileName: "images/track_road.png"},
        {varName: wallPic, fileName: "images/track_wall.png"}
    ]

    picsToLoad = imageList.length;

    for (var i=0;i<imageList.length;i++) {
        beginLoadingImages(imageList[i].varName, imageList[i].fileName);
    }
}