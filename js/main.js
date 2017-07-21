$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner = $preloader.find('spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
$(document).ready(function() {
	$('#nav-button').click(function(){
		$(this).toggleClass('open');
		$(".navigation").toggleClass('opened');		
		$(".navigation").animate({opacity: 1}, 100);		
	});	
	$(window).scroll(function() {
		var st = $(this).scrollTop();

		$(".first-block").css({
			"transform" : "translate 0%, -" + st/20 +"%"
			// "-webkit-transform" : "translate 0%, -" + st/20 +"%"
		});
	});
	// $('.grid').isotope({
	//   // options
	//   itemSelector: '.grid-item',
	//   layoutMode: 'fitRows'
	// });
	$('.grid-item-img-1').mouseenter(function () {
		$(this).find('.add-inf').fadeToggle('slow', 'linear');
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	});
	$('.grid-item-img-1').mouseleave(function () {
		$(this).find('.add-inf').fadeToggle('400', 'linear');		
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	})
	//----------------------------------------------------------------
	$('.grid-item-img-2').mouseenter(function fadeToggle() {
		$(this).find('.add-inf').fadeToggle('slow', 'linear');
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	});
	$('.grid-item-img-2').mouseleave(function () {
		$(this).find('.add-inf').fadeToggle('400', 'linear');		
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	})
	//-----------------------------------------------------------------
	$('.grid-item-img-3').mouseenter(function () {
		$(this).find('.add-inf').fadeToggle('slow', 'linear');
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	});
	$('.grid-item-img-3').mouseleave(function () {
		$(this).find('.add-inf').fadeToggle('400', 'linear');		
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	})
	//------------------------------------------------------------------
	$('.grid-item-img-4').mouseenter(function () {
		$(this).find('.add-inf').fadeToggle('slow', 'linear');
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	});
	$('.grid-item-img-4').mouseleave(function () {
		$(this).find('.add-inf').fadeToggle('400', 'linear');		
		$(this).find('.add-inf_content').toggleClass('fadeOutDown');
	});
	//-----------------------------------------------------------------
						// // init Isotope
						// var $container = $('.isotope');
						//    // filter buttons
						//    $('#filters button').click(function(){
						// 	var $this = $(this);
						//        // don't proceed if already selected
						//        if ( !$this.hasClass('is-checked') ) {
						//          $this.parents('#options').find('.is-checked').removeClass('is-checked');
						//          $this.addClass('is-checked');
						//        }
						//      var selector = $this.attr('data-filter');
						//      $container.isotope({  itemSelector: '.item', filter: selector });
						//      return false;
						//    });
	$("#form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");
		});
		return false;
	});
	$("#name").focus(function () {
		$(".fa-user").css({
			"color":"#6BC868"
		});
	});
	$("#name").focusout(function() {
		$(".fa-user").css({
			"color":"#cfcfcf"
		});
	})
	$("#subject").focus(function () {
		$(".fa-code").css({
			"color":"#6BC868"
		});
	});
	$("#subject").focusout(function () {
		$(".fa-code").css({
			"color":"#cfcfcf"
		});
	});
	$("#email").focus(function () {
		$(".fa-envelope").css({
			"color":"#6BC868"
		});
	});
	$("#email").focusout(function () {
		$(".fa-envelope").css({
			"color":"#cfcfcf"
		});
	});
	$("#message").focus(function () {
		$(".fa-comments").css({
			"color":"#6BC868"
		});
		$(".hint").css({
			"border-color":"#6BC868"
		})
	});
	$("#message").focusout(function () {
		$(".fa-comments").css({
			"color":"#cfcfcf"
		});
		$(".hint").css({
			"border-color":"#ccc"
		})
	});
	$(".textarea-field").mouseenter(function() {
		$(".hint").css({
			"border-color":"#6BC868"
		});
	});
	$(".textarea-field").mouseleave(function() {
		$(".hint").css({
			"border-color":"#ccc"
		});
	});
	$("#menu").on("click","a", function (event) {
		$('#nav-button').toggleClass('open');
		$(".navigation").toggleClass('opened');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
    new WOW().init();
    
});