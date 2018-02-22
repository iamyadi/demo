$(document).ready(function(){


    $("#button1").click(function(){
        var str=$("#inputText").val();

        var createSpan = $("<span class = 'string' ></span>");

        createSpan.text(str);
        var pageWidth = parseInt($(document).width());
        $("#inputText").val("");

        var top = Math.floor(Math.random()*400);
        createSpan.css({"top":top, "right":-700});//
        //createSpan.addClass("car");//adeInRight
        $("#screen").append(createSpan);
        createSpan.animate({"right":pageWidth},15000,function(){
            //移除元素
            $(this).remove();
        });
        //$("#screen").style.webkitAnimationPlayState = "running";
        //createSpan.animateCss("fadeInRight")
        //createSpan.css("animation-fill-mode", "forwards")
    });
    $("#button2").click(function() {
        $(".string").remove();
        // var a=$("#screen").parentNode.getElementsByClassName("string");
        // console.log(a);
    });
    // $(#button2).removeClass('animated ' + animationName);
});