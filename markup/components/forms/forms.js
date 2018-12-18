function forms () {

    
    
    $('.form-already').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        var password = it.find("input[name='password']");
        $(this).validate({
        
            errorPlacement: function (error, element) {},
        
            submitHandler: function() {
                it.find('input').val('');
                var form_data = $(this).serialize(); //собераем все данные из формы
                // $.ajax({
                //     // type: "get", //Метод отправки
                //     // url: dataUrl, //путь до php фаила отправителя
                //     // data: form_data,
                //     //type: "POST",
                //     // cache: false,
                //     // processData: false,
                //     // contentType: false,
                //     success: function(data){
                    
                //         if(data == 0) {
                //             $('.no-portfolio').addClass('visible');
                //         }
                        
                //         else {
                //             // Открываем след. модалку, в ней указываем input type = hidden в котором указываем введенное портфолио
                //             $("input, textarea").val('');
                //             $('.form-already').addClass('hidden');
                //             $('.form-desc').addClass('visible');
                //         }
                        
                //     },
                //     error: function(error) {
                        
                //     }
                // });
            },    
        });
    });
    
    $('.form-desc').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        it.validate({
            submitHandler: function() {
                it.find('input').val('');
                // $.ajax({
                //     // type: "get", //Метод отправки
                //     // url: form_data, //путь до php фаила отправителя
                //     // data: formdata,
                //     //type: "POST",
                //     // cache: false,
                //     // processData: false,
                //     // contentType: false,
                //     success: function(data){
                    
                //         location.reload()
                        
                //     },
                //     error: function(error) {
                        
                //     }
                // });
            },  
        });
    });

    $('#form-news').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        it.validate({
            errorPlacement: function (error, element) {},
        
            submitHandler: function() {
                it.find("input").val('');
                it.find(".thanx").addClass('visible');
                $(".thanx").addClass("visible");
            },
        
        });
    });

    $('.my-form').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        it.validate({
            errorPlacement: function (error, element) {},
            submitHandler: function() {
                $(".my-form input").val('');
                
            },
        });
    });
    $('.form-reg').each(function() {
        var it = $(this);
        rules = {
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
            url: {
                required: true,
                url: true
            },
            name: {
                required: false,
            },
            password: {
                required: true,
                minlength: 3
            },
            passwordYet: {
                required: true,
                minlength: 3
            }
        }
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy",
            topic: "Please select at least 2 topics"
        }

        it.validate({
            errorPlacement: function (error, element) {},
            
            submitHandler: function() {
               it.find('input, textarea').val('');
            },
        
        });
    });

    $('.form').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        it.validate({
            errorPlacement: function (error, element) {},
        
            submitHandler: function() {
                $(".my-form input").val('');
                
            },
        
        });
    });

    $('.recovery').each(function() {
        var it = $(this);
        // it.rules('add', rules);
        it.validate({
            errorPlacement: function (error, element) {},
            
            submitHandler: function() {

                // $(".my-form input").val('');
                // var dataPopup = it.data('popup');
                // $('.overlay').addClass('visible');
                // $('.' + dataPopup).addClass('visible');
            },
        
        });
    });
    $('.new-password').each(function() {
        var it = $(this);
        var rules = {
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
            url: {
                required: true,
                url: true
            },
            name: {
                required: false,
            },
            password: {
                required: true,
            },
            passwordYet: {
                required: true,  
                equalTo: '#password-1'
            }
        }
        it.validate({
            errorPlacement: function (error, element) {},
            
            submitHandler: function() {

                // $(".my-form input").val('');
                // var dataPopup = it.data('popup');
                // $('.overlay').addClass('visible');
                // $('.' + dataPopup).addClass('visible');
            },
        
        });
    });
    $(".popup-newPassword").addClass('visible');


    // var rules = {
    //     email: {
    //         required: true,
    //         email: true,
    //     },
    //     phone: {
    //         required: true,
    //             digits: true,
    //     },
    //     messages: {
    //         required: true,
    //     },
    //     url: {
    //         required: true,
    //         url: true
    //     },
    //     name: {
    //         required: false,
    //     },
    //     password: {
    //         required: true,
    //     },
    // }
    
}

