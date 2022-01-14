$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() >= 93){
			$('#header').addClass('header--shadow')
		}else{
			$('#header').removeClass('header--shadow')
		}
	})	
})