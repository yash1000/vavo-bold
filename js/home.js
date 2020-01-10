function onHover(obj){
    $("h4:not(."+obj+" h4)").css( {"opacity":"0","z-index":"5"} );
    $("span:not(."+obj+" span)").css( {"opacity":"0","z-index":"5"} );
    $("."+obj+" h4").css( {"color":"#ff6c3f"} );
    $("."+obj+" span").css( {"color":"#ff6c3f"} );
    $("."+obj+" img").css("z-index","2");
    $("."+obj+" video").css("z-index","2");
    document.getElementById("fisher").load();
}

function outHover(obj){
    $("h4:not(."+obj+" h4)").css( "opacity","1" );
    $("span:not(."+obj+" span)").css( "opacity","1" );
    $("."+obj+" h4").css( {"color":"black"} );
    $("."+obj+" span").css( {"color":"black"} );
    $("."+obj+" img").css("z-index","-1");
    $("."+obj+" video").css("z-index","-1");    
    $("."+obj+" video")[0];    
}

