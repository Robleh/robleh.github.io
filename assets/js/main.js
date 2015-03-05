$(document).ready(function(){
	var value = 0
	$("#scroll").rotate({ 
		 bind: 
			 { 
					click: function(){
							value +=180;
							$(".fa-chevron-down").rotate({ animateTo:value})
							$(".about-section").slideToggle();
							$(".quote").fadeToggle(300);
							$(".slide-right").delay(300).show(1200);
					}
			 } 	 
	});
});