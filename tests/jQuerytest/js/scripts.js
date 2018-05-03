$(document).ready(function(){
	/*
	$("#trigger").click(function(){
		$("#demo").html("Hello, world!");
	});
	*/
	$(".trigger").click(function(){
		$(".overlay").slideToggle();
	});
});
