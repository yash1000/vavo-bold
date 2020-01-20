const el = document.querySelector(".common-text");

var elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top;
console.log(elDistanceToTop);

// function listen(obj) {
//   var x = evt.pageX - $("#element").offset().left;
//   var y = evt.pageY - $("#element").offset().top;

//   console.log(x +" and "+ y)
// }
// $('.common-text').mouseenter(function(){
//    $('#imag').toggleClass("image-visible-onhover")
//    // $('#imag').css('display', 'block');
//    console.log('object1')
// })
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