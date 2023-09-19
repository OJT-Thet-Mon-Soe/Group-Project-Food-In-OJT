$(document).ready(function () {
    $('.sec-top-mv a').click(function (e) {
        var href = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(href).offset().top
        }, '300');
        e.preventDefault();
    });

});