$(document).on("click mousemove",".carousel",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 60;
    var newposY = y - 230; $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    });

    $(window).on('load', function(){
        $("#module1").css({
            "transform":"rotate(0)",
           
        });
    
    })

$(window).on('load', function(){
    $(".wrapper11").css({
        "opacity":"1",
       
    });

})

$(window).on('load', function(){
    $(".botany-image").css({
        "opacity":"1",
       
    });

})


$(document).ready(function(){
    const el1 = document.querySelector("#module1");
    const el = document.querySelector("#module");
    el1.addEventListener("mousemove", (e) => {
     el.style.backgroundPositionX = +(e.offsetX+250)+ "px";
     el.style.backgroundPositionY = +(e.offsetY+130) + "px";
     });
     $( "#module1" ).mouseleave(function() {
      $( "#module" ).fadeOut( "slow", function() {
      });});
    
    $( "#module1" ).mouseenter(function() {
    
      $( "#module" ).css('display','block')
      $( "#module" ).fadeIn( "slow", function() {
     
      });
    });
    })