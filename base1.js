//Base 1
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
});

//Base2
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
})
