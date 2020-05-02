$(document).ready(function(){
    // .first()  .last()  .prev()  .next()  .children()  .find()  .parent()

    //di jQuery kita bisa memilih lebih dari satu class atau id
    $(".promo, #destination");

    $("li").first().parent() --> // hasilnya ul pertama parentnya 
    $("#destination").children("li") --> //memilih anak anaknya ul yaitu li tanpa memilih ul atau li dibawahnya 
})