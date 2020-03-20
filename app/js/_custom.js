document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

	$(document).on('click', function(e) {
		console.log(e.target)
	});

	$('.j-slide').on('click', function(){

		// if ($(this).css('margin-bottom') == '0px') {
		// 	$(this).css('margin-bottom', '75px');
		// } else {
		// 	$(this).css('margin-bottom', '0px');
		// }

		$(this).next().slideToggle();
	
		$(this).next().css('display', 'flex');
		$(this).find('img').toggleClass('rotate');
	
		
	});

	$('.close').on('click', function(){
		$('.popup-menu').fadeToggle();
		console.log('Успешный клик');
	});
	
	$('.hamburger').on('click', function(){
		$('.popup-menu').fadeToggle();
	});

});
