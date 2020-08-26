$(document).ready(function() {

    new PerfectScrollbar('.navigation');
    new PerfectScrollbar('.navigation .submenu');

    $('.preloader').addClass('active');
    $(window).load(function() {
        $('.img-info, .main-image').delay(6000).addClass('active');
        function preloader(){
            $('.preloader').delay(5000).fadeOut(function(){
                $('.img-info, .main-image').delay(6000).addClass('active');
                $('html').addClass('page-loaded');
            });
        }

        preloader();

        /* if ( !sessionStorage.getItem( 'doNotShow' ) ) {
            sessionStorage.setItem( 'doNotShow', true );
            preloader();
        } else {
           $ ('.preloader').hide();
        } */
    });

    $('#accordion .check-toggle').on("click", function(e) {
        e.stopPropagation();
    });

    $('.parent > a').on('click', function(e){
        $(this).parent().siblings('.parent').find('> .submenu').slideUp();
        $(this).parent().siblings('.parent').find('.parent .submenu').slideUp();
        $(this).parent().find('> .submenu').slideToggle();
        $(this).parent('.parent').toggleClass('show');
        $(this).parent().siblings('.parent').removeClass('show');
        $(this).parent().siblings().find('.parent').removeClass('show');
        e.preventDefault();

        if($(this).parent().hasClass('show') == 0) {
            $(this).parent('.parent').find('.parent').removeClass('show');
            $(this).parent('.parent').find('.parent .submenu').slideUp();
        }
    })


    $('.sidebar, .menu-toggle').on("click", function(e) {
        //e.stopPropagation();
    });

    $(document).click(function() {
       //$("body").removeClass("menu-slide")
    });

    $('.menu-toggle').on('click', function(){
        $('body').toggleClass('menu-slide');
        $('.navbar-nav .parent').find('.submenu').removeAttr('style');
        $('.navbar-nav .parent').removeClass('show');
    });

    $('[data-toggle="modal"]').on('click', function(e){
        $("body").removeClass("menu-slide");
        e.preventDefault();
    })

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