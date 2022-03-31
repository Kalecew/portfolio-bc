$(function(){
	$('#print').click(function(){
		window.print()
	})
	$('#download').click(function(){
		window.open('files/Resume.pdf' , '_blank');
	})
})