$( document ).ready(function() {
    $( window ).on( "scroll", function() {
		var scrollPos=$( window ).scrollTop();
		if(scrollPos>600){
			$("#navBar").addClass("small");
		}else{
			$("#navBar").removeClass("small");
		}	
	} );
	$(".accordionHead").click(function(){
		//alert("The paragraph was clicked.");
		$(this).children(".accordionIcon").toggleClass("open");
		$(this).next(".accordionContent").slideToggle();
	});
	$("#mobileMenu").click(function(){
		$(this).toggleClass("open");
		$("#navBar").toggleClass("open");
		$("#navBar>nav").fadeToggle(200);
	});
	$("#navBar>nav>ul>li a").click(function(){
		//$("#mobileMenu").toggleClass("open");
		//$("#navBar").toggleClass("open");
		//$("#navBar>nav").hide();
		//alert("OK");
		if($("#navBar").hasClass("open")){
		   $("#mobileMenu").toggleClass("open");
		$("#navBar").toggleClass("open");
		$("#navBar>nav").hide();
		   }
		
	});
});