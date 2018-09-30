//HTML Eksekusinya
<div id="kotak1">
    <button id="tambahInput1">Tambah Input Akhir</button>
    <button id="tambahInput2">Tambah Input Awal</button>
    <button id="tambahInput3">Tambah Input Setelah</button>
    <button id="tambahInput4">Tambah Input Sebelum</button>
</div>

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