$(document).ready(function(){
    var price = $('<p>Harga Rp. 300</p>');  //variable di jQuery

    //  .before()
    $('.vacation').before(price); // akan menambahkan element di luar li class=vacation -- akan berada diatasnya li
    //  hasil nya :
    // <p>Harga Rp. 300</p>   <--Hasil
    // <li class="vacation">Menu</li>

    //  .after()
    $('.vacation').after(price); // akan menambahkan element di luar li class=vacation -- akan berada dibawahnya li
    //  hasil nya :
    // <li class="vacation">Menu</li>
    // <p>Harga Rp. 300</p>   <--Hasil

     //  .prepend()
     $('.vacation').prepend(price); // akan menambahkan element di dalam li class=vacation -- akan berada dalam li posisi di paling atas element
     //  hasil nya :
     // <li class="vacation">Menu</li>
     //     <p>Harga Rp. 300</p>   <--Hasil
     //     <button> Tekan </button>

     //  .append()
     $('.vacation').append(price); // akan menambahkan element di dalam li class=vacation -- akan berada dalam li posisi di paling bawah element
     //  hasil nya :
     // <li class="vacation">Menu</li>
     //     <button> Tekan </button>
     //     <p>Harga Rp. 300</p>   <--Hasil

     //Alternatif --> memanipulasi dom dengan memilih variable nya terlebih dahulu
     //  .insertBefore()  .insertAfter()  .prependTo()  .appendTo()
     price.appendTo($('.vacation'));  // var price ="<p>Harga</p>" tolong tambahkan class="vacation"

     // GET function
     //  .text()  .html()  .val()  // function untuk mengambil value, hanya bisa terlihat di console log
     $('.vacation').text(); // hanya mengambil text surga yang berada didalam p --> <p>surga</p>
     $('.vacation').html(); // full mengambil elemen html
     $('.vacation').val(); // digunakan untuk mengambil angka 0,1,2 dst

     $('.vacation').text("bogor"); // akan merunah text surga menjadi bogor p --> <p>bogor</p>
     $('.vacation').html('<bold>Bogor</bold>'); // merubah text p bogor menjadi tebal atau bold
     $('.vacation').val(150); // merubah val 90 panda element <input val="90" /> menjadi 150

     //  .remove()  .empty()
     $(".vacation").remove() // membuang atau delete element HTML class vacation
     $(".vacation").empty() // menghide element text HTML pada class vacation


})