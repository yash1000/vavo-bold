function onHover(obj){
    $("h4:not(."+obj+" h4)").css( {"opacity":"0","z-index":"5","transition":"z-index 0.4s"} );
    $("span:not(."+obj+" span)").css( {"opacity":"0","z-index":"5","transition":"z-index 0.4s"} );
    $("."+obj+" h4").css( {"color":"#ff6c3f","transition":"color 1s"} );
    $("."+obj+" span").css( {"color":"#ff6c3f","transition":"color 1s"} );
    $("."+obj+" img").css({"z-index":"2","opacity":"1","transition":"all 0.5s"});
    $("."+obj+" video").css({"z-index":"2","opacity":"1","transition":"all 0.5s"});
    document.getElementById("fisher").load();
}

function outHover(obj){
    $("h4:not(."+obj+" h4)").css( "opacity","1" );
    $("span:not(."+obj+" span)").css( "opacity","1" );
    $("."+obj+" h4").css( {"color":"black","transition":"color 1s"} );
    $("."+obj+" span").css( {"color":"black","transition":"color 1s"} );
    $("."+obj+" img").css({"z-index":"-1","opacity":"0","transition":"all 0.9s"});
    $("."+obj+" video").css({"z-index":"-1","opacity":"0","transition":"all 0.9s"});    
    $("."+obj+" video")[0];    
}

$(window).on('load', function(){
    $(".ziguli h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0s",
        "opacity":"1"
    });
    $(".fisher h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.1s",
        "opacity":"1"
    });
    $(".botany h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.2s",
        "opacity":"1"
    });
    $(".selvsikker h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.3s",
        "opacity":"1"
    });
    $(".monck h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.4s",
        "opacity":"1"
    });
    $(".yatai h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.5s",
        "opacity":"1"
    });
    $(".carve h4").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.6s",
        "opacity":"1"
    });



    $(".ziguli span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.3s",
        "opacity":"1"
    });
    $(".fisher span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.13s",
        "opacity":"1"
    });
    $(".botany span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.23s",
        "opacity":"1"
    });
    $(".selvsikker span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.33s",
        "opacity":"1"
    });
    $(".monck span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.43s",
        "opacity":"1"
    });
    $(".yatai span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.53s",
        "opacity":"1"
    });
    $(".carve span").css({
        "transform":"rotate(0)",
        "transformOrigin":"top right",
        "transition":"all 0.95",
        "transitionDelay":"0.63s",
        "opacity":"1"
    });
});