
let slideIndex = 0;
showSlides();

function moveSlide(n) {
    slideIndex += n;
    showSlides();
    resetTimer();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("gallery-row");
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "flex";
}

let slideTimer = setInterval(function () { moveSlide(1); }, 5000);

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function () { moveSlide(1); }, 5000);
}

