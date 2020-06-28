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
    modalImg.style.display = ""
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function openCity(evt, cityName) {
    // Declare all variables
    var i;
    var tabcontent =  document.getElementsByClassName("tabcontent");
    var tablinks;

    // Get all elements with class="tabcontent" and hide them

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}