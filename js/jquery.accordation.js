$(document).ready(function() {
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('active');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton1').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton1').removeClass('active');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent1').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton1').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton2').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton2').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent2').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});
		
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton2').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton3').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton3').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent3').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton3').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton4').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton4').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent4').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton4').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	

	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton5').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton5').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent5').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton5').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});


    /********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
});


