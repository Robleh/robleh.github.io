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
							$("#python").delay(300).show("slide", {direction: "left"}, 1200);
							$("#html").delay(600).show("slide", {direction: "left"}, 1200);
							$("#php").delay(900).show("slide", {direction: "left"}, 1200);
							$("#js").delay(1200).show("slide", {direction: "left"}, 1200);
							$("#c").delay(1500).show("slide", {direction: "left"}, 1200);
					}
			 } 	 
	});
});