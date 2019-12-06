var slideIndex = 1;
var myIndex = 0;
var slideTimeout;
//showSlides(slideIndex);




	//JSON
	var userdata = JSON.parse(data);
var title = userdata[0].title;
var cont = userdata[0].description;
changetitle();
function changetitle(){

		document.getElementById("carousel_h2").innerHTML = title;
		document.getElementById("carousel_p").innerHTML = cont;
console.log(title);
}


carousel();

// Thumbnail image controls
function currentSlide(n) {

showSlides(slideIndex = n);
}

function showSlides(n) {
clearTimeout(slideTimeout);
title = userdata[n -1].title;
cont = userdata[n-1].description;
changetitle();

var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
myIndex = n -1 ;
slideTimeout = setTimeout(carousel, 16500);
}
function carousel() {
var dots = document.getElementsByClassName("dot");
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
myIndex++;
console.log(myIndex)
if (myIndex > x.length) {myIndex = 1}
slideIndex = myIndex;
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
dots[slideIndex-1].className += " active";

title = userdata[myIndex-1].title;
cont = userdata[myIndex-1].description;
changetitle();    
x[myIndex-1].style.display = "block";  
slideTimeout = setTimeout(carousel, 8500);    
}



