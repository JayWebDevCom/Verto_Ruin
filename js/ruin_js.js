$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*
function eff_1(id){
	$(id).hide();
  };
 
function eff_2(id){
	$(id).show();
  };
*/


  

$(document).on('ready', function() {

/*

$("#wearevertohomes").mouseover(function() {
	$(this).animate({
    opacity: 0.25,
    //height: "toggle"
  }), 1000
  });
  
  $("#wearevertohomes").mouseout(function() {
	$(this).animate({
    //height: "toggle",
    opacity: 1
  }), 1000
  });
  
  */

       
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2500,
        speed: 2500,
        waitForAnimate: false,
        pauseOnHover: false,
        pauseOnFocus: true,
        slidesToScroll: 1
      });

    });
    