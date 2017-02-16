// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery-ui.min.js
//=include lib/jquery.magnific-popup.min.js

sayHello();

$(document).ready(function(){
	var windowWidth = $(window).width();

	$('.js-slider').slick({
		arrows: true
	});
//////slick

$(".link-js").on("click", function(e){
	var _this = $(this);
	var a = $(this).attr("href");
	e.preventDefault();
	$(".link-js").removeClass("js-menu-active");
	_this.addClass("js-menu-active");
	$(".link-js").not(_this).next(".sub-menu").slideUp();

	if(a == "#" && _this.next().is(".sub-menu")){
		_this.next(".sub-menu").slideToggle();

	}else{
		$("html, body").animate({
			scrollTop: $(a).offset().top
		}, 500);
		
		if(windowWidth < 767){
			$(".menu-btn").trigger('click');
		};
		
	};
});

$(".sub-link-js").on("click", function(e){
	e.preventDefault();
	var b = $(this).attr("data-tab-index")
	//console.log(b);
	$('#tabs').tabs("option", "active", b );
	$(this).parent().parent().slideUp();
	$("html, body").animate({
		scrollTop: $('#homes').offset().top
	}, 500);

	if(windowWidth < 767){
		$(".menu-btn").trigger('click');
	};

});



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