var slideIndex = 0;
var hiddenImgOne = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");    
    slides[hiddenImgOne].style.opacity = "0";
    slides[hiddenImgOne].style.position = "absolute";
    slides[hiddenImgOne].style.float = "left"; 
    
    slideIndex++; 
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = "1";
    slides[slideIndex-1].style.position = "relative";
    slides[slideIndex-1].style.float = "left";
    hiddenImgOne = slideIndex-1;
    setTimeout(showSlides, 10000); // Change image every 7 seconds
}