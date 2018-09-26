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

    function hitung1(panjang, lebar){
        var p = panjang;
        var l = lebar;
        var luas = p * l;

        document.getElementById("d2").innerHTML +=
        'Panjang = ' + p + '<br>' + 
        'Lebar = ' + l + '<br>' +
        'Luas = ' + luas;
    }

    $(".b2").click(function(){
        $("#d2").animate({
            width: '400px',
            fontSize: '30px'
        }, "slow", function(){
            tampil();
            hitung1(20, 50);
        })
    })

})