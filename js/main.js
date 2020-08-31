$(document).ready(function() {


    if($('.navigation').length) {
        new PerfectScrollbar('.no-touch .navigation');
        new PerfectScrollbar('.no-touch .navigation .submenu');
    }

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

    var mob = winW < 1024 ? 'mobile-menu' : '';
    $('body').toggleClass(mob);

    $(window).on('resize', function(){
        if($('body').hasClass('mobile-menu') == 0) {
            $('body').addClass(mob);
        } else {
            $('body').removeClass(mob);
        }
    });

    /* $('#fixed-table').DataTable( {
        scrollY: 400,
        scrollCollapse: true,
        paging: false,
        searching: false,
        ordering: false,
        info: false
    } ); */


    $(".table-fixed-header").scroll(function(){
        var topPosition = $(".table-fixed-header").scrollTop();
        $(".table-fixed-header table thead tr th").css({"top": (topPosition)});
      });

      function veritcalScroll() {
        if ($('.table-fixed-header tbody tr').length > 5) {
            var items = $('.table-fixed-header tbody tr').outerHeight();
            $('.table-fixed-header').css('max-height', 5 * items);
        }
    }

    if($('.table-fixed-header').length) {
        new PerfectScrollbar('.no-touch .table-fixed-header');
    }

    veritcalScroll();

    $(window).on('load resize', function () {
        veritcalScroll();
    });



    $('.form-group.password').each(function () {
        if($(this).find('.field-group').length == 0) {
            $(this).find('.form-control').wrap('<div class="field-group"/>');
        }
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