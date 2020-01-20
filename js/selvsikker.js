
  $(window).on('load', function(){
    $(".selvsikker-image").css({
        "opacity":"1",
       
    });

})

$(window).on('load', function(){
    $(".wrapper").css({
        "transform":"translateY(0)",
        "opacity":"1",
    });

})


$(window).on('load', function(){
    $("#module1").css({
        "transform":"rotate(0)",
       
    });

})
    $('.selvsikker-image').parallaxie({
        speed: 0.3,
    });


$(document).ready(function(){
    //       const el = document.querySelector("#module");
    
    // el.addEventListener("mousemove", (e) => {
    //   el.style.backgroundPositionX = +e.offsetX/5 + "px";
    //   el.style.backgroundPositionY = +e.offsetY/5 + "px";
    // });
    const el1 = document.querySelector("#module1");
    const el = document.querySelector("#module");
    
    
    
    el1.addEventListener("mousemove", (e) => {
     el.style.backgroundPositionX = +(e.offsetX+300)+ "px";
     el.style.backgroundPositionY = +(e.offsetY+130) + "px";
 
     });
    
    //  el1.addEventListener("mouseleave", (e) => {
    //  el.style.fadeout = +e.offsetX/5 + "px";
    //  el.style.backgroundPositionY = +e.offsetY/5 + "px";
    //  });
    
     $( "#module1" ).mouseleave(function() {
   
      $( "#module" ).fadeOut( "slow", function() {
        // Animation complete.
       
      });
    
    });
    
    $( "#module1" ).mouseenter(function() {
      // console.log("mouse enteres")
      $( "#module" ).css('display','block')
      $( "#module" ).fadeIn( "slow", function() {
        // Animation complete.
      });
    });
    })
    
    //       $(document).ready(function(){
    //   $('.text0').one('mouseenter',(function(){
    //     $('body').toggleClass('text0', $(this).mouseenter);})
    //  .one('mouseleave',(function(){
    //     $('text0').toggleClass('body', $(this).mouseleave);})
    //       })