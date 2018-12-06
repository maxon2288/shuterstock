
$(window).on('load', function() { // makes sure the whole site is loaded
    setTimeout(function () {
        $(".preload-body").css('overflow-y', 'auto');
    }, 1000);
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
});