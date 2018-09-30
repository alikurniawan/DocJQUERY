// Di dalam body html :

// <body>
//     <h3 id="ambil1">Ali Kurniawan Ganteng Sekali</h3>
// </body>

$(document).ready(function(){
    alert("Mengambil Text :" + $("#ambil1").text()); //result --> view Ali Kurniawan Ganteng Sekali
    alert("Mengambil code html :" + $("#ambil1").html());    // result --> isi code HTML

    //Masukkan ke dalam Variable
    var string1 = $('#ambil1').text();
    var string2 = $('#ambil1').html();

    alert(string1 + string2);

    //Mengambil Nilai dari INPUT
    $("#button1"). click(function(){
        alert("nama" + $('#input').val()); //<input type="text" id="ibput"/>
    
        //Menambah Attribut Elemen
        alert($('#input').attr('style'));
    })

    //Mengganti Text = mirip denganinnerHTML
    $("#set1").click(function(){  //#set1 adalah button id
        $("#kali1").text("Hallo apa kabar"); //kali1 adalah p id
    })

    //Masukkan value text ke dalam input type text
    $("#set3").click(function(){  //#set3 adalah button id
        $("#inp1").val("Hallo apa kabar"); //inp1 adalah <input type="text" />
    })

    $("#set4").click(function(){  //set4 is button
        $("li").text(function(no_urut, nama){
            return no_urut + nama;  //no_urut menjadi index 0,1,2
        })
    })

    // <a> class="ke_youtube" href="https://google.com">LINK</a>
    // Merubah attribute href yg menuju ke google menjadi youtube
    $("set5"),click(function(){
        $(".ke_youtube").attr("href", "https://youtube.com");
    })

    $("set5"),click(function(){
        $(".ke_youtube").attr({
            "href": "https://youtube.com",
            "title": "Youtube"
        });
    })
    
})