forms ();
$('.my-form').each(function() {
    $(this).validate({
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
            url: {
                required: true,
                url: true
            },
            password: {
                required: true,            
                
            },
            passwordYet: {
                required: true,  
                equalTo: "#password"          
            }
        },
    
        errorPlacement: function (error, element) {},

    
        submitHandler: function() {
            it.find('input').val('');

            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: data,
                success: function(data){
                    
                }
            });
        },  
        
    
    });
});
$(document).ready(function() {
    $('.lang__ru').click();
    $(".lang__ru").click(function () {
    console.log('dsdsd');
    });
});



$('.search').each(function() {
    var it = $(this);
    it.validate({
        rules: {
            search: {
                required: true,
            }
        },
    
        errorPlacement: function (error, element) {},
    });
});

$("input[name='email']").focus(function() {
    $(this).next($('.popup__error')).addClass('remove');
});

$('.m-img-cont').each(function(){
    var imgCont = $(this).find('img').attr('src');
    $(this).css('background-image','url('+imgCont+')');
});

new WOW({
    mobile: false,
}).init();


$("input[name='email']").focus(function() {
    $(this).next($('.popup__error')).addClass('remove');
});

$('.m-img-cont').each(function(){
    var imgCont = $(this).find('img').attr('src');
    $(this).css('background-image','url('+imgCont+')');
});

new WOW({
    mobile: false,
}).init();

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

    $('.popupClose, .overlay, .humburger-overlay').on('click', function (event) {
        $('body').css('overflow', 'auto');
        $('.popup, .overlay, .thanx, .header-menu, .humburger-overlay, .period').removeClass('visible');
    });

    $(".callPopup").on('click', function (event) {
        event.preventDefault();
        $(".popup").removeClass("visible");
        var popup = $(this).attr('data-popupBlock');
        if ($('.' + popup).hasClass('popup--notfixed')) {
            $('.' + popup).css('top', $(window).scrollTop() + $(window).height() / 2);
        };
        $('body').css('overflow', 'hidden');
        $('.overlay').addClass('visible');
        $('.' + popup).addClass('visible');
    });

});

$(".popupClose, .overlay").click(function() {
    $(".popup, .overlay").removeClass('visible');
    $('body').css('overflow', 'auto');
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
        type: 'line',

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
            },
            animation: {
                duration: 0
            }
        }
    });
    

});
//     myLineChart.data.datasets[0].data[2] = 50;
// }

$('.myChartMulti').each(function(){
    var it = $(this);
    var dataLabelMulti = $(this).data("label").split(', ');
    var ctx1 = it;
    var data = $(this).closest('.chart').find('select option').val().split(',');

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
            },
            animation: {
                duration: 0
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
                },
                animation: {
                    duration: 0
                }
            },

    });

});

$('.mixedChart').each(function() {
    var it = $(this);
    var ctxmix = it;
    var radius = [];
    var background = [];
    var dataholiday = [];
    var datamixdata = it.data('mixdata').split('');
    console.log(datamixdata);
    var data = [100, 100, 100, 100, 100, 100, 100, 100];
    var holidays = [0,0,0,0,0,'Праздник 4',0,0];
    var min = data[0];
    // $.each( data, function( key, value ) {

    //     if(value < min)
    //     {
    //         min = value;
    //     }

    // });

    // var max = data[0];
    // $.each( data, function( key, value ) {

    //     if(value > max)
    //     {
    //         max = 1;
    //     }

    // });
    // var added = max-min;
    // var addednull = false;
    // if(added == 0) {
    //     added = 4;
    //     addednull = true;
    // }

    // $.each( holidays, function( key, value ) {
    //     if(value == 0) { 
    //         radius[key] = 0;
    //         background[key] = 'tranparent';
    //         if(addednull)
    //         {
    //             if(key == 0) dataholiday[key] = min-added;
    //             else  dataholiday[key] = min+added;
    //         }
    //         else dataholiday[key] = min+added/4; 
    //     }
    //     else {
    //         radius[key] = 5;
    //         background[key] = '#488af3';
    //         if(addednull) dataholiday[key] = min-added/2;
    //         else dataholiday[key] = min+added/4; 
    //     }
    // });

    var mixedChart = new Chart(ctxmix, {
        type: 'line',
        data: {
          datasets: [{
                label: 'Line Dataset',
                data: data,
                type: 'line',
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 3,
                borderColor: '#1b203f',
                pointBackgroundColor: "#488af3",
                pointBorderColor: "#488af3",
              },
              {
                type: 'bubble',
                label: 'Data2',
                borderWidth: 0,
                //borderColor: ["tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent", "tranparent"],
                backgroundColor: background,
                radius: radius,
                data: dataholiday,
                hoverRadius: -1,
                hoverBorderWidth: 0
              }],
          labels: ['January', 'February', 'March', 'April','January', 'February', 'March', 'April',]
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
            scales: {
                yAxes: [{
                    ticks: {
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
        
      });

});

$(window).on('load', function() { // makes sure the whole site is loaded
    setTimeout(function () {
        $(".preload-body").css('overflow-y', 'auto');
    }, 1000);
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
});

if ($("#map").length > 0) {
    $(document).ready(function () {
        var x = $('#map').attr('data-x');
        var y = $('#map').attr('data-y');
    
        var myMap;
    
        ymaps.ready(init);
    
        function init () {
            myMap = new ymaps.Map('map', {
                center: [x , y],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });
    
            var myPlacemark = new ymaps.Placemark([x, y], {
            });
    
            myMap.geoObjects.add(myPlacemark);
        }
    });

}


