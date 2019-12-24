$(document).ready(function(){

    redrawDotNav();

    $(window).bind('scroll', function(e){
        redrawDotNav();
    })

    $('.navigation_r ul li').eq(0).find('a').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    $('.navigation_r ul li').eq(1).find('a').on('click', function(){
        $('html, body').animate({scrollTop: $('#period').offset().top - 200}, 1000);
        return false;
    });

    $('.navigation_r ul li').eq(2).find('a').on('click', function(){
        $('html, body').animate({scrollTop: $('#pay').offset().top}, 1000);
        return false;
    });

    $('.navigation_r ul li').eq(3).find('a').on('click', function(){
        $('html, body').animate({scrollTop: $('#point').offset().top}, 1000);
        return false;
    });
    
    $('.navigation_r ul li').eq(4).find('a').on('click', function(){
        $('html, body').animate({scrollTop: $('#life').offset().top}, 1000);
        return false;
    });

    $('.navigation_r ul li').eq(5).find('a').on('click', function(){
        $('html, body').animate({scrollTop: $('#app').offset().top}, 1000);
        return false;
    });

});

    /* Set navigation dots to an active state as the user scrolls */
    function redrawDotNav(){
        var section1Top = 0;
        var section2Top = $('#period').offset().top - (($('#pay').offset().top - $('#period').offset().top) / 2 + 300);
        var section3Top = $('#pay').offset().top - 400;
        var section4Top = $('#point').offset().top - (($('#life').offset().top - $('#point').offset().top) / 2);
        var section5Top = $('#life').offset().top - (($('#app').offset().top - $('#life').offset().top) / 2);
        var section6Top = $('#app').offset().top - (($(document).height() - $('#app').offset().top) / 2);

        $('.navigation_r ul li a').removeClass('color');

        if($(document).scrollTop() >= section1Top && $(document).scrollTop() < 580){
            $('.navigation_r ul li').eq(0).find('a').addClass('color');
        }else if($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
            $('.navigation_r ul li').eq(1).find('a').addClass('color');
        }else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
            $('.navigation_r ul li').eq(2).find('a').addClass('color');
        }else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
            $('.navigation_r ul li').eq(3).find('a').addClass('color');
        }else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top) {
            $('.navigation_r ul li').eq(4).find('a').addClass('color');
        }else if ($(document).scrollTop() >= section6Top) {
            $('.navigation_r ul li').eq(5).find('a').addClass('color');
        }
    };

    
