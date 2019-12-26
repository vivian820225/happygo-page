$(document).ready(function() {
  //back to top
  $(".icon_top").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $(".icon_top").fadeIn("fast");
    } else {
      $(".icon_top")
        .stop()
        .fadeOut("fast");
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
      $(".topbar").addClass("fixed");
    } else {
      $(".topbar").removeClass("fixed");
    }
  });

  // 瀑布流
  var grid = $('.grid').imagesLoaded( function() {  
    // init Masonry after all images have loaded  
    grid.masonry({
      columnWidth: '.grid-item',
      itemSelector: '.grid-item',
      percentPosition: true
    });
});
});

$(".main-menu a").on("click", function() {
  unchecked();
});

var menu = document.getElementById("menu");
function unchecked() {
  menu.checked = false;
}

//    popup
function eventTime() {
  TweenMax.to("#event-time", 0, { top: 0, ease: Quart.easeOut });
  TweenMax.to("#event-time", 0.5, { delay: 0.1, alpha: 1 });
}

function howToPlay() {
  TweenMax.to("#howtoplay", 0, { top: 0, ease: Quart.easeOut });
  TweenMax.to("#howtoplay", 0.5, { delay: 0.1, alpha: 1 });
}

function noAddpMore() {
  TweenMax.to("#no-addp_more", 0, { top: 0, ease: Quart.easeOut });
  TweenMax.to("#no-addp_more", 0.5, { delay: 0.1, alpha: 1 });
}

$(".btn-close, .pop-overlay").on("click", function() {
  TweenMax.to(".popup", 1.5, {
    alpha: 0,
    top: "-200%",
    ease: Quart.easeOut
  });
});

// fadeIn
TweenMax.to(".main-title", 0, { alpha: 0, y: 60 });
TweenMax.to("#main .container", 0, { alpha: 0, y: 80 });

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax().to(".main-title", 1, { alpha: 1, y: 0 });
var scene = new ScrollMagic.Scene({
  triggerElement: ".topbar",
  triggerHook: "onCenter",
  reverse: false
})
  .setTween(tween)
  .addTo(controller);

var tween1 = new TimelineMax().to("#main .container", 1, { alpha: 1, y: 0, delay: 1});
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#main .container",
  triggerHook: "onCenter",
  reverse: false
})
  .setTween(tween1)
  .addTo(controller);
