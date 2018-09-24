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
        },
        passwordYet: {
            required: true,            
        }
    },

    errorPlacement: function (error, element) {},

    submitHandler: function() {
        $('#my-form').trigger('reset');
        alert("Ожидайте звонка!");
    },

});


$("#form-news").validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        name: {
            required: false,
        },
    },

    errorPlacement: function (error, element) {},

    submitHandler: function() {
        $(this).trigger('reset');
        alert("Ожидайте звонка!");
    },

});

$('.form-already').each(function() {
    $(this).validate({
        rules: {
            url: {
                required: true,            
            }
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            $("#form-already").css("display", "none");
            $("#form-desc").css("display", "flex");
        },
    
    });
});



function copy(str){
    let tmp   = document.createElement('INPUT'),
    focus = document.activeElement; 

    tmp.value = str;

    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    focus.focus();
};

$(".copy-button").click(function(){
    var str = $(".already-code").html();
    copy(str);
});

var constraints = {
    url: {
      presence: true,
      exclusion: {
        message: " is not allowed"
      }
    },
  };
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
    collapsible: true,
});

$(function () {

    $('.popup_close, .overlay, .humburger-overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .header-menu, .humburger-overlay').removeClass('visible');

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
    $('.header-menu, .humburger-overlay').addClass("visible");
    $('body').css('overflow', 'hidden');
});

$(".close-menu").click(function() {
    $(".header-menu, .humburger-overlay").removeClass("visible");
    $('body').css('overflow', 'auto');
});

$('.popup-reg-open').click(function() {
    $(".popup-sign").removeClass('visible')
});

$('.popup-sign-open').click(function () {
    $(".popup-reg").removeClass('visible');
    $(".popup-sign").addClass('visible'); 
});

$('.main-block table').each(function () {
    $(this).wrap('<div class="main-table-container"></div>');
});

$('.myChart').each(function(){
    var it = $(this);

    var ctx = it;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for ou  r dataset
        data: {
            labels: ["авг", "сен", "окт", "ноя", "дек", "2018", "фев", "мар", "апр", "май", "23", "24", "25", "26", "27", "28", "29", "30", "31", "июн", "2", "3", "4", "5", "6", "7", "8", "9", "10"],

            datasets: [{
                data: [20,24,26,26,30,30,30,26,36,32,33,32,32,31,32,33,32,32,32,30,34,30,31,32,33,30,34,30,31,32,33],
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: '#1b203f',
                pointBackgroundColor: "#488af3",
                pointRadius: 2,
                pointBorderColor: "#488af3",
            },],
            
        },
        // Configuration options go here
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            lineTension: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

});

$('.myChartMulti').each(function(){
    var it = $(this);

    var ctx1 = it;
    var chart = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'line',
        cubicInterpolationMode: 0, 

        // The data for ou  r dataset
        data: {
            labels: ["авг", "сен", "окт", "ноя", "дек", "2018", "фев", "мар", "апр", "май", "23", "24", "25", "26", "27", "28", "29", "30", "31", "июн", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
                {
                    data: [20,24,26,26,30,30,30,26,36,32,33,32,32,31,32,33,32,32,32,30,34,30,31,32,33,30,34,30,31,32,33],
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#1b203f',
                    pointBackgroundColor: "#488af3",
                    pointRadius: 2,
                    pointBorderColor: "#488af3",
                },{
                    data: [18,22,24,24,28,28,28,24,20,30,31,30,30,29,30,31,30,30,30,28,32,28,29,30,31,30,34,30,31,32,33],
                    backgroundColor: 'transparent',
                    borderColor: '#6c1515',
                    pointRadius: 2,
                    borderWidth: 1,
                    pointBackgroundColor: "#e92e2e",
                    pointBorderColor: "#e92e2e",
                },{
                    data: [16,20,22,22,26,26,26,22,10,28,29,28,28,27,28,29,28,28,28,26,30,26,27,28,29,30,34,30,31,32,33],
                    backgroundColor: 'transparent',
                    pointRadius: 2,
                    borderWidth: 1,
                    borderColor: '#167641',
                    pointBackgroundColor: "#19c466",
                    pointBorderColor: "#19c466",
                }
            ],
            
        },

        // Configuration options go here
        options: {
            legend: {
                display: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            lineTension: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

});


$('.myChartPie').each(function(){
    var it = $(this);

    var ctxPie = it;
    var myPieChart = new Chart(ctxPie, {
        // The type of chart we want to create
        type: 'pie',
        
        segmentShowStroke: false,
        segmentStrokeWidth: 0,

        // The data for ou  r dataset
			data: {
				datasets: [{
					data: [
                        7,11,23,10,16,17,57
                    ],

                    borderWidth: 0,

                    backgroundColor: [
                        '#00a2d0',
                        '#48bdf3',
                        '#093479',
                        '#3460a6',
                        '#488af3',
                        '#2859a9',
                        '#12739c'
                    ], 
                }],
                
                labels: [
                    'Россия',
                    'США',
                    'Канада',
                    'Франция',
                    'Испания',
                    'англия',
                    'барсик'
                ],
                 
            },
            
			options: {
                legend: {
                    display: true,
                    position: 'right',
                }
                
                
			}
    });

});
