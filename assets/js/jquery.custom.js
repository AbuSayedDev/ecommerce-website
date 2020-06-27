//PriceSlider
$(document).ready(function(){
    $("#priceSlider").slider({
        value:3499,
        values:[0, 3499],
        min:20,
        max:3499,
        range: true,
        slide:function(event, ui){
            $("#amount").html("TK. "+ui.value);
        }
    });

    $("#amount").html("TK. "+$("#priceSlider").slider("value"));
});   

//elevateZoom
$(document).ready(function(){
    $("#zoom_01").elevateZoom({
        gallery:'thumbImage',
         cursor: 'pointer', 
         galleryActiveClass: 'active', 
         imageCrossfade: true,
    }); 
});


//Nav MEGA MENU
  $(document).ready(function() {
   // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up  
    $(window).resize(function(){
    	if ($(window).width() >= 980){	

          // when you hover a toggle show its dropdown menu
          $(".navbar .dropdown-toggle").hover(function () {
             $(this).parent().toggleClass("show");
             $(this).parent().find(".dropdown-menu").toggleClass("show"); 
           });

            // hide the menu when the mouse leaves the dropdown
          $( ".navbar .dropdown-menu" ).mouseleave(function() {
            $(this).removeClass("show");  
          });
      
    		// do something here
    	}	
    });  
    // document ready  
  });


 // lightgallery slider 
  $(document).ready(function(){
      $('#lightgallery').lightGallery();
  });
  $(document).ready(function(){
      $('#lightgallery2').lightGallery();
  });
