$(function(){
	const filterBtns = $('[data-filter]')
	const worksItems = $('[data-category]')
	const updateWorksList = function() {
		const filter = $(this).attr('data-filter')
		if (filter == "all") worksItems.removeClass('hidden')
		else{
			worksItems.each(function() {
				const category = $(this).attr('data-category')				
				if (category == filter) $(this).removeClass('hidden')
				else $(this).addClass('hidden')
			})
		}
		
	}
	filterBtns.click(updateWorksList)
})