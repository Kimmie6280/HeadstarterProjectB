let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ensure the index is within the bounds of the slides
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);
/*document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPreviousItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Automatic sliding
    setInterval(showNextItem, 3000); // Change the interval as needed

    // Optional: Add event listeners for next/previous buttons
    // document.querySelector('.next').addEventListener('click', showNextItem);
    // document.querySelector('.prev').addEventListener('click', showPreviousItem);
});*/