function forms () {

    
    // M.toast({html: 'I am a toast!', displayLength: 10000000,})
    $('.form-already').each(function() {
        var it = $(this);
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },
        
            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
            submitHandler: function() {
                it.find('input, textarea').val('');
            },    
        });
    });
    
    $('.form-desc').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
            submitHandler: function() {
                it.find('input, textarea').val('');
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
    // $(".popup-newPassword, .overlay").addClass('visible');    
    $('#form-news').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
        
            submitHandler: function() {
                it.find('input, textarea').val('');
                it.find(".thanx").addClass('visible');
                $(".thanx").addClass("visible");
            },
        
        });
    });

    $('.my-form').each(function() {
        var it = $(this);
        it.validate({
            submitHandler: function() {
                it.find('input, textarea').val('');
                
            },
        });
    });
    $('.form-reg').each(function() {
        var it = $(this);

        it.validate({

            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                },
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },

            
            submitHandler: function() {
               it.find('input, textarea').val('');
            },
        
        });
    });
    $('.form-sign').each(function() {
        var it = $(this);

        it.validate({

            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                },
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },

            submitHandler: function() {
               it.find('input, textarea').val('');
            },
        
        });
    });

    $('.form').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
        
            submitHandler: function() {
                it.find('input, textarea').val('');
                
            },
        
        });
    });

    $('.recovery').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
            
            submitHandler: function() {
                
                it.find('input, textarea').val('');
                $(".popup").removeClass('   visible')
                var dataPopup = it.data('popup');
                $('.overlay').addClass('visible');
                $('.' + dataPopup).addClass('visible');
            },
        
        });
    });
    $('.new-password').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                url: {
                    required: true,
                    url: true
                },
                name: {
                    required: false,
                },
                text: {
                    required: true,
                },
                password: {
                    required: true,
                }
            },

            messages: {
                email: {
                    required: "Это поле обязательно",
                    url: 'введите адрес корректно',
                },
            },
            
            submitHandler: function() {
                it.find('input, textarea').val('');
                $(".popup").removeClass('visible')
                var dataPopup = it.data('popup');
                $('.overlay').addClass('visible');
                $('.' + dataPopup).addClass('visible');

                // $(".my-form input").val('');
                // var dataPopup = it.data('popup');
                // $('.overlay').addClass('visible');
                // $('.' + dataPopup).addClass('visible');
            },
        
        });
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Это поле обязательно",
        url: 'введите адрес корректно',
        equalTo: 'Пароли не совпадают',
        email: {
            required: "Это поле обязательно",
            url: 'введите адрес корректно',
        },
        url: {
            email: 'Введите E-mail корректно',
            required: "Это поле обязательно",
            url: 'введите адрес корректно',
        },
        name: {
            email: 'Введите E-mail корректно',
            required: "Это поле обязательно",
            url: 'введите адрес корректно',
        },
        text: {
            email: 'Введите E-mail корректно',
            required: "Это поле обязательно",
            url: 'введите адрес корректно',
        },
        password: {
            email: 'Введите E-mail корректно',
            required: "Это поле обязательно",
            url: 'введите адрес корректно',
        },
    });
}

