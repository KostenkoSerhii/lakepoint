// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery-ui.min.js
//=include lib/scrollto.min.js
//=include lib/jquery.magnific-popup.min.js

sayHello();

$(document).ready(function(){

	$('.js-slider').slick({
		arrows: true
	});
//////slick

//var hasSubMenu = $(".menu__item").children(".sub-menu");
$(".menu__item").on("click", function(e){
	var $this = $(this);
	var a =$(this).children("a").attr("href");
	$(".menu__item").not($this).removeClass("js-menu-active");
	$($this).addClass("js-menu-active");
	$(".menu__item").not($this).children(".sub-menu").slideUp();
	$($this).children(".sub-menu").slideToggle();
	if($this.has("ul").length > 0){
		e.preventDefault();
	}else{
		return $.scrollTo(a,500),!1
	};
});




// СМОТРЕТЬ ТУТ!!! 
/*по задумке необходимо при клике на пункт подменю взять в переменную
b значение атрибута href, найти елемент 'tabs-nav__item a' со значением 
атрибута b, емулировать на нем клик и сделать к нему скролл...
наколдовал как-то так, но нифига не работает, help!!!*/
$(".sub-menu__item").on("click", function(){
	var b = $(this).children("a").attr("href");
	var thisLink = $(".tabs-nav__item ").find("a [href=b]");
	//console.log("+");
	thisLink.trigger("click");
	return $.scrollTo(b,500),!1
});
// СМОТРЕТЬ ТУТ!!! 



$(".menu-btn").on("click", function(){
	$(this).toggleClass("btn-is-active");
	$(".header__menu").slideToggle();
	//$(".menu__item").removeClass("menu-btn");
	$(".menu__item").children(".sub-menu").slideUp();
});
/////////////
$("#tabs").tabs({
	show: { effect: "fadeIn", duration: 300},
	hide: { effect: "fadeOut", duration: 300}
});
$("#gallery-tabs").tabs({
	show: { effect: "fadeIn", duration: 300},
	hide: { effect: "fadeOut", duration: 300}
});




/*begin 767*/
var windowWidth = $(window).width();
if(windowWidth < 767){
	var tabnav = $(".tabs-nav").detach();
	$(".tabs").prepend(tabnav);
};
/*end >767*/

$(".gallery-block a").magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300
	}
});




	///////////
});