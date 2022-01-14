$(function(){

	// https://kenwheeler.github.io/slick/

	const works = [
		
		{title: "Keira", category: "Interaction", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme1.jpg", "files/portfolio/theme1-1.png", "files/portfolio/theme1-2.png"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "SRK", category: "Website", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme2.jpg", "files/portfolio/theme2.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "EduPro", category: "Interaction", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme3.jpg", "files/portfolio/theme3.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "EightyDays", category: "App", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme4.jpg", "files/portfolio/theme4.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "Lily", category: "App", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme5.jpg", "files/portfolio/theme5.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "Daisy", category: "Website", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme6.jpg", "files/portfolio/theme6.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "Nutritia", category: "Website", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme7.jpg", "files/portfolio/theme7.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "Techup", category: "Website", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme8.jpg", "files/portfolio/theme8.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"},
		
		{title: "themKantere1", category: "App", year: "2018", client: "Creative Agency", 
		img: ["files/portfolio/theme9.jpg", "files/portfolio/theme9.jpg"],  
		description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur, dolores distinctio aperiam voluptates commodi. Odio amet, obcaecati.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet cupiditate impedit libero placeat, est, iusto aut consequuntur.</p>"}
	]


	const htmlWorks = (id) => {
		return `
			<li class="works__item" data-category="${works[id].category}">
				<button class="works__btn" type="button" data-open-modal="#portfolio" data-work-id="${id}">
					<div class="works__card card-work">
						<div class="card-work__img-wrap"><img class="card-work__img" src="${works[id].img[0]}" alt="${works[id].title}"></div>
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

	const htmlPreviews = (img, title) => {
		return `
			<div class="slider-previews__item">
				<img class="slider-previews__img" src="${img}" alt="${title}">
			</div>
		`
	}

	const htmlPortfolio = (id) => {
		let previews = ""
		$.each(works[id].img, function(id, val){
			previews += htmlPreviews(val, works[id].title)
		})
		
		return `
			<div class="slider-works__item">
				<!-- Отдельная работа -->
				<div class="slider-works__card card-modal-work">
					<!-- Превьюшки для работы -->
					<!-- https://kenwheeler.github.io/slick/ -->
					<div class="card-modal-work__previews slider-previews">
						<div class="slider-previews__list" data-slick-previews>									
							${previews}
						</div>
					</div>
					<!-- Текстовое описание работы -->
					<div class="card-modal-work__content">
						<div class="card-modal-work__title">${works[id].title}</div>
						<div class="card-modal-work__subtitle">
							<div class="card-modal-work__category">${works[id].category}</div>
							<div class="card-modal-work__year">${works[id].year}</div>
						</div>
						<div class="card-modal-work__info work-info">
							<ul class="work-info__list">
								<li class="work-info__item">
									<div class="work-info__characteristic">Client:</div>
									<div class="work-info__value">${works[id].client}</div>
								</li>
							</ul>										
						</div>
						<div class="card-modal-work__description">
							${works[id].description}
						</div>
						<!-- Кнопки-переключатели работ -->
						<div class="card-modal-work__footer">
							<div class="slider-works__buttons">
								<button class="slider-works__button" data-slick-works-prev>
									<i class="slider-works__icon slider-works__icon--prev"></i>
									Previous
								</button>
								<button class="slider-works__button" data-slick-works-next>
									Next
									<i class="slider-works__icon slider-works__icon--next"></i>
								</button>
							</div>
						</div>									
					</div>
				</div>
			</div>
		`
	}

	
	// открытие модального окна
	const openModal = function() {
		const modalId = $(this).data('openModal')
		$(modalId).removeClass('hidden')
		setTimeout(function(){
			$('[data-modal-dialog]',modalId).addClass('modal__dialog--expand')
		},200)		
		$('body').addClass('no-scroll')
		$('#slick-works').slick('slickGoTo', $(this).data('workId'))
		$('#slick-works').slick('setPosition')
		$('[data-slick-previews]').slick('setPosition')		
	}

	// динамическая подгрузка работ
	let alreadyLoad = 0
	const countLoad = 6
	const loadWorks = () => {		
		for (let i = 0; i < countLoad; i++) {
			if(alreadyLoad == works.length){
				$('#works-more').addClass('hidden')
				break
			}
			$('#works-list').append(htmlWorks(alreadyLoad))			
			alreadyLoad++
		}
		$('.filter__button--active').click()
		$('[data-open-modal]').click(openModal)
	}

	// динамическая подгрузка портфолио
	const loadPortfolio = () => {
		for (let i = 0; i < works.length; i++) {
			$('#slick-works').append(htmlPortfolio(i))
		}
	}

	$('#works-more').click(loadWorks)
	loadWorks()
	loadPortfolio()

	//включение slick-слайдера для портфолио
	$('[data-slick-previews]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		adaptiveHeight: true,
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
		adaptiveHeight: true,
		swipe: false
	})
	$('[data-slick-works-prev]').click(function(){
		$('#slick-works').slick('slickPrev')
	})
	$('[data-slick-works-next]').click(function(){
		$('#slick-works').slick('slickNext')
	})



})