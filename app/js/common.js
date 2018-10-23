$(function() {

	// Custom JS
	$("#my-menu").mmenu({
		extensions: ['position-right', 'theme-black', 'effect-menu-slide', '**pagedim-black'],
		navbar: {
			title: '<a href="#" class="site-logo"><span>Katniss</span></a>'
		}
	});

	var navigationMenu = $('#my-menu').data('mmenu');
	navigationMenu.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	navigationMenu.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});

// let $eventBlock = document.querySelectorAll('.live-block-tag');
// for (var i = 0; i = $eventBlock.length - 1; i++) {
// 	if (+$eventBlock[i].querySelector('.live-block-more-info').innerHTML > 79) {
// 		console.log('***');
// 	}
// }