$(document).ready(function(){
    $("mulai1").click(function(){

        //Jika ID nya sama cukup ditulis 1 baris dipisahkan dengan TITIK
        $("#efek1").slideUp().slideDown().animate({left: '300px', 
        fontSize: '40px'}).hide("slow").show("slow");
    })
})