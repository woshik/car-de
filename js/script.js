$(document).ready(function () {
	$('#aniimated-thumbnials').lightGallery({
		thumbnail: true,
	});

	$('.scroll-down-box-over').click(function () {
		$('body,html').animate({ scrollTop: $(window).height() }, 800);
	});

	$(".swiper-button-next").hover(function() {
		$(".swiper-slide-next").addClass("hover-element");
	}, function() {
		$(".swiper-slide-next").removeClass("hover-element");
	});
	$(".swiper-button-prev").hover(function() {
		$(".swiper-slide-prev").addClass("hover-element");
	}, function() {
		$(".swiper-slide-prev").removeClass("hover-element");
	});
	$(".swiper-button-prev, .swiper-button-next").click(function() {
		$(".swiper-slide").removeClass("hover-element");
	});
	$(".service-hover").hover(function() {
		$(".service-box-menu").addClass("active-service-box-menu");
		$(".service-hover").addClass("active-service-hover");
		$(".close-box-service").addClass("active-service-hover");
	});
	$(".no-service, .close-box-service").hover(function() {
		$(".service-box-menu").removeClass("active-service-box-menu");
		$(".service-hover").removeClass("active-service-hover");
		$(".close-box-service").removeClass("active-service-hover");
	});

	$('.burger-mobile-menu').click(function() {
		$(".menu").toggleClass("active-menu-mobile");
		$(".burger-mobile-menu").toggleClass("close-mob-menu");
	});
	
});
