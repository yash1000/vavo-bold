

//     $(document).ready(function(){
//     const ele1 = document.querySelector("#carousel");
// const ele = document.querySelector("#mouse1");
// mousemove=false;

// ele1.addEventListener("mousemove", (e) => {
// x = e.clientX; 
// y = e.offsetY; 
// console.log(x,y);
// var x = e.offsetX;
// var y = e.offsetY;

// ele.style.left= x + "px";
// ele.style.top= y+ "px";
// ele.style.transform = translate(e.offsetX,e.offsetY);

// });
// });
$(document).ready(function(){

$(window).on('load', function(){
    $("#module1").css({
        "transform":"rotate(0)",
       
    });

})
$('.ziguli-image').parallaxie({
    speed: 0.3,
});

$(document).on("mousemove","#module1",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 150;
    var newposY = y -755; $(".video1").css("transform","translate("+newposX+"px,"+newposY+"px)");
    $(".video1").css("display","inline");

    $( "#module1" ).mouseleave(function() {

$( ".video1" ).fadeOut( "slow", function() {
});
});
$( "#module1" ).mouseenter(function() {
$( ".video1" ).fadeIn( "slow", function() {
  // "margin"="auto";
});
});
    });



//  $( "#module1" ).mouseleave(function() {
//     //  $( "#module" ).css('display','none');
//     $( "#module" ).fadeOut( "slow", function() {
//       // Animation complete.
     
//     });
  
//   });
  
//   $( "#module1" ).mouseenter(function() {
//     // console.log("mouse enteres")
//     $( "#module" ).css('display','block')
//     $( "#module" ).fadeIn( "slow", function() {
//       // Animation complete.
//     });
//   });


    /* $(document).ready(function(){
        const ele1 = document.querySelector("#carousel");
const ele = document.querySelector("#mouse1");
mousemove=false;
ele1.addEventListener("mousemove", (e) => {
 var t = ele.style.left = +e.offsetX+"px";
 var u=ele.style.top = +e.offsetY+ "px";
//  let X = event.clientX - ele1.getBoundingClientRect().x;
//     let Y = event.clientY - ele1.getBoundingClientRect().y;
 console.log(t,u);
 });});  */
});