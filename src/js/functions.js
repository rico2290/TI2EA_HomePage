//Função de mouse hover -> dropdown fadeIn e Fadeout
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

//sticky navbar
$(window).on('load',function(){
	$("#navHome").sticky({ topSpacing: 0 });
});

$('.dropdown').dropdown({
    hover: true,
    belowOrigin: true,
});