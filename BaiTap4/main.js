/** @format */
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var listDot = document.getElementById('listDot');
var slides = document.getElementsByClassName('slides');
var slideIndex = 1;
for (var i = 0; i < slides.length; i++) {
    var dot_1 = document.createElement('li');
    listDot.appendChild(dot_1);
    dot_1.classList.add('dot');
}
var dot = document.querySelectorAll('.dot');
Array.from(dot, function (item, index) {
    item.onclick = function () {
        currentSlide(index + 1);
    };
});
var plusSlides = function (n) {
    showSlides((slideIndex += n));
};
var currentSlide = function (n) {
    showSlides((slideIndex = n));
};
var showSlides = function (n) {
    var dots = document.querySelectorAll('.dot');
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
};
showSlides(slideIndex);
prev.onclick = function () { return plusSlides(-1); };
next.onclick = function () { return plusSlides(1); };
