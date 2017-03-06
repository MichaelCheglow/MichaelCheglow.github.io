$(document).ready(function() {
	$('.navigation_menu_li').mouseenter(function() {
		$(this).find('.navigation_menu_li_span-l').animate({left: '-20px'}, 300);
		$(this).find('.navigation_menu_li_span-l').css('opacity', '1');
		$(this).find('.navigation_menu_li_span-r').animate({right: '-20px'}, 300);
		$(this).find('.navigation_menu_li_span-r').css('opacity', '1');
	});
		$('.navigation_menu_li').mouseleave(function() {
		$(this).find('.navigation_menu_li_span-l').animate({left: '-10px'});
		$(this).find('.navigation_menu_li_span-l').css('opacity', '0');
		$(this).find('.navigation_menu_li_span-r').animate({right: '-10px'});
		$(this).find('.navigation_menu_li_span-r').css('opacity', '0');
	});
	$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
});