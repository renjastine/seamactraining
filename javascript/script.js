$(document).ready(function(){
    if ($(window).width() <= 650) {
        $('html, body').animate({
            scrollTop: $("#b-image").offset().top
        }, 800); // 800ms smooth scroll
    }
});