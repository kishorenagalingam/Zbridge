$(document).ready(function() {
    $('.preloader').addClass('active');
    $(window).load(function() {
        $('.preloader').delay(5000).fadeOut(function(){
            $('.img-info, .main-image').delay(6000).addClass('active');
        });
    });


    $('.menu-toggle').on('click', function(){
        $('body').toggleClass('menu-slide');
    })

    let win = $(window),
        winH = win.height(),
        header = $('.header-navbar'),
        headerHeight = header.height();

        let navigation = $('.sidebar-menu .navigation'),
        navgationHeight = winH - headerHeight;


        

        function sidebar(){
            navigation.height(navgationHeight);
        }
        sidebar();

        $(window).on('resize', function(){
            sidebar();
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