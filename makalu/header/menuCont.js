$(document).ready(function(){
	menuCont();
});

function menuCont(){
	var menus = $('.topIcons li');
	var cont = $('.topContWrap > ul > li');

	setTimeout(function(){
		cont.hide();
		menus.removeClass('on');
	},5000);

	menus.each(function(i){

		$(this).mouseenter(function(){

			menus.removeClass('on');
			$(this).addClass('on');

			if ( $(this).hasClass('on') ){
				cont.hide();
				cont.eq(i).show();
			}

		});

		$('#headerR').mouseleave(function(){
			cont.hide();
			menus.removeClass('on');
		});

		/*
		$('#headerR').mouseleave(function(){
			setTimeout(function(){
				cont.hide();
				menus.removeClass('on');
			},3000);
		});
		*/

	});
}