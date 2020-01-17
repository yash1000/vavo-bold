const el = document.querySelector(".common-text");

var elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top;
console.log(elDistanceToTop);

// function listen(obj) {
//   var x = evt.pageX - $("#element").offset().left;
//   var y = evt.pageY - $("#element").offset().top;

//   console.log(x +" and "+ y)
// }

$(document).on( "mousemove", function( evt ) {
     var x = evt.pageX - $('.common-text').offset.left;
  var y = evt.pageY;

  console.log($('.common-text').offset().top)

  });