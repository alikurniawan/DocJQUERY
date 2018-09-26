$(document).ready(function(){
    $(".b1").click(function(){
        $(".d1").hide("slow");
        alert("Sudah Jalan");
    })

    $(".b1").click(function(){
        $(".d1").hide("slow", function(){
            alert("Sudah Jalan");   //Fungsi Callback
        });
        
    })

    function tampil(){
        document.getElementById("d2").innerHTML = "Selamat Datang";
        alert("selesai");
    }

    $(".b2").click(function(){
        $("#d2").animate({
            width: '400px',
            fontSize: '30px'
        }, "slow", function(){
            tampil();
        })
    })

})