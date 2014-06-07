$(function() {
	function creatDots(cb) {
		var $slides = $('.image-area .item');
		var slideLength = $slides.length;
		var dotTemp = '<div class="dot"></div>';
		var html = '';
		var $dotContainer = $('.dots');
		for (var i = 0; i < slideLength; i++) {
			html += dotTemp;
		}
		$dotContainer.append(html);
		$dotContainer.find('.dot').eq(0).addClass('current');
		cb();
	}
	function rotateSlider() {
		var $container = $('.container .image-area');
		var $dot = $('.dots .dot');
		$dot.on('click', function() {
			var index = $dot.index($(this));
			$('.dots .dot').removeClass('current');
			$(this).addClass('current');
			$container.css('transform','rotateX(' + (index * 90) +'deg)');
			$container.addClass('transition');
			$container.on('transitionend', function() {
				$container.removeClass('transition');
			});
		});
	}
	creatDots(function() {
		rotateSlider();
	});
});