$(document).ready(function(){
	//global vars

	var searchBox = $("#textsearch");
	var searchBoxDefault = "Search CutieSpot by Location...";

	//searchBox show/hide default text if needed
	searchBox.focus(function(){
		if($(this).attr("value") == searchBoxDefault) $(this).attr("value", "");
	});
	searchBox.blur(function(){
		if($(this).attr("value") == "") $(this).attr("value", searchBoxDefault);
	});
	
	//FrontPage Dropdown Signin Popup
		$('span.register').mouseover(function () {
			// $('div.registerpopup').slideToggle('medium');
			$('div.registerpopup').css('display','block');
		    });
		$('span.register').mouseout(function () {
				$('div.registerpopup').css('display','none')		
		});
		
		$('span.signin').click(function () {
			$('div.signinpopup').slideToggle('medium');
			$('span.signin').replaceText("SIGN IN","CLOSE");
		    });
	
});