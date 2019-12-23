$(document).ready(function(){
    //back to top
    $('.icon_top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.icon_top').fadeIn('fast');
        } else {
            $('.icon_top').stop().fadeOut('fast');
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.topbar').addClass('fixed')
        } else {
            $('.topbar').removeClass('fixed');
        }
    });

    
    
});

$('.main-menu a').on('click', function(){
    unchecked();
})

var menu = document.getElementById('menu')
function unchecked() {
    menu.checked = false;
};


//    popup
function eventTime() {
    TweenMax.to('#event-time', 0, { top: 0, ease: Quart.easeOut, });
    TweenMax.to('#event-time', .5, { delay: .1, alpha: 1 });
    // $('body').addClass('scroll-no');
};

$('.btn-close, .pop-overlay').on('click', function(){
    TweenMax.to('.popup', 1.5, {
        alpha: 0,
        top: "-200%",
        ease: Quart.easeOut,
    });
});


