let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

// Function to move the slides
function moveSlide(direction) {
    // Clear the automatic sliding interval when manually navigating
    clearInterval(autoSlideInterval);

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Restart the automatic sliding
    startAutoSlide();
}

// Function to start automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Change slide every 3 seconds
}

// Start the automatic slide when the page loads
startAutoSlide();