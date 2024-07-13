let currentIndex = 0;
const images = document.querySelectorAll('.slider-container img');
const totalImages = images.length;

function showImage(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const offset = -index * (200 + 10); // Adjust width + margin-right
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

function slideLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    showImage(currentIndex);
}

function slideRight() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function autoSlide() {
    slideRight();
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', autoSlide);

