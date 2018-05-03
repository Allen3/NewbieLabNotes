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

(function(){ 
	    var foo = 3; 
		    alert(foo); 
})(); 

alert(foo); 
