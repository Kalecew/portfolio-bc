$(function(){
	let alreadyLoad = 0
	const countLoad = 6

	const works = [
		{title: "Title Project", category: "Interaction", year: "2018", img: ""},
		{title: "Title Project", category: "Website", year: "2018", img: ""},
		{title: "Title Project", category: "Interaction", year: "2018", img: ""},
		{title: "Title Project", category: "App", year: "2018", img: ""},
		{title: "Title Project", category: "App", year: "2018", img: ""},
		{title: "Title Project", category: "Website", year: "2018", img: ""},
		{title: "Title Project", category: "Website", year: "2018", img: ""},
		{title: "Title Project", category: "Website", year: "2018", img: ""},
		{title: "Title Project", category: "App", year: "2018", img: ""}
	]

	// console.log()
	const htmlWorks = (id) => {
		return `
			<li class="works__item" data-category="${works[id].category}">
				<button class="works__btn" type="button" data-open-modal="#portfolio" data-work-id="${id}">
					<div class="works__card card-work">
						<img class="card-work__img" src="${works[id].img}" alt="${works[id].title}">
						<div class="card-work__text">
							<div class="card-work__category">${works[id].category}</div>
							<div class="card-work__title-wrap">
								<div class="card-work__title">${works[id].title}</div>
								<div class="card-work__year">${works[id].year}</div>
							</div>
						</div>
					</div>
				</button>
			</li>
		`
	}

	const loadWorks = () => {
		let html = $('#works-list').html()
		for (let i = 0; i < countLoad; i++) {
			if(alreadyLoad == works.length){
				$('#works-more').addClass('hidden')
				break
			}
			html += htmlWorks(alreadyLoad)
			alreadyLoad++;
		}
		$('#works-list').html(html)
		$('.filter__button--active').click()
	}

	$('#works-more').click(loadWorks)
	loadWorks()
	

})