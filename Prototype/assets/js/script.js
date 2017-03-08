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
	
		function checkScroll () {
			var self = arguments.callee;
			currScroll = window.pageYOffset || document.documentElement.scrollTop;
			var currDelta = currScroll - self.prevScroll;
			if (!self.prevDelta && currDelta) {
				$('#wrapper').animate({opacity: 0.1}, 0);
			}
			if (self.prevDelta && !currDelta){
				$('#wrapper').animate({opacity: 1}, 200);
			}
			self.prevScroll = currScroll;
			self.prevDelta = currDelta;
		};
	checkScroll.prevScroll = 0;
	checkScroll.prevDelta = 0;
	return checkScroll;
}


setInterval(ScrollManager(), 200);
});
