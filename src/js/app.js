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
	var $this = $(this);
	$(".menu__item").not($this).removeClass("js-menu-active");
	$($this).addClass("js-menu-active");
	//if($(this).children(".sub-menu")){
		$(".menu__item").not($this).children(".sub-menu").slideUp();
		$($this).children(".sub-menu").slideToggle();
		//$(".menu-btn").trigger("click");
	//}

});

$(".menu-btn").on("click", function(){
	$(this).toggleClass("btn-is-active");
	$(".header__menu").slideToggle();
	$(".menu__item").removeClass("menu-btn");
	$(".menu__item").children(".sub-menu").slideUp();
});
/////////////

	///////////
});