// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){

$('.js-slider').slick({
	arrows: true
});
//////slick

//var hasSubMenu = $(".menu__item").children(".sub-menu");
$(".menu__item").on("click", function(){
	$(".menu__item").not(this).removeClass("js-menu-active");
	$(this).addClass("js-menu-active");
	//if($(this).children(".sub-menu")){
		$(this).children(".sub-menu").slideToggle();
	//}
		
	});



	///////////
});