jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
}

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(500, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(500, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
}


/* ==================================================
   Slider Options
================================================== */

//BRUSHED.slider = function(){
//	$.supersized({
//		// Functionality
//		slideshow               :   1,			// Slideshow on/off
//		autoplay				:	1,			// Slideshow starts playing automatically
//		start_slide             :   1,			// Start slide (0 is random)
//		stop_loop				:	0,			// Pauses slideshow on last slide
//		random					: 	0,			// Randomize slide order (Ignores start slide)
//		slide_interval          :   12000,		// Length between transitions
//		transition              :   7, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
//		transition_speed		:	300,		// Speed of transition
//		new_window				:	1,			// Image links open in new window/tab
//		pause_hover             :   0,			// Pause slideshow on hover
//		keyboard_nav            :   1,			// Keyboard navigation on/off
//		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
//		image_protect			:	1,			// Disables image dragging and right click with Javascript
//												   
//		// Size & Position						   
//		min_width		        :   0,			// Min width allowed (in pixels)
//		min_height		        :   0,			// Min height allowed (in pixels)
//		vertical_center         :   1,			// Vertically center background
//		horizontal_center       :   1,			// Horizontally center background
//		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
//		fit_portrait         	:   1,			// Portrait images will not exceed browser height
//		fit_landscape			:   0,			// Landscape images will not exceed browser width
//												   
//		// Components							
//		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
//		thumb_links				:	0,			// Individual thumb links for each slide
//		thumbnail_navigation    :   1,			// Thumbnail navigation
//		slides 					:  	[			// Slideshow Images
//											{image : '_include/img/slider-images/image01.jpg', title : '<div class="slide-content">Brushed</div>', thumb : '', url : ''},
//											{image : '_include/img/slider-images/image02.jpg', title : '<div class="slide-content">Brushed</div>', thumb : '', url : ''},
//											{image : '_include/img/slider-images/image03.jpg', title : '<div class="slide-content">Brushed</div>', thumb : '', url : ''},
//											{image : '_include/img/slider-images/image04.jpg', title : '<div class="slide-content">Brushed</div>', thumb : '', url : ''}  
//									],
//									
//		// Theme Options			   
//		progress_bar			:	0,			// Timer for each slide							
//		mouse_scrub				:	0
//		
//	});
//}


/* ==================================================
   layerSlider Options
================================================== */

    // Running the code when the document is ready
BRUSHED.layerSlider = function(){
      
    var layerSliderContainer = $('#layerslider');
    var slideOneTimeLine = new TimelineLite;
    var v = 3100;
    var idIconActive = 1; //default Bubble icon data 
    
        // Calling LayerSlider on the target element
        layerSliderContainer.layerSlider({
			responsive: true,
			//responsiveUnder: 100,
            //sublayerContainer : 940,
			//layersContainer: 100,
            pauseOnHover: false,

            hoverPrevNext: false,
            // Slider options goes here,
            // please check the 'List of slider options' section in the documentation
            autoStart: false,
            firstLayer: 1,
            skin: 'fullwidthdark',
            skinsPath: '_include/img/layerSlider/skins/',
            cbAnimStop : function(data) {
                //alert('The current slide is: ' + data['curLayerIndex']);
                if(data['curLayerIndex'] == 1){
                   //slideOneAnimation();
                    slideOneTimeLine.restart();
                    lightning();
                    rainGenerator();
                    changeHead();
                }
                
                if(data['curLayerIndex'] == 2){
                   
                    slideOneTimeLine.pause(0);
                    
                }
                
                if(data['curLayerIndex'] == 3){
 
                    slideOneTimeLine.pause(0);
                    
                }
            }
        });
    
 
        $('ul#menu-nav li').find("a").on("mouseenter", function() {
            changeBubbleIconOnNavRollover($(this))
        });
    
    
        function changeBubbleIconOnNavRollover(a) {

            var c = a[0].getAttribute("data-bubble-icon"),
                // current icon
                d = layerSliderContainer.find(".bubble img:nth-child(" + c + ")"),
                // former icon
                e = layerSliderContainer.find(".bubble img:nth-child(" + idIconActive + ")");
            
            // top 0% is showing
            return c == idIconActive ? !1 : (TweenLite.to(d, .3, {
                top: "0%",
                ease: Expo.easeOut
            }), TweenLite.to(e, .3, {
                top: "100%",
                ease: Expo.easeOut,
                onComplete: function() {
                    e[0].style.top = "-100%"
                }
            }), void(idIconActive = c))
        }

    
    
    
    // greensock - layerslider elements - slide 1
     
            TweenMax.fromTo(layerSliderContainer.find("#cloud1"), 1, {
                        top: 31
                    }, {
                        top: 21,
                        ease: Quad.easeInOut,
                        yoyo: !0,
                        repeat: -1
                    }), 
            TweenMax.fromTo(layerSliderContainer.find("#cloud2"), 1, {
                        top: 157
                    }, {
                        top: 147,
                        ease: Quad.easeInOut,
                        yoyo: !0,
                        repeat: -1,
                        delay: .3
                    }), 
            TweenMax.fromTo(layerSliderContainer.find("#cloud3"), 1, {
                        top: 47
                    }, {
                        top: 37,
                        ease: Quad.easeInOut,
                        yoyo: !0,
                        repeat: -1,
                        delay: .6
                    });

            
                    
            slideOneTimeLine.fromTo(layerSliderContainer.find("#mountain1"), .5, {
                        top: 403,
                        opacity: 0,
                        scaleX: 0,
                        rotation: -15
                    }, {
                        top: 203,
                        opacity: 1,
                        scaleX: 1,
                        rotation: 0,
                        ease: Back.easeOut
                    }, "+=1").fromTo(layerSliderContainer.find("#mountain3"), .5, {
                        top: 430,
                        opacity: 0,
                        scaleX: 0,
                        rotation: 15
                    }, {
                        top: 230,
                        opacity: 1,
                        scaleX: 1,
                        rotation: 0,
                        ease: Back.easeOut
                    }, "-=0.3").fromTo(layerSliderContainer.find("#mountain2"), .5, {
                        top: 223,
                        opacity: 0,
                        scaleX: 0,
                        rotation: 25
                    }, {
                        top: 37,
                        opacity: 1,
                        scaleX: 1,
                        rotation: 0,
                        ease: Back.easeOut
                    }, "-=0.3").fromTo(layerSliderContainer.find(".shadow1"), 1, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=1").fromTo(layerSliderContainer.find(".shadow2"), 1, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=0.5").fromTo(layerSliderContainer.find(".mountain4"), .5, {
                        top: 651,
                        scaleX: 0,
                        rotation: -15,
                        opacity: 0
                    }, {
                        top: 451,
                        scaleX: 1,
                        rotation: 0,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.8").fromTo(layerSliderContainer.find(".mountain6"), .5, {
                        top: 631,
                        scaleX: 0,
                        rotation: 15,
                        opacity: 0
                    }, {
                        top: 431,
                        scaleX: 1,
                        rotation: 0,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.6").fromTo(layerSliderContainer.find(".mountain5"), .5, {
                        top: 597,
                        scaleX: 0,
                        rotation: 15,
                        opacity: 0
                    }, {
                        top: 397,
                        scaleX: 1,
                        rotation: 0,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.4").fromTo(layerSliderContainer.find(".branch_shadow"), .5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=0.5").fromTo(layerSliderContainer.find(".branch"), .5, {
                        width: 203,
                        height: 0
                    }, {
                        width: 203,
                        height: 150,
                        ease: Back.easeOut
                    }, "-=0.3").fromTo(layerSliderContainer.find(".body"), .3, {
                   
                        top: 311,
                        opacity: 0,
                        rotation: 15
                    }, {
                      
                        top: 350,
                        opacity: 1,
                        rotation: 0,
                        ease: Quad.easeOut
                    }).fromTo(layerSliderContainer.find("#head"), .3, {
                        
                        top: 121,
                        opacity: 0,
                        rotation: 15
                    }, {
                        top: 260,
                        opacity: 1,
                        rotation: 0,
                        ease: Quad.easeOut
                    }, "-=0.3").fromTo(layerSliderContainer.find(".blackDiamond"), .5, {
                        scale: 0,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.1").fromTo(layerSliderContainer.find(".logo"), .5, {
                        top: -200,
                        opacity: 0
                    }, {
                        top: 100,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.3").fromTo(layerSliderContainer.find("h2"), .5, {
                        top: 200,
                        opacity: 0
                    }, {
                        top: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, "-=0.5").fromTo(layerSliderContainer.find("h2 span"), .5, {
                        top: 200,
                        opacity: 0
                    }, {
                        top: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, "-=0.4").fromTo(layerSliderContainer.find("h3"), .5, {
                        top: 200,
                        opacity: 0
                    }, {
                        top: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, "-=0.4").fromTo(layerSliderContainer.find("a"), .5, {
                        top: 200,
                        opacity: 0
                    }, {
                        top: 0,
                        opacity: 1,
                        ease: Expo.easeOut
                    }, "-=0.4").fromTo(layerSliderContainer.find(".bubble"), .3, {
                        scale: 0,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: Back.easeOut
                    }, "-=0.1").fromTo(layerSliderContainer.find(".plume1"), 1.5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=1.5").fromTo(layerSliderContainer.find(".plume3"), 1.5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=1").fromTo(layerSliderContainer.find(".plume2"), 1.5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Quad.easeOut
                    }, "-=1");
                    var c = new TimelineLite;
                    c.fromTo(layerSliderContainer.find(".plume4"), 1.5, {
                        left: 232,
                        top: 395,
                        rotation: -10,
                        opacity: 0
                    }, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 232,
                                top: 395,
                                rotation: -10,
                                opacity: 0
                            }, {
                                left: 302,
                                top: 445,
                                rotation: 0,
                                opacity: .4
                            }, {
                                left: 332,
                                top: 440,
                                rotation: 5,
                                opacity: 1
                            }, {
                                left: 372,
                                top: 435,
                                rotation: 10,
                                opacity: 1
                            }]
                        },
                        ease: Quad.easeInOut,
                        delay: 3.5
                    }), c.to(layerSliderContainer.find(".plume4"), 1.5, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 372,
                                top: 435,
                                rotation: 10
                            }, {
                                left: 322,
                                top: 475,
                                rotation: 0
                            }, {
                                left: 282,
                                top: 470,
                                rotation: -5
                            }, {
                                left: 272,
                                top: 465,
                                rotation: -10
                            }]
                        },
                        ease: Quad.easeInOut
                    }), c.to(layerSliderContainer.find(".plume4"), 1.5, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 272,
                                top: 465,
                                rotation: -10
                            }, {
                                left: 300,
                                top: 480,
                                rotation: -5
                            }, {
                                left: 307,
                                top: 485,
                                rotation: -2
                            }, {
                                left: 312,
                                top: 485,
                                rotation: 0
                            }]
                        },
                        ease: Quad.easeInOut
                    });
                    var d = new TimelineLite;
                    d.fromTo(layerSliderContainer.find(".plume5"), 1.5, {
                        left: 350,
                        top: 284,
                        rotation: 10,
                        opacity: 0
                    }, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 350,
                                top: 384,
                                rotation: 10,
                                opacity: 0
                            }, {
                                left: 280,
                                top: 434,
                                rotation: 0,
                                opacity: .4
                            }, {
                                left: 250,
                                top: 429,
                                rotation: -5,
                                opacity: 1
                            }, {
                                left: 210,
                                top: 424,
                                rotation: -10,
                                opacity: 1
                            }]
                        },
                        ease: Quad.easeInOut,
                        delay: 5.8
                    }), d.to(layerSliderContainer.find(".plume5"), 1.5, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 210,
                                top: 424,
                                rotation: -10
                            }, {
                                left: 260,
                                top: 464,
                                rotation: 0
                            }, {
                                left: 300,
                                top: 459,
                                rotation: 5
                            }, {
                                left: 310,
                                top: 454,
                                rotation: 10
                            }]
                        },
                        ease: Quad.easeInOut
                    }), d.to(layerSliderContainer.find(".plume5"), 1.5, {
                        bezier: {
                            type: "cubic",
                            values: [{
                                left: 310,
                                top: 454,
                                rotation: 10
                            }, {
                                left: 280,
                                top: 469,
                                rotation: 5
                            }, {
                                left: 275,
                                top: 474,
                                rotation: 2
                            }, {
                                left: 270,
                                top: 474,
                                rotation: 0
                            }]
                        },
                        ease: Quad.easeInOut
                    });
        
            
        
            function lightning() {
                var flash = layerSliderContainer.find("#flash1");
                TweenLite.fromTo(flash, .5, {

                    top: 100,
                    opacity: 1
                }, {

                    top: 130,
                    opacity: 0,
                    ease: Expo.easeOut
                }), TweenLite.fromTo(flash, .5, {

                    top: 100,
                    opacity: 1
                }, {

                    top: 130,
                    opacity: 0,
                    ease: Expo.easeOut,
                    delay: .6
                }), TweenLite.fromTo(flash, .5, {

                    top: 100,
                    opacity: 1
                }, {

                    top: 130,
                    opacity: 0,
                    ease: Expo.easeOut,
                    delay: 1,
                    onComplete: function() {
                        var b = 1e3 + Math.round(3e3 * Math.random());
                        setTimeout(function() {
                            lightning();
                        }, b)
                    }
                })
            }
    

    
    //genererGoutte
        function rainGenerator() {
             //var v = 100 * Math.random();
                var b = (Math.round(1 * Math.random()) + 1, Math.floor(222 * Math.random()) + 50),
                    c = (Math.floor(171 * b / 272), v / 800),
                    d = $("<img>");

            d[0].className = "rain";
            var e = 1 + parseInt(4 * Math.random());
            //stop when window out of focus
            if(!window.blurred){ 
                d[0].src = "_include/img/layerSlider/raindrop_" + e + ".png", layerSliderContainer.find('#rain').append(d);
            }
            var f = (v - 540) / 2;
            
            d[0].style.top = -f - 50 + "px", d[0].style.left = 100 * Math.random() + "%", TweenLite.to(d, c, {
                top: v,
                ease: Linear.easeIn,
                onComplete: function() {
                    d.remove()
                }
            });
            
            var g = Math.round(1e3 * Math.random()) + Math.round(v / 400 * 200);
            var interval_id;
            
           
            if(!interval_id){
                myFunction();
            }
            
              function myFunction() {
                
                interval_id = setTimeout(function() {
                    if(!window.blurred){
                        clearTimeout(interval_id);
                    }
                    rainGenerator()
                    
                    
                }, g);
            }
            
     // stop rain when window not active        
    window.onblur = function() { window.blurred = true; };
    window.onfocus = function() { window.blurred = false; };
           
}
    

         function changeHead() {
           
                var aniX = null;
                var aniy = null;
                var head = $("#head");
                $(document).ready(function(){
                    aniX = $("#head").offset().left;
                    aniY = $("#head").offset().top;
                    
                    $(document).mousedown(function(event){
                        var mousePos = new Array(event.pageX, event.pageY);
                        interact(mousePos, ["-900px", "-1200px", "-1500px"]);
                    });
                    $(document).mouseup(function(event){
                        var mousePos = new Array(event.pageX, event.pageY);
                        interact(mousePos, ["-1px", "-300px", "-600px"]);
                    });
                    $(document).mousemove(function(event) {
                        var mousePos = new Array(event.pageX, event.pageY);
                        interact(mousePos, ["-1px", "-300px", "-600px"]);
                    });
                });

                function interact(mouseCord, aniCord){
                    if (mouseCord[0] < aniX-600 && mouseCord[1] < aniY){ // Box-1
//                        console.log(mouseCord[0]);
//                        console.log(aniX-600);
                        head.css("background-position", aniCord[0]+" 0px");
                    } else if (mouseCord[0] > aniX-600 && mouseCord[0] < aniX+300 && mouseCord[1] < aniY){ // Box-2
                        head.css("background-position", aniCord[1]+" 0px");
                    } else if (mouseCord[0] > aniX+300 && mouseCord[1] < aniY){ // Box-3
                        head.css("background-position", aniCord[2]+" 0px");
                    } else if (mouseCord[0] < aniX-600 && mouseCord[1] > aniY && mouseCord[1] < aniY+300){ // Box-4
                        head.css("background-position", aniCord[0]+" -300px");
                    } else if (mouseCord[0] > aniX-300 && mouseCord[0] < aniX+300 && mouseCord[1] > aniY && mouseCord[1] < aniY+300){ // Box-5
                        head.css("background-position", aniCord[1]+" -300px");
                    }else if (mouseCord[0] > aniX+300 && mouseCord[1] > aniY && mouseCord[1] < aniY+300){ // Box-6
                        head.css("background-position", aniCord[2]+" -300px");
                    } else if (mouseCord[0] < aniX-600 && mouseCord[1] > aniY+300){ // Box-7
                        head.css("background-position", aniCord[0]+" -300px");
                    } else if (mouseCord[0] > aniX-600 && mouseCord[0] < aniX+300 && mouseCord[1] > aniY+300){ // Box-8
                        head.css("background-position", aniCord[1]+" -300px");
                    } else if (mouseCord[0] > aniX+300 && mouseCord[1] > aniY+300){ // Box-9
                        head.css("background-position", aniCord[2]+" -300px");
                    }
                }
        }

}


/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
	$('.sticky-nav').waypoint('sticky');
}


/* ==================================================
   Filter Works
================================================== */

BRUSHED.filter = function (){
	if($('#projects').length > 0){		
		var $container = $('#projects');
		
		$container.imagesLoaded(function() {
			$container.isotope({
			  // options
			  animationEngine: 'best-available',
			  itemSelector : '.item-thumbs',
			  layoutMode : 'fitRows'
			});
		});
	
		
		// filter items when filter link is clicked
		var $optionSets = $('#options .option-set'),
			$optionLinks = $optionSets.find('a');
	
		  $optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	  
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			  // changes in layout modes need extra logic
			  changeLayoutMode( $this, options )
			} else {
			  // otherwise, apply new options
			  $container.isotope( options );
			}
			
			return false;
		});
	}
}


/* ==================================================
   FancyBox
================================================== */

BRUSHED.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0 || $('.fancybox-iframe').length > 0){
		
		$(".fancybox").fancybox({				
				padding : 0,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
        
        $(".fancybox-iframe")
        .attr('rel', 'gallery')
        .fancybox({
                padding : 0,
                preload   : true,
                maxWidth	: 658,
                maxHeight	: 390,
                fitToView	: true,
                width		: '100%',
                height		: '100%',
                autoSize	: false,
                closeClick	: false,
                openEffect	: 'none',
                closeEffect	: 'none',
                beforeShow: function(){ // fix arrows left right (https://github.com/fancyapps/fancyBox/issues/550)
                    $(window).on({
                      'resize.fancybox' : function(){
                        $.fancybox.update();
                      }
                    });
                },
                afterClose: function(){
                    $(window).off('resize.fancybox');
                  },
                iframe : {
                    scrolling : 'no'
                }
	       });
	}
}




/* ==================================================
   Contact Form
================================================== */

BRUSHED.contactForm = function(){
	$("#contact-submit").on('click',function() {
		$contact_form = $('#contact-form');
		
		var fields = $contact_form.serialize();
		
		$.ajax({
			type: "POST",
			url: "_include/php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});
		return false;
	});
}


/* ==================================================
   Twitter Feed
================================================== */

BRUSHED.tweetFeed = function(){
	
	var valueTop = -64; // Margin Top Value
	
    $("#ticker").tweet({
          modpath: '_include/js/twitter/',
          username: "Bluxart", // Change this with YOUR ID
          page: 1,
          avatar_size: 0,
          count: 10,
		  template: "{text}{time}",
		  filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
          loading_text: "loading ..."
	}).bind("loaded", function() {
	  var ul = $(this).find(".tweet_list");
	  var ticker = function() {
		setTimeout(function() {
			ul.find('li:first').animate( {marginTop: valueTop + 'px'}, 500, 'linear', function() {
				$(this).detach().appendTo(ul).removeAttr('style');
			});	
		  ticker();
		}, 5000);
	  };
	  ticker();
	});
	
}


/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu-nav, #menu-nav-mobile').onePageNav({
		currentClass: 'current',
    	changeHash: false,
    	scrollSpeed: 750,
    	scrollOffset: 30,
    	scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
}

/* ==================================================
   Next Section
================================================== */

BRUSHED.goSection = function(){
	$('#nextsection').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}

/* ==================================================
   GoUp
================================================== */

BRUSHED.goUp = function(){
	$('#goUp').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}


/* ==================================================
	Scroll to Top
================================================== */

BRUSHED.scrollToTop = function(){
	var windowWidth = $(window).width(),
		didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	})

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 1000 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
}

/* ==================================================
   Thumbs / Social Effects
================================================== */

BRUSHED.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('#social ul li').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
}

/* ==================================================
   Accordion
================================================== */

BRUSHED.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	accordion_trigger.find('.active').addClass('inactive');          
		  	accordion_trigger.find('.active').removeClass('active');   
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}

/* ==================================================
   Toggle
================================================== */

BRUSHED.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
}

/* ==================================================
   Tooltip
================================================== */

BRUSHED.toolTip = function(){ 
    $('a[data-toggle=tooltip]').tooltip();
}


/* ==================================================
	Init
================================================== */

//BRUSHED.slider();
BRUSHED.layerSlider();

$(document).ready(function(){
	Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: '_include/js/placeholder.js', 
		complete : function() {
				if (!Modernizr.placeholder) {
						Placeholders.init({
						live: true,
						hideOnFocus: false,
						className: "yourClass",
						textColor: "#999"
						});    
				}
		}
	}
	]);
	
	// Preload the page with jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
        }
	});
	
	BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	BRUSHED.goSection();
	BRUSHED.goUp();
	BRUSHED.filter();
	BRUSHED.fancyBox();
	BRUSHED.contactForm();
	BRUSHED.tweetFeed();
	BRUSHED.scrollToTop();
	BRUSHED.utils();
	BRUSHED.accordion();
	BRUSHED.toggle();
	BRUSHED.toolTip();
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

});
