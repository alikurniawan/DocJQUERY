//HTML Eksekusinya
{/* <div id="kotak1">
    <button id="tambahInput1">Tambah Input Akhir</button>
    <button id="tambahInput2">Tambah Input Awal</button>
    <button id="tambahInput3">Tambah Input Setelah</button>
    <button id="tambahInput4">Tambah Input Sebelum</button>
</div> */}

//Menambahkan kotak isian <input type="text"/> dengan menekan tombol tambahInput1
$(document).ready(function(){
    $("#tambahInput1").click(function(){
        $("#kotak1").append("<br><input type='text' name='nama'><br>"); //append membuat posisi kotak yg dibuat ada dibawah tombol-tombol
    })
})

//kebalikannya dari append diatas, prepend membuat kotak input berada pada posisi di atas tombol2
$(document).ready(function(){
    $("#tambahInput1").click(function(){
        $("#kotak1").prepend("<br><input type='text' name='nama'><br>"); //append membuat posisi kotak yg dibuat ada dibawah tombol-tombol
    })
})

//after berada di bawah tombol2 tetapi di luar kotak1 --> diluar div
$(document).ready(function(){
    $("#tambahInput1").click(function(){
        $("#kotak1").after("<br><input type='text' name='nama'><br>"); //append membuat posisi kotak yg dibuat ada dibawah tombol-tombol
    })
})

//before berada di atas tombol2 tetapi di luar kotak1 --> diluar div
$(document).ready(function(){
    $("#tambahInput1").click(function(){
        $("#kotak1").before("<br><input type='text' name='nama'><br>"); //append membuat posisi kotak yg dibuat ada dibawah tombol-tombol
    })
})

//Menggunakan Var
{/* <div id="kotak2">
    <button id="tambah1">Tambah</button>
    <img src="buttonImg.jpg"/>
</div> */}

$("#tambah1"),click(function(){
    var str1 = "<br><strong>Kalimat1</strong>";
    var str2 = "<br><strong>Kalimat2</strong>";
    var str3 = "<span style='coclor:blue;'>Kalimat3</span>";
    
    $("#kotak2 img").before(str1, str2, str3);
})

//Remove elemen
{/* <div id="kotak3">
    
    <ul>
        <li>Isi1</li>
        <li>Isi2</li>
        <li>Isi3</li>
    </ul>
</div>
<button id="hapus1">Tambah</button>
*/}
$("#hapus1").click(function(){
    $("#kotak3").remove(); //remove --> akan menghapus div dan isi
})

//Empty
$("#hapus1").click(function(){
    $("#kotak3").empty(); //empty --> hanya menghapus isi dari div
})
