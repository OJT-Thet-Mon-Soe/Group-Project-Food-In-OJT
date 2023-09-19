$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('is-show');
    });
});