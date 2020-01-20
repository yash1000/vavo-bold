$(window).on('load', function(){
    $(".post-name h1").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.5s",
        "opacity":"1"
    });

    $(".post-details").css({
        "transform":"translateY(0%)",
        "transition":"all 0.5s",
        "opacity":"1"
    });
});