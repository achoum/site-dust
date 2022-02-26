// Slide show
var current_slide_idx = 1;
showSlides(current_slide_idx);

function addSlideIdx(n) {
    showSlides(current_slide_idx += n);
}

function setCurrentSlide(n) {
    showSlides(current_slide_idx = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { current_slide_idx = 1 }
    if (n < 1) { current_slide_idx = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[current_slide_idx - 1].style.display = "block";
    dots[current_slide_idx - 1].className += " active";
}