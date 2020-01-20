function onHover(obj){
    $("h4:not(."+obj+" h4)").css({
        "opacity":"0",
        "z-index":"5",
    });

    $("span:not(."+obj+" span)").css({
        "opacity":"0",
        "z-index":"5",
    });

    $("."+obj+" h4").css({
        "color":"#ff6c3f",
        "transition":"color 1s"
    });
    
    $("."+obj+" span").css({
        "color":"#ff6c3f",
        "transition":"color 1s"
    });

    $("."+obj+" img").css({
        "z-index":"2",
        "opacity":"1",
        "transition":"all 0.5s"
    });

    $("."+obj+" video").css({
        "z-index":"2",
        "opacity":"1",
        "transition":"all 0.5s"
    });

    document.getElementById("fisher").load();

    $("#footer").css({
        "transform":"translateY(50%)",
        "opacity":"0",
        "transition":"all 0.5s"
    });

    $("nav").css({
        "transform":"translateY(-50%)",
        "opacity":"0",
        "transition":"all 0.5s"
    });
}

function outHover(obj){
    $("h4:not(."+obj+" h4)").css("opacity","1");

    $("span:not(."+obj+" span)").css("opacity","1");

    $("."+obj+" h4").css({
        "color":"black",
        "transition":"color 1s"
    });

    $("."+obj+" span").css({
        "color":"black",
        "transition":"color 1s"
    });

    $("."+obj+" img").css({
        "z-index":"-1",
        "opacity":"0",
        "transition":"all 0.9s"
    });

    $("."+obj+" video").css({
        "z-index":"-1",
        "opacity":"0",
        "transition":"all 0.9s"
    });      

    $("#footer").css({
        "transform":"translateY(0)",
        "opacity":"1",
        "transition":"all 0.5s"
    });

    $("nav").css({
        "transform":"translateY(0)",
        "opacity":"1",
        "transition":"all 0.5s"
    })
}

$(window).on('load', function(){
    $("#list-item h4, #list-item span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.5s",
        "opacity":"1"
    });

    $(".ziguli h4").css({
        "transitionDelay":"0s",
    });

    $(".fisher h4").css({
        "transitionDelay":"0.1s"
    });

    $(".botany h4").css({
        "transitionDelay":"0.2s"
    });

    $(".selvsikker h4").css({
        "transitionDelay":"0.3s"
    });

    $(".monck h4").css({
        "transitionDelay":"0.4s"
    });

    $(".yatai h4").css({
        "transitionDelay":"0.5s"
    });

    $(".carve h4").css({
        "transitionDelay":"0.6s"
    });

    $(".ziguli span").css({
        "transitionDelay":"0.3s"
    });

    $(".fisher span").css({
        "transitionDelay":"0.13s"
    });

    $(".botany span").css({
        "transitionDelay":"0.23s"
    });

    $(".selvsikker span").css({
        "transitionDelay":"0.33s"
    });

    $(".monck span").css({
        "transitionDelay":"0.43s"
    });

    $(".yatai span").css({
        "transitionDelay":"0.53s"
    });

    $(".carve span").css({
        "transitionDelay":"0.63s"
    });

    $("#footer").css({
        "transform":"translateY(0)",
        "opacity":"1",
        "transition":"all 0.5s"
    })
});
