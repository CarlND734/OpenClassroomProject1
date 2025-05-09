document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    let slideInterval;
    
    // Initialize auto-sliding
    startSlideShow();
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        resetInterval();
        goToSlide(currentIndex - 1);
    });
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        resetInterval();
        goToSlide(currentIndex + 1);
    });
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            resetInterval();
            goToSlide(parseInt(this.getAttribute('data-index')));
        });
    });
    
    // Function to go to a specific slide
    function goToSlide(index) {
        // Remove active class from current slide and dot
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        // Calculate new index with wrap-around
        currentIndex = index < 0 
            ? slides.length - 1 
            : index >= slides.length 
                ? 0 
                : index;
        
        // Add active class to new slide and dot
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Function to start the slideshow
    function startSlideShow() {
        slideInterval = setInterval(function() {
            goToSlide(currentIndex + 1);
        }, 3000); // Change slide every 3 seconds
    }
    
    // Reset interval when manually changing slides
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }
});
