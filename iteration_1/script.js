$(document).ready(function(){
	
	//mouse interation 
	$('#cream').mouseover(function(){
		$(this).animate({
			width: '+=300px'
		});
	});
	$('#cream').mouseout(function(){
		$(this).animate({
			width: '-=300px'
		});
	});
	$('#brown').click(function(){
		$(this).toggle(1000);
	});
});