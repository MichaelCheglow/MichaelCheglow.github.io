$(document).ready(function(){
	// ACTIVATIONS
	// Tooltip activation
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	$('.carousel').slick({
		accessibility: true,
		draggable: true,
		slidesToShow: 2,
		focusOnSelect: true,
		variableWidth: true
	});
	// $("#owl-example").owlCarousel({
	// 	item: 2,
	// 	lazyLoad : true,
 	// navigation : true

	// });
	// $('a[data-toggle=popover]').popover().click(function(e) {e.preventDefault()});
	

	// Hover effects
	$('.header__social>ul>li>a').mouseenter(function(){
		$(this).css('padding-top', '15px');
		$(this).css('text-align', 'center');		
		$(this).find('i').css('font-size', '30px');
		$(this).find('i').css('width', '30px');
		$(this).find('i').css('height', '30px');

	})
	$('.header__social>ul>li>a').mouseleave(function(){
		$(this).css('padding-top', '20px');
		$(this).css('text-align', 'center');		
		$(this).find('i').css('font-size', '20px');
		$(this).find('i').css('width', '20px');
		$(this).find('i').css('height', '20px');
	})
	$('.header_bot__menu ul li').mouseenter(function() {
		$(this).find('a').css("color", "rgb(31, 170, 226)");
	})
	$('.header_bot__menu ul li').mouseleave(function() {
		$(this).find('a').css("color", "rgb(109, 110, 113)");
	})
	$('.header_bot__menu ul li a').click(function() {
		$(this).find('img').addClass('active')
		$('.top-menu-active').siblings().removeClass('active');ю
	})



})