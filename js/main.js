$('.signin')
	.click(function(){
		$('.modal')
			.fadeIn();
	});

$('.close')
	.click(function(){
		$('.modal')
			.fadeOut();
	});
$('.submit')
	.click(function(){
		$('input')
			.addClass('error');
	});
$('input')
	.on('mouseover', function(e){
		console.log('mouseover');
		$(this)
			.removeClass('error');
	});

$('.modal')
	.click(function(){
		$('.modal')
			.close();
	});