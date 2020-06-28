"use strict";

console.log("hello.")

// BASIC CAROUSEL STRUCTURE

        let i = 0;
        let imageArray = [];
        let time = 9000;

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

        // MODAL

var modal = document.getElementById("myModal");

var img = document.getElementById("mod-img");
var modalImg = document.getElementById("img01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}





function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}