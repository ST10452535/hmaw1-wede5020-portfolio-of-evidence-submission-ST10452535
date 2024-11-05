$(document).ready(function() {
    // Nav-bar (Scrolling) - (WORKING)
    $(window).scroll(function() {
        const navbar = $('.nav-bar');
        if ($(this).scrollTop() > 0) {
            navbar.css('background-color', '#FFAE42');
        } else {
            navbar.css('background-color', 'transparent');
        }
    });

    // Home (Image-carousel) - (WORKING)
    let currentIndex = 0;
    const totalSlides = $('.slide').length;

    $('.forward').click(function() {
        if (currentIndex < totalSlides - 4) {
            currentIndex++;
            updateCarousel();
        }
    });

    $('.back').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * 25;
        $('.carousel-images').css('transform', `translateX(${offset}%)`);
    }

    // Questions (Drop-down Answer show) - (WORKING)
    $('.question').click(function() {
        const answer = $(this).next();
        const isVisible = answer.css('display') === 'block';

        answer.css('display', isVisible ? 'none' : 'block');
    });
});
