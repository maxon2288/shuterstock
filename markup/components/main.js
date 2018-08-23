$('#my-form').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        phone: {
            required: true,
                digits: true,
        },
        messages: {
            required: true,
        },
        name: {
            required: false,
        },
        password: {
            required: true,            
        }
    },

    errorPlacement: function (error, element) {},

    submitHandler: function() {
        $('#my-form').trigger('reset');
        alert("Ожидайте звонка!");
    },

});

$('#my-form-2').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        phone: {
            required: true,
            digits: true,
        },
        messages: {
            required: true,
        },
        name: {
            required: false,
        },
        password: {
            required: true,
        }
    },

    errorPlacement: function (error, element) { },

    submitHandler: function () {
        $('#my-form').trigger('reset');
        alert("Ожидайте звонка!");
    },

});

$(document).ready(function () {
    $('select').niceSelect();
});


new WOW({
    mobile: false,
}).init();

$( ".tabs" ).tabs({
    hide: { effect: "fade", duration: 150 },
    show: { effect: "fade", duration: 150 },
});

$(".accordion").accordion ({
    hide: { effect: "fade", duration: 150 },
    show: { effect: "fade", duration: 150 },
    heightStyle: "content",
});

$(function () {

    $('.popup_close, .overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .header-menu').removeClass('visible');

    });

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        var popup = $(this).attr('data-popupBlock');
        if ($('.' + popup).hasClass('popup--notfixed')) {
            $('.' + popup).css('top', $(window).scrollTop() + $(window).height() / 2);
        };
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
        setTimeout(function () {
            $('.' + popup).find('input').eq(0).focus();
        }, 1000)
    });

});

$('.menu-open').click(function() {
    $('.header-menu, .overlay').addClass("visible");
    $('body').css('overflow', 'hidden');
});

$(".close-menu").click(function() {
    $(".header-menu, .overlay").removeClass("visible");
    $('body').css('overflow', 'auto');
});

$('.popup-reg-open').click(function() {
    $(".popup-sign").removeClass('visible')
});

$('.popup-sign-open').click(function () {
    $(".popup-reg").removeClass('visible');
    $(".popup-sign").addClass('visible')
    
});

$('.main-block table').each(function () {
    $(this).wrap('<div class="main-table-container"></div>');
});

mobiscroll.settings = {
    theme: 'ios',
    lang: 'en'
};

var now = new Date();
