$(".grid").masonry({
  columnWidth: ".grid-sizer",
  itemSelector: ".grid-item",
  percentPosition: true,
  horizontalOrder: true
});

$(document).ready(function(){
  AOS.init({
    once:true
  });
})
