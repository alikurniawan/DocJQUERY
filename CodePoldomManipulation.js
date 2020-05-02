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
     price.appendTo($('.vacation'));

})