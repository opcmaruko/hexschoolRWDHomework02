$(document).ready(function() {
    $('.bars').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('navshow');
    });
});

$(document).ready(function() {
    $('.bars2').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menushow');
    });
});


$(document).ready(function() {
    $('.scrollTop').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('body').animate({ scrollTop: targetPos - 56 }, 1000);

    });




    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.scrollTop').each(function() {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 57 <= scrollPos && (targetPos - 56 + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });
        $('.animated').each(function() {
            var thisPos = $(this).offset().top;
            if (thisPos <= (scrollPos + windowHeight)) {
                $(this).addClass('fadeIn');
            }


        });
    });


})