// Starting Document.Ready Function

jQuery(document).ready(function($) {

	function fullWidthWrap(){
  if( $(".full-width-wrap").length ){
    $(".full-width-wrap").each(function(){
      var $_this = $(this),
        offset_wrap = $_this.position().left;
      $_this.css({
        width: $('#wrapper').width(),
        marginLeft: -offset_wrap
      });
    });
  };
};


if( $(".full-width-wrap").length && !fcGlobals.isiPhone ){
  if(fcGlobals.isMobile){
    $(window).bind("orientationchange", function() {
      fullWidthWrap();
    }).trigger( "orientationchange" );
  }else{
    $(window).on("resize", function(){
        fullWidthWrap();
    }).trigger("resize");
  }
};
	

windowWidth = jQuery(window).width();
 if (windowWidth < 800) {
(function($) {
jQuery('<span  class="btnshow_nav"></span>').insertBefore('#navigation ul.sub-menu, #navigation ul.children ');
 
      jQuery('#navigation ul.sub-menu, #navigation ul.children').hide();
})( );

 jQuery('span.btnshow_nav').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$(this).removeClass('onacc_nav');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$(this).next().slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('onacc_nav');
 
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 }  });

 }
 
 windowWidth = jQuery(window).width();
var lengthMenu =jQuery('#main-nav .fnc-menu > .sub-menu > li').length,
containerMenu2 = jQuery('#content '),
mapOffsetMenu = containerMenu2.offset().left,
containerMenu3 = jQuery('#top #main-nav .fnc-menu > .sub-menu'), 

 ie = $( "#body" ).hasClass( "ie9, ie" ),
 safari = $( "#body" ).hasClass( "safari" ),
containerMenu = jQuery('#main-nav .fnc-menu > .sub-menu');
if (windowWidth > 800) {

var mapOffsetMenuPad = mapOffsetMenu;
mapOffsetMenuPad = mapOffsetMenuPad;
containerMenu.css('width', '940px'  );

containerMenu.css('margin-left', '-20px');
  


if (safari == true ) {
  var nane = jQuery('ul.nav .fnc-menu');
 
nane.css('position', 'static');

};

containerMenu.css('padding-left', '20px');
containerMenu.css('padding-right', '20px');

 
}
	$('a[rel*=leanModal]').leanModal({ top : 200, closeButton: ".modal_close" });		
		
	
	
	//=========== Print page code
	
	$('#print-page').click(function(){
		window.print();
		return false;	
	});
	
	//=========== Mail page code
	
	$('#email-page').click(function(){
		mail_str = "mailto:?subject=Check out the " + document.title;
		mail_str += "&body=I thought you might be interested in the " + document.title;
		mail_str += ". You can view it at, " + location.href; 
		location.href = mail_str;
	});
	
	//=========== Bookmark page code
	
/*	$('#bookmark-page').click(function(){
		var bmURL = $(this).attr('href');
		var bmPageName = $(this).attr('title');
		external.AddFavorite(bmURL,bmPageName);
		return false;
	});*/
	
	//=============================
	
	//this function attached focus and blur events with input elements
	var addFocusAndBlur = function($input, $val){
		
		$input.focus(function(){
			if (this.value == $val) {this.value = '';}
		});
		
		$input.blur(function(){
			if (this.value == '') {this.value = $val;}
		});
	}

	// example code to attach the events
	addFocusAndBlur($('#s'),'Search for');
	addFocusAndBlur($('#cname'),'Name here');
	addFocusAndBlur($('#cemail'),'Email here');
	addFocusAndBlur($('#cmessage'),'Message');
	addFocusAndBlur($('#message'), 'Type your comments here');
	
 
 
	
	
	// Pretty Photo Relation Target
	
	//$("a[rel^='prettyPhoto']").prettyPhoto(); 
	
	//==================================
	
	
	// Image hover effect for whole site
	
	$('.img-box img, .single-img-box img, .img-box-serv img').not('.single-slider img').hover(function(){
			$(this).stop().animate({opacity:0.7},300);
	}, function(){
			$(this).stop().animate({opacity:1},300);
	});
 
 

 
	
	//==================================
	
	
	// Image Hover Effect for Slider Thumbs
	
	$('.sliderThumbs li a img').hover(function(){
			$(this).stop().animate({opacity:0.7},300);
	}, function(){
			$(this).stop().animate({opacity:1},300);
	});
	
	//==================================
	
	
	//NIVO SLIDER

	$('.nivo-slides').nivoSlider({

			effect:'slideInLeft', // Specify sets like: fold,fade,sliceDown,boxRain,random
			slices:25, // For slice animations
			boxCols: 16, // For box animations
			boxRows: 8, // For box animations
			animSpeed:500, // Slide transition speed
			pauseTime:6000, // How long each slide will show
			startSlide:0, // Set starting Slide (0 index)
			directionNav:true, // Next & Prev navigation
			directionNavHide:true, // Only show on hover
			controlNav:false, // circles navigation
			captionOpacity: 0.7
	});
	
	//==================================
	
	
	// Tabs Code for whole site
	
	$('.tabed .tabs li:first-child').addClass('current');
	$('.tabed .block:first').addClass('current');
	
	$('.tabed .tabs li').click(function(){
			var tabNumber = $(this).index();
			$(this).parent('ul').siblings('.block').removeClass('current');
			$(this).siblings('li').removeClass('current');
			$(this).addClass('current');
			$(this).parent('ul').parent('.tabed').children('.block:eq('+ tabNumber +')').addClass('current');
	});
	
	//==================================
	
	
	// Accordion for Whole Site
	
	$('.accordion h5').click(function(){
			if(!$(this).hasClass('current')){
					var tabNumber = $(this).index();
					$('.accordion .pane.current').slideUp(700, function(){ $(this).removeClass('current'); });
					$(this).next('.pane').show('blind',700,function(){ $(this).addClass('current'); });
					$('.accordion h5.current').removeClass('current');
					$(this).addClass('current');
			}
	});
	
	//==================================
	
	
	// Toggle Box Code for Whole Site

	$('.toggle-box ul li p').slideUp('slow');
	$('.toggle-box ul li h5').click(function(){
			if($(this).parent('li').hasClass('active')){
			  		$(this).stop(true, true).siblings('p').slideUp('slow');
					$(this).parent('li').removeClass('active');
			} else {
					$(this).stop(true, true).siblings('p').show('blind', 500);
					$(this).parent('li').addClass('active');
			}
	});
	
 
	
 
	
	
	// Recipe Single Carousel Code for Recipe Single Full Width Page
	
	var pieceWidth = $('#horiz_container li').width() + parseInt($('#horiz_container li').css('padding-left')) + parseInt($('#horiz_container li').css('margin-left'));
	var pieceCount = $('#horiz_container li').length;
	if(pieceCount/2 != 0){
			var outerWidth = pieceCount/2*pieceWidth+pieceWidth;
	} else {
			var outerWidth = pieceCount/2*pieceWidth;
	}
	$('#horiz_container').css('width',outerWidth);
	var carStatus = 0;
	$('#horiz_container_outer .right').click(function(){
			if(carStatus < (pieceCount/2)*pieceWidth-(pieceWidth+pieceWidth)){
					$('#horiz_container').animate({left: "-="+pieceWidth},500);
					carStatus += pieceWidth;
			}
	});
	$('#horiz_container_outer .left').click(function(){
			if(carStatus > 0){
					$('#horiz_container').animate({left: "+="+pieceWidth},500);
					carStatus -= pieceWidth;
			}
	});
	
	//==================================
	
	
	// Recipe Single Full Width Page Image Switch Code from Carousel
	
	$('#horiz_container li').click(function(){		
		var thisImgSrc = $(this).children('a').data('rel');
		var targetImgSrc = $('.single-img-box img').attr('src');		
		if(thisImgSrc != targetImgSrc)
		{
			$('.single-img-box img').fadeOut(200,function(){
					$('.recipe-single-img').addClass('withbg');
					$(this).attr('src',thisImgSrc);
					$(this).load(function(){
							$(this).fadeIn(200,function(){ $('.recipe-single-img').removeClass('withbg'); });
					});
			});
		}
	});
	
		
 
	//==================================
  	
	
	// Contact Form AJAX Function for Contact Page

	$('#contact-form').validate({
			submitHandler: function(form) {
		   			$(form).ajaxSubmit(contact_options);
		   }
	});
	
	//==================================
	
	
	// Rating System Code
	var rate_status;
	$('#rate-product .rates span').hover(function(){
			var itemCount = $(this).index()+2;
			var i = 0;
			while(i<itemCount){
					$('#rate-product .rates span:nth-child('+ i +')').removeClass('off');
					i++;
			}
		
	},function(){
			var i = 0;
			$('#rate-product .rates span').addClass('off');
			while(i<rate_status){
					$('#rate-product .rates span:nth-child('+ i +')').removeClass('off');
					i++;
			}
	});
	$('#rate-product .rates span').click(function(){
			
			rate_status = $(this).index()+2;
			
			$('#selected_rating').attr('value',rate_status-1);
			
			var options = { 
			        target:        '#output',   // target element(s) to be updated with server response 
			        beforeSubmit:  function(){},  // pre-submit callback 
			        success:       function(){
													$('#rate-product').fadeOut('slow',function(){
														$('#output').fadeIn('slow');	
													});
											}
			    };
	
			$('#rate-product').ajaxSubmit(options);
			
		});
	// bookmark
	    $(function() {
        $('#bookmarkme').click(function() {
            if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
                window.sidebar.addPanel(document.title,window.location.href,'');
            } else if(window.external && window.external.AddFavorite) { // IE Favorite
                window.external.AddFavorite(location.href,document.title); 
            } else if(window.opera && window.print) { // Opera Hotlist
                this.title=document.title;
                return true;
            } else { // webkit - safari/chrome
                alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
            }
        });
    });


 ;

  
  $('.tip').hover(function () {
    $(this).append('<div class="tooltip"><p>You can upload your pictures below.</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });

$('.tip2').hover(function () {
    $(this).append('<div class="tooltip"><p>You can fill your content below.</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });
$('.tip3').hover(function () {
    $(this).append('<div class="tooltip"><p>You can add your recipe ingredients below (this field is required).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });
$('.tip4').hover(function () {
    $(this).append('<div class="tooltip"><p>You can add your text recipe instruction below (this field is required).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });
$('.tip5').hover(function () {
    $(this).append('<div class="tooltip"><p>You can add your video from youtube or vimeo below (eg youtube https://www.youtube.com/watch?v=a0ahrXsI1g4, insert a0ahrXsI1g4. eg vimeo https://vimeo.com/65542790 insert 65542790).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });

$('.tip6').hover(function () {
    $(this).append('<div class="tooltip"><p>Add your nutrition mass below (eg 120g).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });

$('.tip7').hover(function () {
    $(this).append('<div class="tooltip"><p>Add your nutrition name below (eg natrium).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });
$('.tip8').hover(function () {
    $(this).append('<div class="tooltip"><p>Select your category recipe below.</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });
$('.tip9').hover(function () {
    $(this).append('<div class="tooltip"><p>You can add tags below use comma to seperate (eg tags1, tags2).</p></div>');
  }, function () {
    $('div.tooltip').remove();
  });


(function(){



	// Add more clones
	$( '.add-clone' ).click( function ()
	{
		$( '.remove-clone' ).show();
		var	$input      = $( this ).parents( '.rwmb-input' );
			$clone_last = $input.find( '.rwmb-clone:last' ),
			$clone      = $clone_last.clone( true );

		$clone.insertAfter( $clone_last );

		// Reset value
		$clone.find( ':input' ).val( '' );

		// Toggle remove buttons
		return false;
	} );
		
	// Remove clones
	$( '.remove-clone').click(function()
	{
		var $this  = $( this ),
			$input = $this.parents( '.rwmb-input' );
 		if ( $( '.remove-clone' ).length <= 1 )
		{
			$( '.remove-clone' ).hide();
		}
		// Remove clone only if there're 2 or more of them
		if ( $input.find( '.rwmb-clone' ).length > 1 )
		{
			$this.parent().remove();

		}
	   

		return false;
	} );

})();
// flexslider
        $('.fxslider').flexslider({
        animation: "slide",
         controlNav: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
      
 $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
      
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
        
	//teb==================================
	$(function() {
	    var $tabs = $( "#recipe-tabs" );
	    $tabs.tabs({ fx: { opacity: 'toggle' } }).tabs();
	    var offst = 0;
	    $('#recipe-tabs > div').each(function(index, elem) {
	        if ($(elem).html().trim() === '') {
	            $tabs.tabs( "remove" , index - offst);
	            offst++;
	        }
	    });
	});
	$('.menuLink').click(function(){

    $('a').removeClass('aktif');
    $(this).addClass('aktif');
	});

	// Recipe submit form
	$('#recipe-form').validate();
	
 	$(document).ready(function(){
   
    $(".rec-drop").hover(function(){
        $(this).find("div.snipit").fadeIn("slow");
    },function(){
        $(this).find("div.snipit").fadeOut("slow");    
    });
 
  //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('onacc');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('onacc');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton ').mouseover(function() {
		$(this).addClass('overacc');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('overacc');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.accordionContent').hide();

(function(){

var tb = $('div.boxinc');

$('button.increase').on('click', function(){
	tb.css('font-size', '+=2')
});

$('button.decrease').on('click', function(){
	tb.css('font-size', '-=1')
});

})();
	

 
	

});
});


