$(document).ready(function() {
    $('.preloader').delay(2000).addClass('active');
    $(window).load(function() {
        $('.preloader').delay(5000).fadeOut(function(){
            $('.img-info, .main-image').delay(6000).addClass('active');
        });
    });

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