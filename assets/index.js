/*

Scroll Top Button

*/

// Scroll top button var
var scrollTopButton = document.getElementById("scrollTop");

// Show Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.transform = "translateX(0%)";
  } else {
    scrollTopButton.style.transform = "translateX(100%)";
  }
}

// Scroll to top of page button
function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






/*

Mobile Nav

*/

// Mobile Optimization
var menu = document.getElementById("mobile");

function openMobile() {
    menu.style.transform = "translateX(0%)";
    document.getElementById("cover").style.display = "block";
}

function closeMobile() {
    menu.style.transform = "translateX(100%)";
    document.getElementById("cover").style.display = "none";
}