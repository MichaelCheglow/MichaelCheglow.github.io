$(document).ready(function(){
    // Activate Carousel
    $("#carousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#carousel").carousel(2);
    });    
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel").carousel("next");
    });

    $(".card-1").mouseenter(function() {
        $(".arrow-1").attr("src", "img/arrow-active.png");         
        $(".card-inf-1 > h3").css("color", "#fff");
        $(".card-inf-1 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-1").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_1").css("z-index", "411");        
    })
    $(".card-1").mouseleave(function() {
        $(".arrow-1").attr("src", "img/arrow.png");
        $(".card-inf-1 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-1 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-1").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_1").css("z-index", "409");           
    })

    $(".card-2").mouseenter(function() {
        $(".arrow-2").attr("src", "img/arrow-active.png");         
        $(".card-inf-2 > h3").css("color", "#fff");
        $(".card-inf-2 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-2").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_2").css("z-index", "411");        
    })
    $(".card-2").mouseleave(function() {
        $(".arrow-2").attr("src", "img/arrow.png");
        $(".card-inf-2 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-2 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-2").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_2").css("z-index", "409");           
    })

    $(".card-3").mouseenter(function() {
        $(".arrow-3").attr("src", "img/arrow-active.png");         
        $(".card-inf-3 > h3").css("color", "#fff");
        $(".card-inf-3 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-3").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_3").css("z-index", "411");        
    })
    $(".card-3").mouseleave(function() {
        $(".arrow-3").attr("src", "img/arrow.png");
        $(".card-inf-3 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-3 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-3").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_3").css("z-index", "409");           
    })

    $(".card-4").mouseenter(function() {
        $(".arrow-4").attr("src", "img/arrow-active.png");         
        $(".card-inf-4 > h3").css("color", "#fff");
        $(".card-inf-4 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-4").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_4").css("z-index", "411");        
    })
    $(".card-4").mouseleave(function() {
        $(".arrow-4").attr("src", "img/arrow.png");
        $(".card-inf-4 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-4 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-4").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_4").css("z-index", "409");           
    })

    $(".card-5").mouseenter(function() {
        $(".arrow-5").attr("src", "img/arrow-active.png");         
        $(".card-inf-5 > h3").css("color", "#fff");
        $(".card-inf-5 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-5").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_5").css("z-index", "411");        
    })
    $(".card-5").mouseleave(function() {
        $(".arrow-5").attr("src", "img/arrow.png");
        $(".card-inf-5 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-5 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-5").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_5").css("z-index", "409");           
    })

    $(".card-6").mouseenter(function() {
        $(".arrow-6").attr("src", "img/arrow-active.png");         
        $(".card-inf-6 > h3").css("color", "#fff");
        $(".card-inf-6 > p").css("color", "rgb(199, 178, 153)"); 
        $(".card-inf-6").css("background-color", "rgb(54, 47, 45)");
        $(".bg_photo_2_6").css("z-index", "411");        
    })
    $(".card-6").mouseleave(function() {
        $(".arrow-6").attr("src", "img/arrow.png");
        $(".card-inf-6 > h3").css("color", "rgb(199, 178, 153)");
        $(".card-inf-6 > p").css("color", "rgb(209, 209, 209)");
        $(".card-inf-6").css("background-color", "rgb(255, 255, 255)");
        $(".bg_photo_2_6").css("z-index", "409");           
    })
    $("#owl-example").owlCarousel({
        items : 3,
        lazyLoad : true,
        navigation : true
    });

    $('.post').mouseenter(function() {
        $(this).css('background-color', 'rgb(54,47,45)');
        $(this).find('h3').css('color', 'rgb(199, 178, 153)');
         $(this).find('h3+p').css('color', 'rgb(255,255,255)');
         $(this).find('.date_day').css('background-color', 'rgb(199,178,153');
         $(this).find('.date_month').css('background-color', 'rgb(164,141,114');
    })
    $('.post').mouseleave(function() {
        $(this).css('background-color', 'rgb(255,255,255)');
        $(this).find('h3').css('color', 'rgb(85, 85, 85)');
        $(this).find('h3+p').css('color', 'rgb(140, 140, 140)');
        $(this).find('.date_day').css('background-color', 'rgb(54, 54, 54');
        $(this).find('.date_month').css('background-color', 'rgb(37, 37, 37');
    })
    $('.footer-post').mouseenter(function() {
        $(this).find('p').css('color', 'rgb(199, 178, 153)');
        $(this).find('.date-footer').css('color', 'rgb(255, 255, 255)');
    })
    $('.footer-post').mouseleave(function() {
        $(this).find('p').css('color', 'rgb(85, 85, 85)');
        $(this).find('.date-footer').css('color', 'rgb(54, 54, 54)');
    })
});