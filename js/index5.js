$(function(){
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    
    $(".tap>li").on("click",function(){
        $(".tap>li>a").removeClass("on-click");

        $(this).children("a").addClass("on-click");

        $(".contents>div").css('display','none');
        console.log($(this).children("a").attr('href'));

        $($(this).children("a").attr('href')).css('display','block');
    })
    $("#notice>ol>li:first").on("click",function(){
        $("#layer-wrap").addClass("active");
    })
    $(".close").on("click",function(){
        $("#layer-wrap").removeClass("active");
    })
})



