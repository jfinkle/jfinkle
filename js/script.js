$(document).ready(function(){
	$('.about-link').click(function(){
		$('section.about').slideToggle();
	});

	$('.hide-section a').click(function(){
		$('section.about').slideUp();
	});

  	$('.work-link').click(function(event){
    	$('html, body').stop().animate({
      		scrollTop: $('#work').offset().top - 30
    	}, 1000,'easeInOutExpo');

    	event.preventDefault();
  	});
});