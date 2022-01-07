$(function(){
	$('[data-open-modal]').click(function() {
		const modalId = $(this).data('openModal')
		$(modalId).removeClass('hidden')
		setTimeout(function(){
			$('[data-modal-dialog]',modalId).addClass('modal__dialog--expand')
		},200)		
		$('body').addClass('no-scroll')
	})
})