$(document).ready(function(){
	$("#goa-container, #kashmir-container, #himachal-container").css("display", "none");
	$("#search").click(function(){
		
		var selected = $("#state").val();
		if(selected == "kerala"){
			$("#goa-container, #kashmir-container, #himachal-container").css("display", "none");
			$("#kerala-container").css("display", "block");
		}else if(selected == "kashmir"){
			$("#kerala-container, #goa-container, #himachal-container").css("display", "none");
			$("#kashmir-container").css("display", "block");
		}else if(selected == "goa"){
			$("#kerala-container, #kashmir-container, #himachal-container").css("display", "none");
			$("#goa-container").css("display", "block");
		}else {
			$("#kerala-container, #kashmir-container, #goa-container").css("display", "none");
			$("#himachal-container").css("display", "block");
		}
	});
	
	$(".note a").css("display", "none");
	$(window).resize(function(){
		if($(".intro-container").width() < 1060){
			$(".intro-container .note a").css("display", "block");
			$(".intro-container .hide").css("display", "none");
			
			$(".intro-container .note a").click(function(evt){
				evt.preventDefault();
				$(".intro-container .note a").css("display", "none");
				$(".intro-container .hide").css("display", "block");
			});
		}else{
			$(".intro-container .hide").css("display", "block");
			$(".intro-container .note a").css("display", "none");
		}
		
		if($(".season-container").width() < 1285){
			$(".season-container .note a").css("display", "block");
			$(".season-container .hide").css("display", "none");
			
			$(".season-container .note a").click(function(evt){
				evt.preventDefault();
				$(".season-container .note a").css("display", "none");
				$(".season-container .hide").css("display", "block");
			});
		}else{
			$(".season-container .hide").css("display", "block");
			$(".season-container .note a").css("display", "none");
		}
		
		if($(".place-container").width() < 1285){
			$(".place-container .note a").css("display", "block");
			$(".place-container .hide").css("display", "none");
			
			$(".place-container .note a").click(function(evt){
				evt.preventDefault();
				$(".place-container .note a").css("display", "none");
				$(".place-container .hide").css("display", "block");
			});
		}else{
			$(".place-container .hide").css("display", "block");
			$(".place-container .note a").css("display", "none");
		}
		
		if($(window).width() < 769){
			$(".place-container .hide, .season-container .hide, .intro-container .hide").css("display", "block");
			$(".note a").css("display", "none");
		}
	});
});