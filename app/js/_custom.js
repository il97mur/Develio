document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

	// Открытие и закрытие блоков в секции "Услуги"

	$('.j-slide').on('click', function(){

		for(var i = 0; i < $('.j-slide').length; i++) {
			if ($($('.j-slide')[i]).find('.services__pixel-arrow-img').hasClass('rotate') && $('.j-slide')[i] != this) {
				$($('.j-slide')[i]).next().slideUp();
				$($('.j-slide')[i]).find('.services__pixel-arrow-img').toggleClass('rotate');
			}
		};
		$(this).next().slideToggle();
		$(this).next().css('display', 'flex');
	
		$(this).find('.services__pixel-arrow-img').toggleClass('rotate');

	});
	
	$('.c-hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active');
		$('.popup-menu').fadeToggle();
	});

	// Форма аудита в верхем меню popup-menu

	$('.j-popup-menu__get-audit-button').on('click', function(){
		$('.popup-menu__get-audit').fadeToggle();
	});

	// Форма обратной связи в popup-menu

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

// Маска ввода номера телефона 

// $('input[type="tel"]').mask("+7 (999) 999-99-99",
// {placeholder: ' ', autoclear: false} );	

$('.input-checkbox').on('click', function(){
	$(this).toggleClass('j-input-checkbox_cheked');
});


	function setCursorPosition(pos, elem) {
		elem.focus();
		if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		else if (elem.createTextRange) {
			var range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select()
		}
	}
	
	function mask(event) {
		var matrix = "+7 (___)-___-__-__",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		if (def.length >= val.length) val = def;
		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
		});
		if (event.type == "blur") {
			if (this.value.length == 2) this.value = ""
		} else setCursorPosition(this.value.length, this)
	};
		
	function validateForm(input) {
		input.addEventListener("input", mask, false);
		input.addEventListener("input", function(event) {
			// console.log($(input).val().length);
			// if ($(input).val().length == 18) {
			// 	$(input).addClass('input_valid');
			// } else {
			// 	$(input).removeClass('input_valid');
			// }

			// 	if ($(this).hasClass('input_valid')) {
			// 		$(this).parents('form').find('[type="submit"]').removeClass('disabled');
			// 		$(this).parents('form').find('[type="submit"]').removeAttr('disabled');
			// 	} else {
			// 		$(this).parents('form').find('[type="submit"]').addClass('disabled');
			// 		$(this).parents('form').find($('[type="submit"]')).attr('disabled', '');
			// 	}

			// } else {

			// 	// Фукнция проверки на отмеченность хотя бы одного чекбокса

			// 	var oneCheckbox = false;
			// 	for (var i = 0; i < $(this).parents('form').find('[type="checkbox"]').length; i++) {
			// 		if ($($(this).parents('form').find('[type="checkbox"]')[i]).hasClass('j-input-checkbox_cheked')) {
			// 			oneCheckbox = true;
			// 		}
			// 	}
				

			// 	if ($(this).hasClass('input_valid') && oneCheckbox == true) {
			// 		$(this).parents('form').find('[type="submit"]').removeClass('disabled');
			// 		$(this).parents('form').find('[type="submit"]').removeAttr('disabled');
			// 	} else {
			// 		$(this).parents('form').find('[type="submit"]').addClass('disabled');
			// 		$(this).parents('form').find($('[type="submit"]')).attr('disabled', '');
			// 	}
			// }

			
			// console.log(input.validity.valid);
		}, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
	};

	for (var i = 0; i < $('input[type="tel"]').length; i++) {
		validateForm($('input[type="tel"]')[i]);
		$($('input[type="tel"]')[i]).attr('maxlength', '18')
	}

	// for (var i = 0; i < $('.input-checkbox').length; i++) {
	// 	validateForm($('.input-checkbox')[i]);
	// }



// var form  = document.getElementsByTagName('form')[0];


// Подсветка активной ссылки в верхнем меню





// PORTFOLIO - PAGE

var contentFilter = $('.j-content-filter__filter');
var category = $('.j-category');

// Скрытие элементов сетки в зависимости от неактивных фильтров при загрузке страницы

for (var i = 0; i < $('.j-content-filter__filter').length; i++) {

	if ($('.j-content-filter__all').hasClass('button_not-active') == false) {
		contentFilter.removeClass('button_not-active');
	}

	if ($(contentFilter[i]).hasClass('button_not-active')) {

		for(var k = 0; k < category.length; k++) {
			if ($(contentFilter[i]).html() == $(category[k]).find('.j-category__value').html()) {
				$($('.j-category')[k]).height('0px');
				console.log($($('.j-category')[k]).find('.portfolio-item__wrap'));
				$($('.j-category')[k]).find('.portfolio-item__wrap').addClass('d-none');
			}
		}

	} 
}


// Инициализация сетки при загрузке страницы

var $grid = $('.portfolio-list__grid-container').imagesLoaded( function() {
// init Masonry after all images have loaded
$grid.masonry({
	itemSelector: '.portfolio-list__item',
	columnWidth: '.percent-size',
	percentPosition: true
});
});


// Обработка клика по фильтру на странице "Портфолио"
function filterClick(){

	var counter = 0; // Счётчик активных фильтров

	// Цикл для отображения/скрытия элементов сетки в зависимости от выбранных фильтров

	for (var i = 0; i < $('.j-content-filter__filter').length; i++) { 

		if ($(contentFilter[i]).hasClass('button_not-active')) {
			for(var k = 0; k < category.length; k++) {
				if ($(contentFilter[i]).html() == $(category[k]).find('.j-category__value').html()) {
					$($('.j-category')[k]).height('0px');
					$($('.j-category')[k]).find('.portfolio-item__wrap').addClass('d-none');
				}
			}
	
		} else {
			counter++;
			console.log(counter);

			for(var k = 0; k < category.length; k++) {
				if ($(contentFilter[i]).html() == $(category[k]).find('.j-category__value').html()) {
					$($('.j-category')[k]).height('initial');
					$($('.j-category')[k]).find('.portfolio-item__wrap').removeClass('d-none');
				}
			}
		}
	}

	// Активация фильтра "Все"

	if (counter == $('.j-content-filter__filter').length) {
		$('.j-content-filter__all').removeClass('button_not-active')
	}

	// Сброс счётчика

	counter = 0;


// Инициализация сетки

var $grid = $('.portfolio-list__container').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        itemSelector: '.portfolio-list__item',
		columnWidth: '.percent-size',
		percentPosition: true
    });
});


};

$('.j-content-filter__all').on('click', function(){
	$(this).toggleClass('button_not-active');
	if ($('.j-content-filter__all').hasClass('button_not-active') == false) {
		contentFilter.removeClass('button_not-active');
	} else {
		contentFilter.addClass('button_not-active');
	}
	filterClick();
});

$('.j-content-filter__filter').on('click', function(){
	$(this).toggleClass('button_not-active');
	if ($('.j-content-filter__all').hasClass('button_not-active') == false) {
		$('.j-content-filter__all').toggleClass('button_not-active');
	}
	filterClick();

});

// PORTFOLIO PAGE END




// Запуск проверки каждой формы на странице
for (var i = 0; i < $('form').length; i++) {
	validate($($('form')[i]));
}

// Подключение макси ввода для поля "Бюджет"

// Функция для выделения текущей активной ссылки на странице

function scroll_active() {
	
	var window_top = $(window).scrollTop();
	$('.menu__item').removeClass('menu__item_active');

	for(var i = 0; i < $('.j-anchor').length; i++) {
		if (i < $('.j-anchor').length - 1) {
			if (window_top > $($('.j-anchor')[i]).offset().top -10 && window_top < $($('.j-anchor')[i+1]).offset().top -10) {
				$($('.menu__item')[i]).addClass('menu__item_active');
			} 
		}
		if (i == ($('.j-anchor').length - 1) && window_top > $($('.j-anchor')[i]).offset().top -10){
			$($('.menu__item')[i]).addClass('menu__item_active');
		}
	}
}

$(window).scroll(scroll_active);

});


// Функция изменения цветовой схемы проекта

function changeColor(mainColor, secondColor, linkColor) {
	var bg = 'background';
	var bgc = 'background-color';
	var c = 'color';

	$('.project-custom-logo__item').css(bg, mainColor);
	$('.project-wrapper__gradient').css(bg, 'linear-gradient(180deg,' + secondColor + ', transparent)');

	$('body').css(bgc, secondColor);
	$('.menu__item').hover(function(){
		$(this).css(c, mainColor);
	}, function(){
		$(this).css(c, '');
	});

	$('.header__row').css(bgc, secondColor);
	$('.breadcrumps__item:hover').css(c, mainColor);
	$('.breadcrumps__item').hover(function(){
		$(this).css(c, mainColor)
	}, function(){
		$(this).css(c, '')
	});

	$('.project__button_primary').css(bg, mainColor);
	$('.project-description').css(bg, mainColor);
	$('.project-description__link').css('border-color', linkColor);
	$('.project-description__link').css(c, linkColor);
};

function changeBGImage(src){
	$('.project-wrapper').css('background-image', 'url(' + src + ')');
};


// Функция для проверки формы на валидность

function validate(form) {

// Переменные, отражающее валидность группы интутов. inputValid - для [type="text"]; telValid - для [type="tel"]
	var inputValid = false;
	var telValid = false;

	var input = form.find("input:not([type=checkbox]):not([type=tel])");
	var phone = form.find('input[type="tel"]');

	var counter = 0; // Счетчик для определения валидности группы инпутов

	// Добавление обработчика событий на текстовые инпуты
	for (var i = 0; i < input.length; i++) {
		input[i].addEventListener("input", function(){

			// Фукнция, которую выполняет обработчик

			// Проверка текстовых инпутов
			for (var i = 0; i < input.length; i++) {
				console.log($(input[i]).val());

				if ($(input[i]).val().length > 0) {
					$(input[i]).addClass('j-input_valid');
					console.log("Текстовый инпут стал валидным")
					counter++;
				}
				else {
					$(input[i]).removeClass('j-input_valid');
					counter--;
				}
			} 

			if (counter == input.length) 
				inputValid = true;
			else 
				inputValid = false;
			
			counter = 0;

			// Проверка инпутов номера телефона
			for (var i = 0; i < phone.length; i++) {
				console.log($(phone[i]).val());

				if ($(phone[i]).val().length == 18) {
					$(phone[i]).addClass('j-input_valid');
					console.log("Текстовый инпут стал валидным")
					counter++;
				}
				else {
					$(phone[i]).removeClass('j-input_valid');
					counter--;
				}
			} 

			if (counter == phone.length) 
				telValid = true;
			else
				telValid = false;

			counter = 0;

			// Условия для активации submit-кнопки
			if (inputValid == true && telValid == true) {
				form.find('[type="submit"]').removeClass('disabled');
				form.find('[type="submit"]').removeAttr('disabled');
			} else {
				form.find('[type="submit"]').addClass('disabled');
				form.find('[type="submit"]').attr('disabled', '');
			}	
		}, false);
	}

	// Добавление обработчика события на инпуты с номером телефона
	for (var i = 0; i < phone.length; i++) {
		phone[i].addEventListener("input", function(){

			// Функция, которую выполняет обработчик

			// Проверка инпутов номера телефона
			for (var i = 0; i < phone.length; i++) {
				console.log($(phone[i]).val());

				if ($(phone[i]).val().length == 18) {
					$(phone[i]).addClass('j-input_valid');
					console.log("Текстовый инпут стал валидным")
					counter++;
				}
				else {
					$(phone[i]).removeClass('j-input_valid');
					counter--;
				}
			} 

			if (counter == phone.length) 
				telValid = true;
			else
				telValid = false;

			counter = 0;

		// Проверка текстовых инпутов
			for (var i = 0; i < input.length; i++) {
				console.log($(input[i]).val());

				if ($(input[i]).val().length > 0) {
					$(input[i]).addClass('j-input_valid');
					console.log("Текстовый инпут стал валидным")
					counter++;
				}
				else {
					$(input[i]).removeClass('j-input_valid');
					counter--;
				}
			} 

			if (counter == input.length) 
				inputValid = true;
			else 
				inputValid = false;
			
			counter = 0;


			// Условия активации submit-кнопки
			if (inputValid == true && telValid == true) {
				form.find('[type="submit"]').removeClass('disabled');
				form.find('[type="submit"]').removeAttr('disabled');
			} else {
				form.find('[type="submit"]').addClass('disabled');
				form.find('[type="submit"]').attr('disabled', '');
			}


		}, false);

	}

// Условия для активации submit-кнопки
	if (inputValid == true && telValid == true) {
		form.find('[type="submit"]').removeClass('disabled');
		form.find('[type="submit"]').removeAttr('disabled');
	} else {
		form.find('[type="submit"]').addClass('disabled');
		form.find('[type="submit"]').attr('disabled', '');
	}
	
}

// Функция маски для поля "Бюджет"

// function moneyMask(event) {
// 	var matrix = "_ ___ ___ ___",
// 		i = 0,
// 		def = matrix.replace(/\D/g, ""),
// 		val = this.value.replace(/\D/g, "");
// 	if (def.length >= val.length) val = def;
// 	this.value = matrix.replace(/./g, function(a) {
// 		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
// 	});
// };

