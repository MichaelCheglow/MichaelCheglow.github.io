$(document).ready(function(){
	$('.search-block').hide();
	$('.header__search').click(function(){
		$('.search-block').animate({
			'width': 'toggle'
		}, 500 );
		
	});

	$('.field-for-registration, .field-for-log-in').hide();
	// $('.registration').click(function(){

	// 	$('.field-for-registration').animate({
	// 		'height': 'toggle'
	// 	}, 500 );
	// 	$(this).toggleClass('active');
		
	// });

	// $('.authorization').click(function(){

	// 	$('.field-for-log-in').animate({
	// 		'height': 'toggle'
	// 	}, 500 );
	// 	$(this).toggleClass('active');
		
	// });

	$('.authorization, .field-for-log-in').mouseenter(function(){
		$('.field-for-log-in').show();
	});
	$('.authorization, .field-for-log-in').mouseleave(function(){
		$('.field-for-log-in').hide();
	});

	$('.registration, .field-for-registration').mouseenter(function(){
		$('.field-for-registration').show();
	});
	$('.registration, .field-for-registration').mouseleave(function(){
		$('.field-for-registration').hide();
	});
	
	// $('.registration').toggle(function() {
	// 		$(this).css('background-color', 'rgb(83, 191, 101)');
	// 		$(this).css('display', 'inline-block');
	// 	}, function() {
	// 		$(this).css('background-color', 'rgb(242, 242, 242)');
	// 		$(this).css('display', 'inline-block');
	// 	});

	// $('div:not(".registration")').click(function() {
 //    	$('.registration').css("background-color", "rgb(242,242,242)");
	// }, function() {
 //    	$('.registration').css("background-color", "rgb(83, 191, 101)");
	// });
	$('.sort > .popular').addClass('active');

	$('.sort > .popular').click(function(){
		$('.sort > .popular').addClass('active');
		$('.sort > .new').removeClass('active');
	});
	$('.sort > .new').click(function(){
		$('.sort > .popular').removeClass('active');
		$('.sort > .new').addClass('active');
	});
	$('.Game__Catolog-slider').slick({
		accessibility: true,
		arrows: true,
		dots: true,
		nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  		prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	});
	$('.Tube-trailers-Slider').slick({
		accessibility: true,
		arrows: true,
		dots: true,
		nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  		prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	});
	$('.fa-angle-right').addClass('active');
	$('.fa-angle-right').click(function(){
		$('.fa-angle-right').addClass('active');
		$('.fa-angle-left').removeClass('active');
	});
	$('.fa-angle-left').click(function(){
		$('.fa-angle-left').addClass('active');
		$('.fa-angle-right').removeClass('active');
	});
	$('.gaming-file-copy').mouseover(function(){
		$(this).find('.game-img-border').addClass('active');
		$(this).find('h3').css('color', '#fff');
		$(this).find('h3').css('border-bottom', '3px dashed #000');
		$(this).find('h3').css('margin-bottom', '10px');
		$(this).css('background-color', 'rgb(0, 188, 212)');

	});
	$('.gaming-file-copy').mouseleave(function(){
		$(this).find('.game-img-border').removeClass('active');
		$(this).find('h3').css('color', '#000');
		$(this).find('h3').css('border-bottom', 'none');
		$(this).find('h3').css('margin-bottom', '13px');
		$(this).css('background-color', 'rgb(255, 255, 255)');
	});
	$('.Slider-v1-pagination-1, .poitn-1').click(function(){
		$(this).addClass('active');
		$('.slider').css('background-image', 'url(../img/Layer-36.png)');
		$('.clicked-pagination').css('left', '5px');

	})
	$('.Slider-v1-pagination-3, .poitn-3').click(function(){
		$(this).addClass('active');
		$('.slider').css('background-image', 'url(../img/Layer-39.png)');
		$('.clicked-pagination').css('left', '175px');
	})
	$('.Slider-v1-pagination-4, .poitn-4').click(function(){
		$(this).addClass('active');
		$('.slider').css('background-image', 'url(../img/Layer-38.png)');
		$('.clicked-pagination').css('left', '260px');
	})
	$('.Slider-v1-pagination-5, .poitn-5').click(function(){
		$('.slider').css('background-image', 'url(../img/Layer-37.png)');
		$('.clicked-pagination').css('left', '345px');
	})

	$('.trailer-1').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/Gek8fH-nLW0?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
            $('body').append('<div id="fade"></div>');
            $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
    $('.trailer-2').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/sKpVXdgIWlg?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
    $('.trailer-3').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/3gBctl1h_2o?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
    $('.trailer-4').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/oITmk-7YAMk?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
    $('.trailer-5').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/Gek8fH-nLW0?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
    $('.trailer-6').click(function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe src="https://www.youtube.com/embed/YJXsjsDhw_4?autoplay=1" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>');
            q_width = $('#popup').outerWidth()/-2;
            q_height = $('#popup').outerHeight()/-2;
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
	$('.video-trail').click(function(){
		$(this).find('.tube-button').css('background-color', 'rgb(247, 213, 74)');
	});
	$('.Tube-trailers-Slider__video').mouseenter(function(){
		$(this).find('.video-img-bg').css('display', 'block');
		$(this).css('background-color', 'rgb(181,140,192');
		$(this).find('p').css('color', '#fff');
	});
	$('.Tube-trailers-Slider__video').mouseleave(function(){
		$(this).find('.video-img-bg').css('display', 'none');
		$(this).css('background-color', 'rgb(255,255,255');
		$(this).find('p').css('color', 'rgb(180, 180, 180)');
	});
	// ARTICLE HOVER ---------------------------------
	$('.middle-size, .large-size').mouseenter(function(){
		$(this).css('background-color', 'rgb(45, 149, 191)');
		$(this).find('p').css('color', 'rgb(255,255,255)');
		$(this).find('.nickname').css('color', 'rgb(45, 149, 191)');
		$(this).find('.post-date>p').css('color', 'rgb(255,255,255)');

	});
	$('.middle-size, .large-size').mouseleave(function(){
		$(this).css('background-color', 'rgb(255,255,255)');
		$(this).find('p').css('color', 'rgb(45,45,45)');
		$(this).find('.nickname').css('color', 'rgb(45, 149, 191)');
		$(this).find('.post-date>p').css('color', 'rgb(255,255,255)');
	});
	// Footer ------------------------------------------
	$('.footer-right-flower, .footer-right-flower:before').mouseenter(function(){
		$('.footer-center-img-2').css('z-index', '11');
	});
	$('.footer-right-flower, .footer-right-flower:before').mouseleave(function(){
		$('.footer-center-img-2').css('z-index', '9');
	});
	$('.footer-left-flower, .footerleft-flower:before').mouseenter(function(){
		$('.footer-center-img-3').css('z-index', '11');
	});
	$('.footer-left-flower, .footerleft-flower:before').mouseleave(function(){
		$('.footer-center-img-3').css('z-index', '8');
	});
});
window.onload = function() {
	var canvas = document.querySelector('#Slider-Line-1');
	var context = canvas.getContext("2d");

	context.beginPath();
	context.moveTo(0, 100);
	context.lineTo(160, 1);
	context.lineWidth = 1;
	context.strokeStyle = '#29abcd';
	context.stroke();
	context.beginPath();
	context.arc(80, 50, 4, 0, 2*Math.PI, false);
	context.fillStyle ='#29abcd';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle ='#29abcd';
	context.stroke();

	var canvas_2 = document.querySelector('#Slider-Line-2');
	var context_1 = canvas_2.getContext("2d");

	context_1.beginPath();
	context_1.moveTo(0, 100);
	context_1.lineTo(160, 0);
	context_1.lineWidth = 1;
	context_1.strokeStyle = '#29abcd';
	context_1.stroke();
	context_1.beginPath();
	context_1.arc(80, 50, 4, 0, 2*Math.PI, false);
	context_1.fillStyle ='#29abcd';
	context_1.fill();
	context_1.lineWidth = 1;
	context_1.strokeStyle ='#29abcd';
	context_1.stroke();

	var canvas_3 = document.querySelector('#pagination-for-max1199__line');
	var context_3 = canvas_3.getContext('2d');

	context_3.beginPath();
	context_3.moveTo(0, 0);
	context_3.lineTo(80, 60);
	context_3.lineWidth = 1;
	context_3.strokeStyle = '#29abcd';
	context_3.stroke();
	context_3.beginPath();
	context_3.arc(40, 30, 2, 0, 2*Math.PI, false);
	context_3.fillStyle ='#29abcd';
	context_3.fill();
	context_3.lineWidth = 1;
	context_3.strokeStyle ='#29abcd';
	context_3.stroke();
};