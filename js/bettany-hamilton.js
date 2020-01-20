$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  AOS.init();

  $(window).on('load', function(){
    $(".hero-animation").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 1s ease",
        "opacity":"1"
    })

    $(".hero-animation1").css({
      "transform":"rotate(0)",

      "transformOrigin":"top",
      "transition":"all 1s ease",
      "opacity":"1"
  })


    });