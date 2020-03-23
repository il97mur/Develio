document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

	$(document).on('click', function(e) {
		console.log(e.target)
	});

	// Открытие и закрытие блоков в секции "Услуги"

	$('.j-slide').on('click', function(){
		
		$(this).find('.service-content__inner').slideToggle();
		$(this).find('.service-content__inner').css('display', 'flex');
	
		// $(this).next().css('display', 'flex');
		$(this).find('img').toggleClass('rotate');
	
		
	});

	$('.close').on('click', function(){
		$('.popup-menu').fadeToggle();
		console.log('Успешный клик');
	});
	
	$('.hamburger').on('click', function(){
		$('.popup-menu').fadeToggle();
	});

	// Форма аудита в верхем меню

	$('.j-popup-menu__get-audit-button').on('click', function(){
		$('.popup-menu__get-audit').fadeToggle();
	});

	// Скрытие блока при клике вне его

	jQuery(function($){
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".popup-menu__audit-form"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.popup-menu__get-audit').fadeOut(); // скрываем его
			}
		});
	});
	


var form  = document.getElementsByTagName('form')[0];

[].forEach.call($('input[type="tel"]'), function(el) {
	el.addEventListener("input", function (event) {
		 if (el.validity.valid) {
		   $('.get-audit__submit').removeClass('disabled');
		 } else {
		   $('.get-audit__submit').addClass('disabled');
		 }
	   }, false);
});

// var phone = $('input[type="tel"]')[0];
// phone.addEventListener("input", function (event) {
//  // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
//   // является ли корректным поле электронной почты.
//   if (phone.validity.valid) {

// 	$('.get-audit__submit').removeClass('disabled');
//   } else {
// 	$('.get-audit__submit').addClass('disabled');
//   }
// }, false);

// $('input[type="tel"]').mask("8-999-999-99-99" , {placeholder: " " });
});
