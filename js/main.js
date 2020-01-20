$(document).ready(function(){
    $('#ham-btn').click(function(){
        $('ul').toggleClass('navbar-active');
        $(".icon-open").toggleClass("icon-close");
        $('nav').toggleClass('nav-overlay')
        // $(".header-toggle-close").toggleClass("header-toggle-open");
        // console.log("object")
    })


    $('#sidebar-share-link').click(function(){
        $('.sidebar-share').css('display','none');
        $('.sidebar').css('display','block');

    })


    $('.common-text').hover(function(){
        $('#imag').toggleClass("image-visible-onhover")
        // $('#imag').css('display', 'block');
        // console.log('object1')
     })
        // $('.common-text').mouseleave(function(){
        //    $('#imag').css('display', 'none');
        //    console.log('object')
        // })
     $(document).on( "mousemove", function( evt ) {
          var x = (evt.pageX - $('.common-text-wrapper').offset().left) + 'px';
       var y = (evt.pageY - $('.common-text-wrapper').offset().top) + 'px';
     //   $('#imag').css('transform' : 'translate('+ x + ',' + y +')');
     // console.log()
       $('#imag').css({'transform' : 'translate(calc(' + x +' - 50%), calc(' + y + ' - 50%)'});
     
       });
})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".sidebar-share").addClass("sidebar-visible");
      
    }else{
        $(".sidebar-share").removeClass("sidebar-visible");
   
    }
});
