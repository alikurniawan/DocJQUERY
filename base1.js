//CARA PENULISAN AWAL
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
})

//ISI NYA
$(this).hide()
$("h1").hide()
$("#header").hide()
$(".posting").hide()

//Base 1.1
$(document).ready(function(){
    $("#sembunyi").click(function(){
        $(".d1").hide();
        $(".d2").hide("slow");
        $(".d3").hide("fast");
        $(".d4").hide(5000);  //in Second
    })

    $("#tampil").click(function(){
        $(".d1").show();
        $(".d2").show("slow");
        $(".d3").show("fast");
        $(".d4").show(5000);  //in Second
    })

    $("#tampil").click(function(){
        $(".d1").toggle();
        $(".d2").toggle("slow");
        $(".d3").toggle("fast");
        $(".d4").toggle(5000);  //in Second
    })

    $("#btnl").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn("fast");
        $("#div4").fadeIn(5000);  //in Second
        
        $("#div3").fadeTo(3000, 0.5); //(Milisecond, Opacity)

        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut("fast");
        $("#div4").fadeOut(5000);  //in Second
    })
});


