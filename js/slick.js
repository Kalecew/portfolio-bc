$(function(){
	// https://kenwheeler.github.io/slick/

	$('[data-slick-previews]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 2000
	})

	$('#slick-works').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		initialSlide: 0,
		swipe: false
	})

	$('[data-slick-works-prev]').click(function(){
		$('#slick-works').slick('slickPrev')
	})
	$('[data-slick-works-next]').click(function(){
		$('#slick-works').slick('slickNext')
	})
})



