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

    $(".animasi3").click(function(){
        $(".isi3").animate({
            left : '+=500px',  //Setiap tombol button di click akan bertambah 500px
            top : '+=100px',
        }, "slow");
    })

    $(".animasi4").click(function(){
        $(".isi4").animate({
            left : 'toggle',  
            top : 'toggle',
        }, "fast", "swing");
    })

    $(".animasi4").click(function(){
        $(".isi5, .isi4").animate({
            top: '100px',
            left: '60px',
            fintSize: '2cm'
        });
        $(".isi5, .isi2").animate({
            top: '100px',
            left: '60px',
            fintSize: '2cm'
        });
        $(".isi5, .isi1").animate({
            top: '100px',
            left: '60px',
            fintSize: '2cm'
        });
    })
})