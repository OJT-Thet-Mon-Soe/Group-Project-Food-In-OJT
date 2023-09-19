$(document).ready(function () {
    $(".menu-nav a").click(function () {
        $(".menu-nav li a").removeClass("active");
        $(this).addClass("active");

        $(".tab-content .tab-val").hide();
        $path = $(this).attr("href");
        $($path).show();

        return false;
    });

})