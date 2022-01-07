$(function(){	
	$('[data-filter]').click(function() {
		const worksItems = $('[data-category]')
		const filter = $(this).data('filter')
		if (filter == "all") worksItems.removeClass('hidden')
		else{
			worksItems.each(function() {
				const category = $(this).data('category')				
				if (category == filter) $(this).removeClass('hidden')
				else $(this).addClass('hidden')
			})
		}		
	})
})