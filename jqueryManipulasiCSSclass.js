//HTML
{/* <body>
    <button id="kelas1">Tombol 1</button>
    <button id="kelas2">Tombol 2</button>
    <button id="kelas3">Tombol 3</button>

    <h3>Header</h3>
    <p>Paragraf</p>
    <p>Paragrah</p>
</body>

//CSS
<style>
    .huruf{
        font-family: arial;
        color: blue;
    }

    .header1{
        font-size: 40px;
        border: 2px dotted #999;
    }
</style> */}

//JQUERY EXECUTION
$(document).ready(function(){
    
    //Add Class
    $("#kelas1").click(function(){
        $("h3, p").addClass("huruf"); //---> diarahkan atau ( memasukkan class ) ke class CSS dengan nama huruf
        $("h3").addClass("header1"); //--> 
    })

    //Remove Class
    $("#kelas1").click(function(){
        $("h3").removeClass("header1"); //--> 
    })

    //Toggle Class
    $("#kelas1").click(function(){
        $("h3").toggleClass("header1"); //--> //ON OFF class --> kalau sudah ada maka tidka diisikan jika belum maka diisikan class
    })


})