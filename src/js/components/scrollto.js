function scrollToElement(target){
		var _this = $(target);
		_this.on("click", function(e){
			e.preventDefault();
			var a = $(this).attr("href");
			if(a == "#") return;
			var b = $(a).offset().top;
			$("html, body").animate({
				scrollTop: b
			}, 500);
		});

};
