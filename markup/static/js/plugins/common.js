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

$('.m-img-cont').each(function(){
    var imgCont = $(this).find('img').attr('src');
    $(this).css('background-image','url('+imgCont+')');
});

new WOW({
    mobile: false,
}).init();

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

var mySwiper = new Swiper('.tools-tab', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 7,
    breakpoints: {
        1100: {
            slidesPerView: 4,
        }
    },
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

$( ".tools__tabs" ).tabs({
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

var dataVal = $(".option.selected").data("value");

$('.myChart').each(function(){
    var it = $(this);

    var dataChart = it.data("chart").split(",");

    var dataLabel = it.data('label').split(",");

    var ctx = it;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for ou  r dataset
        data: {
            labels: dataLabel,
            datasets: [{
                    data: dataChart,
                    backgroundColor: 'transparent',
                    borderColor: '#1b203f',
                    pointBackgroundColor: "#488af3",
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBorderColor: "#488af3",
                }
            ],
        },
        // Configuration options go here
        options: {
            title: {
                display: false,
            },
            responsive: true,
            legend: {
                display: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            elements : { line : { tension:0}},
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                    }
                }]
            }
        }
    });
    

});
//     myLineChart.data.datasets[0].data[2] = 50;
// }

$('.myChartMulti').each(function(){
    var it = $(this);
    var dataLabelMulti = $(this).data("label").split(', ');
    console.log(dataLabelMulti)
    var ctx1 = it;
    var data = $(this).closest('.chart').find('select option').val().split(',');
    console.log(data)

    var chart = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'line',
        cubicInterpolationMode: 0, 

        // The data for ou  r dataset
        data: {
            labels: dataLabelMulti,
            datasets: [
                {
                    data: data,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 3,
                    borderColor: '#1b203f',
                    pointBackgroundColor: "#488af3",
                    pointBorderColor: "#488af3",
                 }
            ],
        },
        options: {
            legend: {
                display: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            elements : { line : { tension:0}},
            lineTension: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                    }
                }]
            }
        }

    });
    var elem = $(this).closest('.chart').find('select');
    $(elem).change(function(){
        var arr = $(this).val().split(',');
        chart.data.datasets[0].data =  arr;
        chart.update();
    })

});

$('.myChartPie').each(function(){
    var it = $(this);
    var dataPie = it.data("pie").split(",");
    var dataPieLabel = it.data("pielabel").split(",");
    var ctxPie = it;
    var myPieChart = new Chart(ctxPie, {
        // The type of chart we want to create
        type: 'pie',
        segmentShowStroke: false,
        segmentStrokeWidth: 0,

        // The data for ou  r dataset
			data: {
				datasets: [{
					data: dataPie,

                    borderWidth: 0,

                    backgroundColor: [
                        '#00a2d0',
                        '#48bdf3',
                        '#093479',
                        '#3460a6',
                        '#488af3',
                        '#12739c',
                        '#1090b5',
                        '#1a4d8c',
                        '#196bd1',
                        '#144077',
                        '#1625ad',
                        '#4a57ce',
                        '#2997ad',
                        '#137a8e',
                        '#347bbc',
                        '#084a87',
                        '#4c5bbf',
                        '#213199',
                        '#126d87',
                        '#52a1b7',
                        '#336baa',
                        '#164272',
                        '#374da3',
                        '#155f9b',
                        '#29b7bc',
                        '#1f57a5',
                        '#1058bc',
                        '#26639b',
                        '#1f45c4',
                    ], 
                }],
                labels: dataPieLabel,
            },
            
			options: {
                legend: {
                    display: true,
                    position: 'right',
                }
                
                
			}
    });

});
