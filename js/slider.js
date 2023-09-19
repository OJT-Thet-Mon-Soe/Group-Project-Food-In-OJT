$(document).ready(function () {
    // Top Page Slider
    // menu item section
    $('.sec-menu-item .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sec-menu-item .slider-nav'
    });
    $('.sec-menu-item .slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,

        variableWidth: true,
        focusOnSelect: true
    });

    // Our Branches Section
    $('.sec-top-branches .center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        fade: false,
        variableWidth: true,
        cssEase: 'linear',
        asNavFor: '.sec-top-branches .slider-nav'
    });
    $('.sec-top-branches .slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        asNavFor: '.center',
        dots: false,
        centerMode: true,
        variableWidth: true,
        cssEase: 'linear',
        focusOnSelect: true
    });
});