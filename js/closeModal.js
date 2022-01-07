$(function(){
	const closeModal = function(){
		let $this = $(this)
		if ($(this).attr('data-close') != undefined){
			$this = $(this).closest('[data-modal]')
		}
		$('[data-modal-dialog]',$this).removeClass('modal__dialog--expand')
		setTimeout(function(){
			$this.addClass('hidden')
			$('body').removeClass('no-scroll')
		},200)					
		
	}
	$('[data-modal-dialog]').click(function(e){
		e.stopPropagation()
	})
	$('[data-close]').click(closeModal)
	$('[data-modal]').click(closeModal)

})