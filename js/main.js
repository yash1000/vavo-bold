$(document).ready(function(){
    $('#ham-btn').click(function(){
        $('ul').toggleClass('navbar-active');
        $(".icon-open").toggleClass("icon-close");
        // $(".header-toggle-close").toggleClass("header-toggle-open");
        console.log("object")
    })


    $('#sidebar-share-link').click(function(){
        $('.sidebar-share').css('display','none');
        $('.sidebar').css('display','block');
    })
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
