$(document).ready(function(){
    $(".animasi").click(function(){   //.animasi adalah class button
        $(".isi").animate({left: '500px'});
    })

    $(".animasi2").click(function(){
        $(".isi2").animate({
            left : '500px',
            top : '100px',
            fontSize : '2cm',
            padding : '40px'
        }, 5000, "linear");
    })
})