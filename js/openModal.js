$(function(){
	$('[data-open-modal]').click(function() {
		const modalId = $(this).data('openModal')
		$(modalId).removeClass('hidden')
		setTimeout(function(){
			$('[data-modal-dialog]',modalId).addClass('modal__dialog--expand')
		},200)		
		$('body').addClass('no-scroll')
		if($(this).attr('data-open-modal') == "#portfolio"){
			$('#slick-works').slick('slickGoTo', $(this).data('workId'))
			$('#slick-works').slick('setPosition')
			$('[data-slick-previews]').slick('setPosition')
		}		
	})
})