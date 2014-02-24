/*-----------------------------------------------------------------------------------*/
/* GENERAL SCRIPTS */
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){

	// Table alt row styling
	jQuery( '.entry table tr:odd' ).addClass( 'alt-table-row' );
	
	// FitVids - Responsive Videos
	jQuery( ".post, .widget, .panel" ).fitVids();
	if ( window.innerWidth < 768 ) {
		jQuery( '.entry' ).fitVids();
	}
	
	// Add class to parent menu items with JS until WP does this natively
	jQuery("ul.sub-menu").parents('li').addClass('parent');
	
	// Responsive Navigation (switch top drop down for select)
	// jQuery('ul#top-nav ').mobileMenu({
	// 	switchWidth: 767,                   //width (in px to switch at)
	// 	topOptionText: 'Select a page',     //first option text
	// 	indentString: '&nbsp;&nbsp;&nbsp;'  //string for indenting nested items
	// }) ;
  	
  	// Avoid widows in headings
  	jQuery("article header h1 a, .single article header h1, .product_title, .page-title, h1.title a, .product a h3").each(function(){var wordArray=jQuery(this).text().split(" ");var finalTitle="";for(i=0;i<=wordArray.length-1;i++){finalTitle+=wordArray[i];if(i==(wordArray.length-2)){finalTitle+="&nbsp;"}else{finalTitle+=" "}}jQuery(this).html(finalTitle)});
  	
  	// Show/hide the main navigation
  	jQuery('.nav-toggle').click(function() {
	  jQuery('#navigation').slideToggle('fast', function() {
	  	return false;
	    // Animation complete.
	  });
	});
	
	// Stop the navigation link moving to the anchor (Still need the anchor for semantic markup)
	jQuery('.nav-toggle a').click(function(e) {
        e.preventDefault();
    });
    
    // Add parent class to nav parents 
	jQuery("ul.sub-menu, ul.children").parents().addClass('parent');

	   jQuery(function(){
		jQuery('.star-rating, ul.cart a.cart-contents, .cart a.remove, .added_to_cart, a.tiptip').tipTip({
			defaultPosition: "top",
			delay: 0
		});
	});
	  jQuery(window).scroll(function() {
				if (jQuery(this).scrollTop() > 200) {
					jQuery('.go-top').fadeIn(200);
				} else {
					jQuery('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			jQuery('.go-top').click(function(event) {
				event.preventDefault();
				
				jQuery('html, body').animate({scrollTop: 0}, 300);
			})

  	

});	