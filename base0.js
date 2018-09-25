$(document).ready(function(){
    $("#sembunyi_semua").click(function(){
        $("*").hide();
    })

    $("#sembunyi_ini").click(function(){
        $(this).hide();
    })

    $("button.penting").click(function(){
        $("p.penting").hide();
    })

    $("button#pertama").click(function(){
        $("p:first").hide();  //<p>paragraph pertama first</p>
    })

    $("a#baris1semua").click(function(){
        $("tr:first-child").hide();  //<p>paragraph pertama first dari parent</p>
    })

    $("strong").click(function(){
        $("tr:even").css("background-color", "yellow");  //CSS Script
        $("tr:odd").css("background-color", "aqua");  //CSS Script
    })

    $("[alt='link1']").click(function(){
        $("[href]").css("color", "red");  //<a href="#">paragraph pertama first dari parent</a>
    })

    $("[alt='link2']").click(function(){
        $("a[target='_blank']").css("color", "red");  //<a href="#">paragraph pertama first dari parent</a>
    })

    $("img[width]").click(function(){
        $("a[target!='_blank']").css("border", "4px solid #000");  //<a href="#">paragraph pertama first dari parent</a>
    })

    $("[alt='sembunyi_tombol']").click(function(){
        $(":button").slideUp(4000);  // 4000 detik --> :button maksudnya menyeleksi button
    })

    $("#judul3").on({
        mouseenter:function(){
            $(this).css("background-color", "black");
        },

        mouseleave:function(){
            $(this).css("background-color", "blue");
        },

        click:function(){
            $(this).css("background-color", "black");
        }


    });
})