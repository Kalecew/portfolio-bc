$(function(){
	$('[data-slider-reviews-rate]').each(function(){
		const rate = parseFloat($(this).text())
		const parent = $(this).closest('[data-rating')
		const overlayStars = $('[data-stars-overlay',parent)
		const overlayWidth = rate * 100 / 5;
		overlayStars.css("width",overlayWidth+"%")
	})
	
})