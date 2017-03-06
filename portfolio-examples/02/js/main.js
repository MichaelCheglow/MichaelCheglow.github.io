$(document).ready(function() {


    var options = {
    offset: 50
    }
    var header = new Headhesive('nav', options);


    new WOW().init();


    

    //========================================================================== popup
    $(function() {
        //функция вызова всплывающего окна с видео-блоком
         $('#video_btn').on('click', function() {
            $('#popup_video').fadeIn();
            //добавляем видео в блок с настройками автовоспроизведения
            $('#popup_video').append('<a id="popup_video_close"></a>');
                $('#popup_video_block').append('<iframe width="853" height="480" src="https://www.youtube.com/embed/t0qR-hV0yWw?autoplay=1" frameborder="0" allowfullscreen></iframe>');
                q_width = $('#popup_video').outerWidth()/-2;
                q_height = $('#popup_video').outerHeight()/-2;
                $('#popup_video').css({
                    'margin-left': q_width,
                    'margin-top': q_height
                });
                $('body').append('<div id="fade"></div>');
                $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        });
         
        $('body').on('click', '#fade, #popup_video_close', function() {
            $('#fade , #popup').fadeOut(function() {
                $('#popup_video_block').empty();
                $('#popup_video').fadeOut();
                $('#popup_video_close').remove();
                $('#fade').remove();
            });
        });
    });
    $("#owl-example").owlCarousel({
            items : 1,
            // lazyLoad : true,
            navigation : true,
            autoPlay: true,
            autoPlayTimeout: 2000,
            autoPlayHoverPause:true,
            // lazyLoad: true,
            paginationNumbers: true
    });
    var paginationImages = {
        "width": "130px",
        "height": "130px",        
        "border-radius": "50%",
        "margin-right": "20px",
        "margin-left": "20px",
         "color": "rgba(255, 255, 255, 0.01)",
         "background-color": "#000"
    }
    var paginImgActive = {
        "width": "130px",
        "height": "130px",
        "margin-right": "20px",
        "margin-left": "20px"
    }
    $('span:contains(1)').css(paginationImages).css("background-image", "url(../img/customer-1.jpg)");
    $('span:contains(2)').css(paginationImages).css("background-image", "url(../img/customer-2.jpg)");
    $('span:contains(3)').css(paginationImages).css("background-image", "url(../img/customer-3.jpg)");
    // $('.owl-page.active').children('span.owl-numbers').css(paginImgActive);

//<iframe width="560" height="315" src="https://www.youtube.com/embed/t0qR-hV0yWw?autoplay=1" frameborder="0" allowfullscreen></iframe>



// Price Table
    var individual_price_table = $('#price_tables').find('.individual');
    var company_price_table = $('#price_tables').find('.company');


    $('.plan__switch').find('.individual').addClass('active');
    $('#price_tables').find('.individual').addClass('active');

    $('.plan__switch').find('.individual').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.plan__switch').removeClass('active');
        $(this).siblings().removeClass('active');
        individual_price_table.addClass('active');
        company_price_table.removeClass('active');
    });

    $('.plan__switch').find('.company').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.plan__switch').addClass('active');
        $(this).siblings().removeClass('active');
        company_price_table.addClass('active');
        individual_price_table.removeClass('active');           
    });
});