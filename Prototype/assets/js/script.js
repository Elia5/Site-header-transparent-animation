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

});

function ScrollManager() {
	checkScroll.prevScroll = 0;
	checkScroll.curScroll = null;
		function checkScroll () {
			var self = arguments.callee;
			self.curScroll = window.pageYOffset || document.documentElement.scrollTop;
			var deltaScroll = self.curScroll - self.prevScroll;
			if (deltaScroll) {
				$('#wrapper').animate({opacity: 0.1}, 0);
			}
			else {
				$('#wrapper').animate({opacity: 1}, 200);
			}
			self.prevScroll = self.curScroll;
		};
	return checkScroll;
}


setInterval(ScrollManager(), 200);