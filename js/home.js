
function onHover(obj){
    $("h4:not(."+obj+" h4)").css( {"opacity":"0","z-index":"5"} );
    $("span:not(."+obj+" span)").css( {"opacity":"0","z-index":"5"} );
    $("."+obj+" img").css("z-index","2");
}

function outHover(obj){
    $("h4:not(."+obj+" h4)").css( "opacity","1" );
    $("span:not(."+obj+" span)").css( "opacity","1" );
    $("img").css("z-index","-1");
}

