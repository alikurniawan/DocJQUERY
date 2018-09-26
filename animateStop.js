$(document).ready(function(){
    $("#mulai").click(function(){
        $("#efek1").slideUp(5000);
        $("#efek2").slideDown(5000);
        $("#efek3").animate({left:'400px'}, 5000);
        $("#efek4").hide(5000);
        $("#efek5").show(5000);
    })

    //STOP ANIMASI SEBAGIAN
    $("#berhenti1").click(function(){
        $("#efek1").stop();
        $("#efek2").stop();
        $("#efek3").stop();
    })

    //STOP SELURUHNYA ---> langsung menuju akhir Effect nya
    $("#berhenti2").click(function(){
        $("#efek1").stop(true);
        $("#efek2").stop(true);
        $("#efek3").stop(true);
    })

    $("#berhenti2").click(function(){
        $("#efek1").stop(false, true);
        $("#efek2").stop(false, true);
        $("#efek3").stop(false, true);
    })
})