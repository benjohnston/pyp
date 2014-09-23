$(document).ready(function () {
    $(".lang-hover").fancybox({
        'titlePosition': 'inside',
        'transitionIn': 'fadeIn',
        'transitionOut': 'fadeOut'
        //'autoDimensions': false,
        //'width': '920',
        //'height': 'auto'
    });
    $('.btn-languages .lang-hover').hover(function () {
        this.click();
    });
    

    $('.featured-slider .bxslider .article-bg article:last').addClass('article-last');



      ﻿$('.featured-slider .bxslider .article-bg article:last-child').each(function(e){
          $(this).addClass("last");
      });

    responsiveClose();
    loadBxSlider();
    moveMenu();
  
    
    
    //$('#left-menu').sidr({
    //    name: 'sidr-left',
    //    source: '#sidr-left'
    //    //side: 'left'
    //});
});



function responsiveClose(){
    /*var sliderLoad = $('.ie8 .bxslider').bxSlider({
      mode: 'horizontal'
    }); 
   

    sliderLoad.preventDefault();
      
      sliderLoad.reloadSlider();
      sliderLoad.hide();
      sliderLoad.reloadSlider().show(1000);*/
}

function loadBxSlider(){

    var slider = $('.close-mobile .show_mobile1 .bxslider').bxSlider({
      mode: 'horizontal'
    });

    $('.close-mobile .accordionButton7').click(function(e){
      e.preventDefault();
      
      slider.reloadSlider();
      $('.close-mobile .show_mobile1 .bx-viewport').css('height','inherit');
      slider.reloadSlider();

    });

} 

function moveMenu(){
  $('.menu-icon #right-menu').click(function(){
    $('.close-menu').show();
  });

}