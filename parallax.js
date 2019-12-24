$(document).ready(function() {

    redrawDotNav();

    /* Scroll event handler */
    $(window).bind('scroll', function(e) {
        parallaxScroll();
        redrawDotNav();
    });

    /* Next/prev and primary nav btn click handlers */
    $('.navigation_r ul li').eq(0).find('a').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });
    $('.navigation_r ul li').eq(1).find('a').click(function() {
        $('html, body').animate({
            scrollTop: $('#card').offset().top * .9
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });




    $('.navigation_r ul li').eq(2).find('a').click(function() {
        $('html, body').animate({
            scrollTop: $('#pay').offset().top * 1.08
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });



    $('.navigation_r ul li').eq(3).find('a').click(function() {
        $('html, body').animate({
            scrollTop: $('#location').offset().top* 1.03
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });



    $('.navigation_r ul li').eq(4).find('a').click(function() {
        $('html, body').animate({
            scrollTop: $('#app').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });





    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
        function() {
            $(this).prev('h1').show();
        },
        function() {
            $(this).prev('h1').hide();
        }
    );

});

/* Scroll the background layers */
function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    //$('#card').css('top', (0 - (scrolled * .25)) + 'px');
    //('#parallax-bg2').css('top', (0 - (scrolled * .5)) + 'px');
    //$('#parallax-bg3').css('top', (0 - (scrolled * .75)) + 'px');
}


/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav() {
    var section1Top = 0;
    // The top of each section is offset by half the distance to the previous section.
    var section2Top = $('#card').offset().top - (($('#pay').offset().top - $('#card').offset().top) / 2);
    var section3Top = $('#pay').offset().top - (($('#location').offset().top - $('#pay').offset().top) / 2);
    var section4Top = $('#location').offset().top - (($('#app').offset().top - $('#location').offset().top) / 2);
    var section5Top = $('#app').offset().top - (($(document).height() - $('#app').offset().top) / 2);

    //var section3Top =  $('#pay').offset().top - (($('#loaction').offset().top - $('#pay').offset().top) / 2);

    //var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
    $('.navigation_r ul li a').removeClass('navigation_r_color');

    if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < 450) {

        $('.navigation_r ul li').eq(0).find('a').addClass('navigation_r_color');


    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
        $('.navigation_r ul li').eq(1).find('a').addClass('navigation_r_color');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
        $('.navigation_r ul li').eq(2).find('a').addClass('navigation_r_color');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
        $('.navigation_r ul li').eq(3).find('a').addClass('navigation_r_color');
    } else if ($(document).scrollTop() >= section5Top) {
        $('.navigation_r ul li').eq(4).find('a').addClass('navigation_r_color');
    }

}