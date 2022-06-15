

$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		smartSpeed:500,
		autoplayTimeout:2000,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	new WOW().init();

	
 });







