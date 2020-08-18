$(document).ready(function() {
    $('.preloader').addClass('active');
    $(window).load(function() {
        $('.preloader').delay(5000).fadeOut(function(){
            $('.img-info, .main-image').delay(6000).addClass('active');
        });
    });

    $('.parent > a').on('click', function(e){
        $(this).parent().siblings('.parent').find('.submenu').slideUp();
        $(this).parent().find('.submenu').slideToggle();
        $(this).parent('.parent').toggleClass('show');
        $(this).parent().siblings('.parent').removeClass('show');
        e.preventDefault();
    })

    $('.menu-toggle').on('click', function(){
        $('body').toggleClass('menu-slide');
    });

    var winW = $(window).width();

    var mob = winW < 992 ? 'mobile-menu' : '';
    $('body').toggleClass(mob);

    $(window).on('resize', function(){
        $('body').toggleClass(mob);
    })


    $('.form-group.password').each(function () {
        $(this).find('.field-group').append('<span class="icon-password icon-eye"/>');

        $('.icon-password').on('click', function (event) {
            event.stopImmediatePropagation();
            $(this).toggleClass("icon-eye icon-eye-off");
            var input = $(this).parent().find(".form-control");
            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    });
});