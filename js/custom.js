/*
	Project: Interior Design - Bootstrap One-page Template
	Author: Themes Vision
	Date: May 2017
	Version: 1.0
*/
/*----------------------------------------------------------------

[Table of contents]
	00. Variables
	01. Responsive menu
	02. Border on/off
	03. Display navigation on small landscape
	04. Portfolio images height
	05. Header border
	06. Animations
	07. Remove Animations
	08. Vertical centering ie9, ie10		
	09. Execute
		- Responsive menu	
		- Menu click		
		- Border on/off		
		- Native android add class		
		- Display navigation on small landscape
		- Owl slider 		
		- Owl fix height on resize		
		- Counter 		
		- Tooltips		
		- Magnific popup		
		- Modernizr		
		- Smooth scroll disabled in ie9 and ie10		
		- Smooth scroll disabled in ie11
		- Add class ie9
		- Add class ie10
		
	10. Window On Load
		- Isotope		
		- Vertical centering ie9		
		- Calcualting products		
		- Slider border 			
		- Fixing header 		
		- Trigger animations 
		
	11. Window On Resize
		- Navigation	
		- Border on/of		
		- Calcualting products	
		- Calculate header
		- Scroll btn add/remove		
		- Display navigation on small landscape
		- Vertical centering ie9
		
	12. Window On Beforeunload
		- Preloader	
		- Scroll to top				
		- Remove animations

----------------------------------------------------------------*/

(function($) {

	"use strict"
		
	//Variables
	var win = $(window);
	var doc = $(document);
	var body = $('body');
	var header = $('header');
	var wrapper = $(".wrapper");
	var $container = $('.portfolioContainer');
	var navbarCollapse = $(".navbar-collapse");	
	var navColFirstChild = $(".navbar-collapse ul:first-child");
	var scrollDown = $("#scroll-down");
	var osanimation = $('.os-animation');
	var stageredAnim = $('.staggered-animation');
	var stageredAnimC = $('.staggered-animation-container');
	var specialInner = $(".special-inner");
	var specialLine = $(".special-line-height");
	var contentInner = $(".content-inner");
	var contentOuter = $(".content-outer");
	//Responsive menu
	function collapsing()  { 	
		if(win.width()>767){
			navbarCollapse.removeClass("collapse").addClass("in");
		}
		else{
			navbarCollapse.removeClass("in").addClass("collapse");
		}  
	}
	//Border on/off
	function bordering()  { 		
		if(win.height()<767){
			scrollDown.css("display", "none");
			wrapper.css("border", "none");
		}
		else{
			scrollDown.css("display", "block");
			wrapper.css("border", "18px solid rgb(255, 255, 255)");
		}	
	}
	//Display navigation on small landscape
	function smallLandNav() {	
		var windowH = win.height();
		var headerH = header.height();
		var calcH = windowH-headerH;
		if(windowH<400){
			navColFirstChild.css("height", calcH);
			navColFirstChild.css("overflow-y", "auto");
		}
		else{
			navColFirstChild.css("height", "auto");
		}
	}
	//Scrollspy
	function scrollref()  { 
		var dataspy = $('[data-spy="scroll"]');
		dataspy.each(function () {
			body.scrollspy('refresh');
			});  
	}
	//Portfolio images height
	function calculateProduct()  {
		var currentSmallest = 20000;
		var isotopeImg = $('.isotope-img');	
		var isotopeImgCh = isotopeImg.children('img');
		isotopeImgCh.each(function(i){
			var imgCh = $(this);
			var imgChH = imgCh.height();
			var imgChildrenH = imgCh.children('img').height();
			if ( imgChildrenH < currentSmallest) { currentSmallest = imgChH; }
		});  
		isotopeImg.css({'max-height': currentSmallest-1}); 
	}
	// Header border
	function calculateHeaderBorder()  {
		var windowH = win.height();
		var windowW = win.width();
		var headerH = header.height();
		var heightCalc = windowH - 36 - headerH;
		var widthCalc = windowW - 36;
		wrapper.css("height", heightCalc);
		wrapper.css("width", widthCalc);
	}
	// Animations 
	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
			osAnimationClass = osElement.attr('data-os-animation'),
			osAnimationDelay = osElement.attr('data-os-animation-delay');
		  
			osElement.css({
			  '-webkit-animation-delay':  osAnimationDelay,
			  '-moz-animation-delay':     osAnimationDelay,
			  'animation-delay':          osAnimationDelay
			});

			var osTrigger = ( trigger ) ? trigger : osElement;
				
			osTrigger.waypoint(function() {
			  osElement.addClass('animated').addClass(osAnimationClass);
			  },{
				  triggerOnce: true,
				  offset: '90%'
			});
		});
	}
	//Remove animations
	function removeAnimations()  {
		osanimation.each(function(i){
			var $this = $(this);
			$this.removeClass('animated');
		});  
	}
	//Vertical centering ie9
	function verticalCenterIe9()  {
		var specialLineH = specialLine.height();
		var marginTopCalc = specialLineH/2-18;
		var windowW = win.width();
		if ( $.browser.version == 9.0 ) {
			if(windowW>974){
				if (windowW<1200){
					specialInner.css("margin-top", marginTopCalc);
				}
				else{
					specialInner.css("margin-top", "0");
				}
			}
			else{
				specialInner.css("margin-top", "0");
			}
		}
	}
	//Vertical centering ie10
	function verticalCenterIe10()  {	
		var specialLineH = specialLine.height();
		var marginTopCalc = specialLineH/2-48-6;
		var windowW = win.width();
		if ( $.browser.version == 10.0 ) {
			if(windowW>974){
				if (windowW<1200){
					specialInner.css("margin-top", marginTopCalc);
				}
				else{
					specialInner.css("margin-top", "0");
				}
			}
			else{
				specialInner.css("margin-top", "0");
			}
		}
	}
	//Vertical centering ie9 & ie10
	function verticalCenter404Ie9()  {
		var contentInnerH = contentInner.height();
		var contentInnerHB = contentInnerH+108;
		var windowH = win.height();
		var marginTopCalc = (windowH-108-contentInnerH)/2-6;
		if (( $.browser.version == 9.0 ) || ( $.browser.version == 10.0 )){		
			
			if (windowH>(contentInnerHB)){
				contentOuter.css("margin", "0 auto");
				contentInner.css("margin-top", marginTopCalc);
				contentOuter.css("display", "table");
		
			}
			else{
				contentOuter.css("margin", "0 auto");
				contentInner.css("margin-top", "18px");
				contentInner.css("margin-bottom", "36px");
				contentOuter.css("display", "table");
			}			
		}
	}	
	//Execute
	//Responsive menu
	collapsing(); 
	if(win.width()<767){
		navbarCollapse.removeClass("in").addClass("collapse");
	}		
	//Menu click
	var navbarlist = $('.navbar-collapse ul');
	navbarlist.on( "click", "a", function( e ) {
		var drop = $(this);
		if(win.width()<768){
			if(!drop.parent('li').hasClass('dropdown')){
				navbarCollapse.removeClass("in");
				navbarCollapse.addClass("collapse");
			}
		}
	});		
	//Border on/off
	bordering();		
	//Native android class
	var nua = navigator.userAgent;
	var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 &&     nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
	if(is_android) {
		body.addClass("nativeAndroid");
	}		
	//Display navigation on small landscape
	smallLandNav();	
	// Owl slider 
	var owlCar = $('.owl-carousel');
	owlCar.owlCarousel({
		loop:true,
		dots:true,
		autoplay:true,
		autoHeight : true,
		autoplayTimeout:3000,
		items:1,
	});
	var owlLogo = $('.logo-carousel');
	owlLogo.owlCarousel({
		loop:true,
		dots:false,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			544:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:5
			}
		}
	});
	// Owl fix height on resize
	owlCar.on('resized.owl.carousel', function (event) {
		var owlH = $(this);
		var owlFindH = owlH.find('.owl-height');
		var owlFindActiveH = owlH.find('.owl-item.active').height();
		owlFindH.css('height', owlFindActiveH);
	});
	// Counter 
	var counter = $('.counter');
	counter.counterUp({
		delay: 40,
		time: 2000
	});		
	//Tooltips
	
	var tips = $('.tips');
	$(function() {
		tips.tooltip();
	});		
	//Magnific popup
	var imagelink = $('.image-link');
	imagelink.magnificPopup({
		type: 'image',
		retina: {
			ratio: 2 // can also be function that should retun this number
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});	
	//Add class ie9
	/*if ( $.browser.version == 9.0 ) {
		body.addClass('ie9');		
	}
	//Add class ie10
	if ( $.browser.version == 10.0 ) {
		body.addClass('ie10');		
	}
	//Add class ie11
	if(navigator.userAgent.match(/Trident\/7\./)) {
		body.addClass('ie11');
	}*/
	if (document.documentMode || /Edge/.test(navigator.userAgent)) {
		body.addClass('ie');	
	}
	//Modernizr
		var placeH = $('[placeholder]');
		if (!Modernizr.placeholder) {
			placeH.on('focus', function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).on('blur', function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).trigger( "blur" );
			var $form = $('form')
			$form.on("submit", function(){				
				placeH.each(function() {
					var place = $(this);
					place.val(place.attr('placeholder'));
					
				});
			});		
		} 
	//Smooth scroll disabled in ie9 and ie10
	if (( $.browser.version == 9.0 ) || ( $.browser.version == 10.0 )) {
		body.on("mousewheel", function () {
		   event.returnValue = false;
			var wd = event.wheelDelta;
			var csp = window.pageYOffset;
			window.scrollTo(0, csp - wd);
		});
	}
	//Smooth scroll disabled in ie11
	if(navigator.userAgent.match(/Trident\/7\./)) {
		body.on("mousewheel", function () {
			// remove default behavior
			event.preventDefault(); 
			//scroll without smoothing
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}


	win.on("load", function(){		
		//Isotope
		$container.isotope({
			layoutMode : 'fitRows',
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
		}); 
		var portfolioFilter = $('.portfolioFilter');	
		portfolioFilter.on('click', function(e){
			var portfolioFilterCur = $('.portfolioFilter .current');
			var target = $( e.target );
			if ( target.is( "a" ) ) {
				portfolioFilterCur.removeClass('current');
				target.addClass('current');	 
				var selector = target.attr('data-filter');
			}		
			$container.isotope({
				filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
			});
			setTimeout(function() {
				scrollref();
			}, 2000); 
			return false;	
		});			
		//Vertical centering ie9
		verticalCenterIe9();
		verticalCenterIe10();
		verticalCenter404Ie9();		
		//Calcualting products
		calculateProduct();
		$container.isotope('reLayout');		
		// Slider border 
		setTimeout(function() {
			calculateHeaderBorder();
		}, 300); 			
		// Fixing header 
		var stickyEl =  $('.sticky-element');
		win.on("scroll",function() {
			if (win.scrollTop() > 0) {
				stickyEl.addClass('fixed');
			} else {
				stickyEl.removeClass('fixed');
			}
		});		
		// Trigger animations 
		onScrollInit( osanimation );
		onScrollInit( stageredAnim, stageredAnimC);
	});

	win.on('resize', function() {	
		//Responsive menu
		collapsing();		
		//Border on/off
		bordering();		
		//Calcualting products
		$container.isotope('reLayout');	
		calculateProduct(); 
		setTimeout(function() {
			$.waypoints('refresh');
		}, 1000); 
		//Calculate header
		calculateHeaderBorder();		
		//Scroll btn add/remove
		if(win.height()<767){
			scrollDown.css("display", "none");
		}
		else{
			scrollDown.css("display", "block");
		}	
		
		//Display navigation on small landscape
		smallLandNav();	
		//Vertical centering ie9
		verticalCenterIe9();
		verticalCenterIe10();
		verticalCenter404Ie9();
	});
	
	win.on('beforeunload', function(){	
		//Preloader
		var preloader = $('#preloader');
		preloader.css( "display","block");	
		//Scroll to top
		$('html, body').animate({
			scrollTop: 0
		}, 0);			
		//Remove animations
		removeAnimations();
	});
})(jQuery);