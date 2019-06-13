// JavaScript Document
"use strict";
var i = 0; // start point
var images = [];
var time = 3000;

//image list
images[0] = "test1.png";
images[1] = "test2.png";
images[2] = "test3.png";
images[3] = "test4.png";
images[4] = "test5.png";
images[5] = "test6.png";
images[6] = "test7.png";
images[7] = "test8.png";
images[8] = "test9.png";
images[9] = "test10.png";

// change image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
