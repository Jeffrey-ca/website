document.addEventListener('DOMContentLoaded', function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image paths here
    let currentImageIndex = 0;
    const slideshow = document.getElementById('slideshow');
    const imgElement = slideshow.querySelector('img');

    function changeImage(next) {
        // Determine the next image index
        currentImageIndex = (currentImageIndex + next + images.length) % images.length;
        // Apply the new image src
        imgElement.src = images[currentImageIndex];
        // Re-apply the fade-in animation
        imgElement.classList.remove('fade-in');
        void imgElement.offsetWidth; // Trigger reflow to restart the animation
        imgElement.classList.add('fade-in');
    }

    document.getElementById('next').addEventListener('click', function() { changeImage(1); });
    document.getElementById('prev').addEventListener('click', function() { changeImage(-1); });
});
