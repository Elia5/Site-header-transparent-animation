$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-40}, 1500);
	});


	$('body').append('<button class="upbtn">');

	$('.upbtn').click(function(){
		$('body,html').animate({scrollTop: 0}, 1000);
		return false;
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$('.upbtn').addClass('active');
		}
		else{
			$('.upbtn').removeClass('active');
		}
	});



	function ScrollManager() {
		var prevScroll = 0,
		    prevDelta = 0;
		function checkScroll () {
			var currScroll = window.pageYOffset || document.documentElement.scrollTop,
			    currDelta = currScroll - prevScroll;
			if (!prevDelta && currDelta) {
				$('#wrapper').animate({opacity: 0.1}, 0);
			}
			if (prevDelta && !currDelta){
				$('#wrapper').animate({opacity: 1}, 200);
			}
			prevScroll = currScroll;
			prevDelta = currDelta;
		};
		return checkScroll;
	}

	setInterval(ScrollManager(), 200);
});
