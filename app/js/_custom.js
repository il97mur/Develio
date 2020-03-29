document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

	$(document).on('click', function(e) {
		console.log(e.target)
	});

	// Открытие и закрытие блоков в секции "Услуги"

	$('.j-slide').on('click', function(){

		for(var i = 0; i < $('.j-slide').length; i++) {
			if ($($('.j-slide')[i]).find('img').hasClass('rotate') && $('.j-slide')[i] != this) {
				$($('.j-slide')[i]).next().slideUp();
				$($('.j-slide')[i]).find('img').toggleClass('rotate');
			}
		};
		$(this).next().slideToggle();
		$(this).next().css('display', 'flex');
	
		$(this).find('img').toggleClass('rotate');

	});
	
	$('.c-hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active');
		$('.popup-menu').fadeToggle();
	});

	// Форма аудита в верхем меню

	$('.j-popup-menu__get-audit-button').on('click', function(){
		$('.popup-menu__get-audit').fadeToggle();
	});

	$('.j-popup-menu__get-callback-button').on('click', function(){
		$('.popup-menu__get-callback').fadeToggle();
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

	jQuery(function($){
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".popup-menu__callback-form"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.popup-menu__get-callback').fadeOut(); // скрываем его
			}
		});
	});

	$('.portfolio__item').hover(function(){
		$(this).find('.j-portfolio-item__wrap').toggleClass('visible');
	});

	$('.more').hover(function(){
		$(this).find('.next-arrow__img').toggleClass('next-arrow__img_hover');
	});

	// $('.c-portfolio__h2').hover(function(){
	// 	$('.portfolio-item__wrap').addClass('visible');
	// });
	


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


// Изменение состояния кнопок на странице Portfolio

$('.j-content-filter__filter').on('click', function(){
	$(this).toggleClass('button_not-active');
});

// Подсветка активной ссылки в верхнем меню

function scroll_active() {

	/* вычисляем значения прокрутки страницы по вертикали */

	var window_top = $(window).scrollTop();

	/* вычисляем положение якорей на странице от начала страницы  по вертикали*/

	var portfolio = $('#portfolio').offset().top -10;

	var services = $('#services').offset().top -10;

	var industries = $('#industries').offset().top -100;

	var company = $('#company').offset().top -10;

	/* Переключатель активного пункта меню в зависимости от положения на странице, условии написаны от последнего якоря на странице, до первого */

	/* если на экране отображаются раздел «Контакты»*/

	if (window_top > company) {

		$(".menu__item").removeClass("menu__item_active");

		$('a[href="#company"]').addClass("menu__item_active");

			}

	/* если не отображается раздел «Контакты», но страницу прокрутили  ниже якоря третьего раздела*/

	else if (window_top > industries) {

		$(".menu__item").removeClass("menu__item_active");

		$('a[href="#industries"]').addClass("menu__item_active");

			}

	/* если выше третьего, но ниже якоря второго раздела*/

	else if (window_top > services) {

		$(".menu__item").removeClass("menu__item_active");

		$('a[href="#services"]').addClass("menu__item_active");

			}

	/* если не подходят условия предыдущие активируем первый пункт меню*/

	else {

		$(".menu__item").removeClass("menu__item_active");

		$('a[href="#portfolio"]').addClass("menu__item_active");


			}
}

jQuery(function()
{
	jQuery(window).scroll(scroll_active);
});

// Маска ввода номера телефона 

$('input[type="tel"]').mask("+7 (999) 999-9999",
{placeholder: ' ', autoclear: false} );



});
