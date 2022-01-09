$(function(){	
	$('[data-filter]').click(function() {
		const worksItems = $('[data-category]')
		const filerItems = $('[data-filter]')
		const filter = $(this).data('filter')
		filerItems.removeClass('filter__button--active')
		$(this).addClass('filter__button--active')
		if (filter == "All") worksItems.removeClass('hidden')
		else{
			worksItems.each(function() {
				const category = $(this).data('category')				
				if (category == filter) $(this).removeClass('hidden')
				else $(this).addClass('hidden')
			})
		}		
	})
})