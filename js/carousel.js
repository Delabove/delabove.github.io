"use strict";

console.log("hello.")

// BASIC CAROUSEL CODE

// START
// IMAGE ARRAY
// TIME BETWEEN EACH IMAGE
// FUNCTION TO LOOP THROUGH THE IMAGES

        let i = 0;
        let imageArray = [];
        let time = 5000;

        imageArray[0] = 'Project-GIFS/coffee-project.gif';
        imageArray[1] = 'Project-GIFS/weatherMap.gif';
        imageArray[2] = "Project-GIFS/Adlister.gif";


function changingImages() {
    document.slide.src = imageArray[i];
    if(i < imageArray.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changingImages()', time);
}
window.onload=changingImages();
// imageArray[0] = "image_1.gif";
// imageArray[1] = "image_2.gif";
// imageArray[2] = "image_3.gif";
//
// function swapImage()
// {
//     document.slide.src = path[i];
//     if(i < path.length - 1) i++;
//     else i = 0;
//     setTimeout("swapImage()",3000);
// }
