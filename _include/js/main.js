jQuery(function($) {

    var AK = window.AK || {};

    /* ==================================================
   Mobile Navigation
================================================== */
    var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');
    var windowHeight = $(window).height();
    var TOP_DISTANCE = windowHeight / 5;

    AK.mobileNav = function() {
        var windowWidth = $(window).width();

        TOP_DISTANCE = windowHeight / 5;
        //    
        //    
        //  $("#layerslider .ls-l").each(function( index, el ) {
        //  
        //     var elWidth = $(this).width();
        //     var elHeight = $(this).height();
        //      
        //      
        //      //$(this).width(windowWidth/elWidth);
        //
        //  });
        //    
        //    
        ////    $("#layerslider .ls-l").height(windowHeight).width(windowWidth);



        if (windowWidth <= 979) {
            if ($('#mobile-nav').length > 0) {
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

    AK.listenerMenu = function() {
        $('#mobile-nav').on('click', function(e) {
            $(this).toggleClass('open');

            if ($('#mobile-nav').hasClass('open')) {
                $('#navigation-mobile').slideDown(500, 'easeOutExpo');
            } else {
                $('#navigation-mobile').slideUp(500, 'easeOutExpo');
            }
            e.preventDefault();
        });

        $('#menu-nav-mobile a').on('click', function() {
            $('#mobile-nav').removeClass('open');
            $('#navigation-mobile').slideUp(350, 'easeOutExpo');
        });
    }


    /* ==================================================
   Slider Options
================================================== */

    //AK.slider = function(){
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
    //											{image : '_include/img/slider-images/image01.jpg', title : '<div class="slide-content">AK</div>', thumb : '', url : ''},
    //											{image : '_include/img/slider-images/image02.jpg', title : '<div class="slide-content">AK</div>', thumb : '', url : ''},
    //											{image : '_include/img/slider-images/image03.jpg', title : '<div class="slide-content">AK</div>', thumb : '', url : ''},
    //											{image : '_include/img/slider-images/image04.jpg', title : '<div class="slide-content">AK</div>', thumb : '', url : ''}  
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
    AK.layerSlider = function() {

        var layerSliderContainer = $('#layerslider');
        var slideOne = layerSliderContainer.find('#slide-1');
        var slideTwo = layerSliderContainer.find('#slide-2');
        var slideOneTimeLine = new TimelineLite;
        var slideTwoTimeLine = new TimelineLite;
        var v = 3100;
        var idIconActive = 1; //default Bubble icon data


        var MARGIN_DISTANCE = 0;


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
            firstLayer: 2,
            navButtons: true,
            navPrevNext: true,
            navStartStop: false,
            skin: 'fullwidthdark',
            skinsPath: '_include/img/layerSlider/skins/',
            cbAnimStop: function(data) {
                //alert('The current slide is: ' + data['curLayerIndex']);
                if (data['curLayerIndex'] == 1) {
                    //slideOneAnimation();
                    slideOneTimeLine.restart();
                    lightning();
                    rainGenerator();
                    changeHead();
                    slideTwoTimeLine.pause(0);
                }

                if (data['curLayerIndex'] == 2) {
                    slideTwoTimeLine.restart();
                    slideOneTimeLine.pause(0);

                }

                if (data['curLayerIndex'] == 3) {

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
                d = slideOne.find(".bubble img:nth-child(" + c + ")"),
                // former icon
                e = slideOne.find(".bubble img:nth-child(" + idIconActive + ")");

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

        TweenMax.fromTo(slideOne.find("#cloud1"), 1, {
            top: TOP_DISTANCE - 30
        }, {
            top: TOP_DISTANCE - 40,
            ease: Quad.easeInOut,
            yoyo: !0,
            repeat: -1
        }),
        TweenMax.fromTo(slideOne.find("#cloud2"), 1, {
            top: TOP_DISTANCE - 80
        }, {
            top: TOP_DISTANCE - 70,
            ease: Quad.easeInOut,
            yoyo: !0,
            repeat: -1,
            delay: .3
        }),
        TweenMax.fromTo(slideOne.find("#cloud3"), 1, {
            top: TOP_DISTANCE - 73
        }, {
            top: TOP_DISTANCE - 83,
            ease: Quad.easeInOut,
            yoyo: !0,
            repeat: -1,
            delay: .6
        });



        slideOneTimeLine.fromTo(slideOne.find("#mountain1"), .5, {
            top: TOP_DISTANCE + 183,
            opacity: 0,
            scaleX: 0,
            rotation: -15
        }, {
            top: TOP_DISTANCE - 17,
            opacity: 1,
            scaleX: 1,
            rotation: 0,
            ease: Back.easeOut
        }, "+=1").fromTo(slideOne.find("#mountain3"), .5, {
            top: TOP_DISTANCE + 110,
            opacity: 0,
            scaleX: 0,
            rotation: 15
        }, {
            top: TOP_DISTANCE + 10,
            opacity: 1,
            scaleX: 1,
            rotation: 0,
            ease: Back.easeOut
        }, "-=0.3").fromTo(slideOne.find("#mountain2"), .5, {
            top: TOP_DISTANCE - 100,
            opacity: 0,
            scaleX: 0,
            rotation: 25
        }, {
            top: TOP_DISTANCE - 106,
            opacity: 1,
            scaleX: 1,
            rotation: 0,
            ease: Back.easeOut
        }, "-=0.3")


        .fromTo(slideOne.find(".hex_blue"), .5, {
            top: TOP_DISTANCE,
            scale: 0,
            opacity: 0,
            rotation: 0
        }, {
            scale: 1,
            opacity: 1,
            rotation: 360,
            ease: Back.easeOut
        }, "-=0.1")
            .fromTo(slideOne.find(".hex_pink"), .5, {
                top: TOP_DISTANCE,
                scale: 0,
                opacity: 0,
                rotation: 0
            }, {
                scale: 1,
                opacity: 1,
                rotation: -360,
                ease: Back.easeOut
            }, "-=0.2")
            .fromTo(slideOne.find(".hex_purple"), .5, {
                top: TOP_DISTANCE,
                scale: 0,
                opacity: 0,
                rotation: 0
            }, {
                scale: 1,
                opacity: 1,
                rotation: -360,
                ease: Back.easeOut
            }, "-=0.3")


        .fromTo(slideOne.find("#logoSprite"), .6, {

            top: TOP_DISTANCE - 100,
            opacity: 0,
            rotation: 15
        }, {
            marginLeft: MARGIN_DISTANCE - 30,
            top: TOP_DISTANCE + 200,
            opacity: 1,
            rotation: 0,
            ease: Quad.easeOut
        }, "-=0.3")

        .fromTo(slideOne.find(".shadow"), 0.3, {
            marginLeft: MARGIN_DISTANCE - 30,
            top: TOP_DISTANCE + 420,
            scale: 0,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 343,
            scale: 1,
            opacity: 1,
            ease: Quad.easeOut
        }, "-=1")
            .fromTo(slideOne.find("#tag_forward_slash"), .5, {
                top: TOP_DISTANCE + 208,
                marginLeft: MARGIN_DISTANCE,
                opacity: 0,
                rotation: 15

            }, {

                marginLeft: MARGIN_DISTANCE + 137,
                opacity: 1,
                rotation: 0,
                ease: Bounce.easeOut,
                y: 0
            })

        .add("tagLabel", "-=0.5")

        .fromTo(slideOne.find("#tag_left"), .5, {
            top: TOP_DISTANCE + 208,
            marginLeft: MARGIN_DISTANCE,
            opacity: 0,
            rotation: 15

        }, {

            marginLeft: MARGIN_DISTANCE - 205,
            opacity: 1,
            rotation: 0,
            ease: Bounce.easeOut,
            y: 0
        }, "tagLabel")
            .fromTo(slideOne.find("#tag_right"), .5, {
                top: TOP_DISTANCE + 208,
                marginLeft: MARGIN_DISTANCE,
                opacity: 0,
                rotation: 15

            }, {

                marginLeft: MARGIN_DISTANCE + 220,
                opacity: 1,
                rotation: 0,
                ease: Bounce.easeOut,
                y: 0
            }, "tagLabel")



        .add("bugLabel", "-=0.5")

        .fromTo(slideOne.find(".bugContainer"), 1.3, {
            marginLeft: MARGIN_DISTANCE + 300,
            top: 0,
            opacity: 0,
            rotation: 15,



        }, {
            marginLeft: MARGIN_DISTANCE + 90,
            top: TOP_DISTANCE + 95,
            opacity: 1,
            rotation: 0,

            ease: Sine.easeOut,
            y: 0

        }, "bugLabel")

        .fromTo(slideOne.find(".wing_left"), 0.03, {
            top: -45,
            marginLeft: MARGIN_DISTANCE - 75,
            rotation: 30,
            transformOrigin: "200px 120px"
        }, {
            yoyo: !0,
            repeat: 60,
            rotation: 0,
            ease: Quad.easeOut

        }, "bugLabel")
            .fromTo(slideOne.find(".wing_right"), 0.03, {
                top: -45,
                marginLeft: MARGIN_DISTANCE + 90,
                rotation: -30,
                transformOrigin: "1px 200px"
            }, {
                yoyo: !0,
                repeat: 60,
                rotation: 0,
                ease: Quad.easeOut

            }, "bugLabel")
            .fromTo(slideOne.find(".bug"), 1.3, {
                top: 0,

            }, {

                ease: Quad.easeOut

            }, "bugLabel")


        .fromTo(slideOne.find(".mountain4"), .5, {
            marginLeft: MARGIN_DISTANCE - 100,
            top: TOP_DISTANCE + 665,
            scaleX: 0,
            rotation: -15,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 465,
            marginLeft: MARGIN_DISTANCE - 100,
            scaleX: 1,
            rotation: 0,
            opacity: 1,
            ease: Back.easeOut
        }, "-=0.8").fromTo(slideOne.find(".mountain6"), .5, {
            marginLeft: MARGIN_DISTANCE - 190,
            top: TOP_DISTANCE + 575,
            scaleX: 0,
            rotation: 15,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 455,
            marginLeft: MARGIN_DISTANCE - 190,
            scaleX: 1,
            rotation: 0,
            opacity: 1,
            ease: Back.easeOut
        }, "-=0.6").fromTo(slideOne.find(".mountain5"), .5, {
            marginLeft: MARGIN_DISTANCE - 150,
            top: TOP_DISTANCE + 630,
            scaleX: 0,
            rotation: 15,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 410,
            marginLeft: MARGIN_DISTANCE - 150,
            scaleX: 1,
            rotation: 0,
            opacity: 1,
            ease: Back.easeOut
        }, "-=0.4")




        .to(slideOne.find(".bug"), 0, {
            backgroundPosition: "-120px"
        }, "-=0.1")
            .to([slideOne.find(".wing_right"), slideOne.find(".wing_left")], 0, {
                display: "none"
            }, "-=0.1")

        .fromTo(slideOne.find("h2"), .5, {
            marginLeft: MARGIN_DISTANCE + 25,
            top: TOP_DISTANCE + 450,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 365,
            opacity: 1,
            ease: Expo.easeOut
        }, "-=0.5").fromTo(slideOne.find("h3"), .5, {
            marginLeft: MARGIN_DISTANCE + 25,
            top: TOP_DISTANCE + 410,
            opacity: 0
        }, {
            top: TOP_DISTANCE + 340,
            opacity: 1,
            ease: Expo.easeOut
        }, "-=0.4").fromTo(slideOne.find(".bubble"), .3, {
            top: TOP_DISTANCE + 85,
            marginLeft: MARGIN_DISTANCE + 190,
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            marginLeft: MARGIN_DISTANCE + 190,
            ease: Back.easeOut
        }, "-=0.1");


        slideOneTimeLine.eventCallback("onComplete", changeBird);

        function changeBird() {


            $('#logoSprite').delay(600).queue(function(next) {
                $(this).css({
                    'background-position': '-1400px 0px'
                });
                next();
            });






        }



        var c = new TimelineLite;
        c.fromTo(slideOne.find(".feather2"), 1.5, {
            marginLeft: MARGIN_DISTANCE + 72,
            top: TOP_DISTANCE + 335,
            rotation: -10,
            opacity: 0
        }, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 72,
                    top: TOP_DISTANCE + 335,
                    rotation: -10,
                    opacity: 0
                }, {
                    marginLeft: MARGIN_DISTANCE + 142,
                    top: TOP_DISTANCE + 295,
                    rotation: 0,
                    opacity: .4
                }, {
                    marginLeft: MARGIN_DISTANCE + 172,
                    top: TOP_DISTANCE + 390,
                    rotation: 5,
                    opacity: 1
                }, {
                    marginLeft: MARGIN_DISTANCE + 212,
                    top: TOP_DISTANCE + 385,
                    rotation: 10,
                    opacity: 1
                }]
            },
            ease: Quad.easeInOut,
            delay: 3.5
        }), c.to(slideOne.find(".feather2"), 1.5, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 212,
                    top: TOP_DISTANCE + 385,
                    rotation: 10
                }, {
                    marginLeft: MARGIN_DISTANCE + 162,
                    top: TOP_DISTANCE + 425,
                    rotation: 0
                }, {
                    marginLeft: MARGIN_DISTANCE + 122,
                    top: TOP_DISTANCE + 420,
                    rotation: -5
                }, {
                    marginLeft: MARGIN_DISTANCE + 112,
                    top: TOP_DISTANCE + 405,
                    rotation: -10
                }]
            },
            ease: Quad.easeInOut
        }), c.to(slideOne.find(".feather2"), 1.5, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 112,
                    top: TOP_DISTANCE + 405,
                    rotation: -10
                }, {
                    marginLeft: MARGIN_DISTANCE + 120,
                    top: TOP_DISTANCE + 420,
                    rotation: -5
                }, {
                    marginLeft: MARGIN_DISTANCE + 147,
                    top: TOP_DISTANCE + 425,
                    rotation: -2
                }, {
                    marginLeft: MARGIN_DISTANCE + 152,
                    top: TOP_DISTANCE + 425,
                    rotation: 0
                }]
            },
            ease: Quad.easeInOut
        });
        var d = new TimelineLite;
        d.fromTo(slideOne.find(".feather3"), 1.5, {
            marginLeft: 150,
            top: TOP_DISTANCE + 264,
            rotation: 10,
            opacity: 0
        }, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 150,
                    top: TOP_DISTANCE + 364,
                    rotation: 10,
                    opacity: 0
                }, {
                    marginLeft: MARGIN_DISTANCE + 80,
                    top: TOP_DISTANCE + 404,
                    rotation: 0,
                    opacity: .4
                }, {
                    marginLeft: MARGIN_DISTANCE + 50,
                    top: TOP_DISTANCE + 399,
                    rotation: -5,
                    opacity: 1
                }, {
                    marginLeft: MARGIN_DISTANCE + 10,
                    top: TOP_DISTANCE + 394,
                    rotation: -10,
                    opacity: 1
                }]
            },
            ease: Quad.easeInOut,
            delay: 5.8
        }), d.to(slideOne.find(".feather3"), 1.5, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 10,
                    top: TOP_DISTANCE + 394,
                    rotation: -10
                }, {
                    marginLeft: MARGIN_DISTANCE + 60,
                    top: TOP_DISTANCE + 424,
                    rotation: 0
                }, {
                    marginLeft: MARGIN_DISTANCE + 100,
                    top: TOP_DISTANCE + 429,
                    rotation: 5
                }, {
                    marginLeft: MARGIN_DISTANCE + 110,
                    top: TOP_DISTANCE + 424,
                    rotation: 10
                }]
            },
            ease: Quad.easeInOut
        }), d.to(slideOne.find(".feather3"), 1.5, {
            bezier: {
                type: "cubic",
                values: [{
                    marginLeft: MARGIN_DISTANCE + 110,
                    top: TOP_DISTANCE + 424,
                    rotation: 10
                }, {
                    marginLeft: MARGIN_DISTANCE + 80,
                    top: TOP_DISTANCE + 439,
                    rotation: 5
                }, {
                    marginLeft: MARGIN_DISTANCE + 75,
                    top: TOP_DISTANCE + 444,
                    rotation: 2
                }, {
                    marginLeft: MARGIN_DISTANCE + 50,
                    top: TOP_DISTANCE + 444,
                    rotation: 0
                }]
            },
            ease: Quad.easeInOut
        }).fromTo(slideOne.find(".feather1"), 1.5, {
            marginLeft: MARGIN_DISTANCE + 110,
            top: TOP_DISTANCE + 424,
            opacity: 0
        }, {
            marginLeft: MARGIN_DISTANCE + 110,
            top: TOP_DISTANCE + 424,
            opacity: 1,
            ease: Quad.easeOut
        }, "-=1");



        function lightning() {
            var flash = slideOne.find("#flash1");
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
            if (!window.blurred) {
                d[0].src = "_include/img/layerSlider/raindrop_" + e + ".png", slideOne.find('#rain').append(d);
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


            if (!interval_id) {
                myFunction();
            }

            function myFunction() {

                interval_id = setTimeout(function() {
                    if (!window.blurred) {
                        clearTimeout(interval_id);
                    }
                    rainGenerator()


                }, g);
            }

            // stop rain when window not active        
            window.onblur = function() {
                window.blurred = true;
            };
            window.onfocus = function() {
                window.blurred = false;
            };

        }


        function changeHead() {

            var aniX = null;
            var aniy = null;
            var sprite = $("#logoSprite");
            $(document).ready(function() {
                aniX = $("#logoSprite").offset().left;
                aniY = $("#logoSprite").offset().top;

                $(document).mousedown(function(event) {
                    var mousePos = new Array(event.pageX, event.pageY);
                    interact(mousePos, ["-840px", "-1120px", "-1400px"]);
                });
                //                    $(document).mouseup(function(event){
                //                        var mousePos = new Array(event.pageX, event.pageY);
                //                        interact(mousePos, ["-1px", "-300px", "-600px"]);
                //                    });
                $(document).mousemove(function(event) {
                    var mousePos = new Array(event.pageX, event.pageY);
                    interact(mousePos, ["0px", "-280px", "-560px"]);
                });
            });

            function interact(mouseCord, aniCord) {
                if (mouseCord[0] < aniX - 600 && mouseCord[1] < aniY) { // Box-1

                    sprite.css("background-position", aniCord[0] + " 0px");
                } else if (mouseCord[0] > aniX - 600 && mouseCord[0] < aniX + 300 && mouseCord[1] < aniY) { // Box-2
                    sprite.css("background-position", aniCord[1] + " 0px");
                } else if (mouseCord[0] > aniX + 300 && mouseCord[1] < aniY) { // Box-3
                    sprite.css("background-position", aniCord[2] + " 0px");
                } else if (mouseCord[0] < aniX - 600 && mouseCord[1] > aniY && mouseCord[1] < aniY + 300) { // Box-4
                    sprite.css("background-position", aniCord[0] + " -160px");
                } else if (mouseCord[0] > aniX - 300 && mouseCord[0] < aniX + 300 && mouseCord[1] > aniY && mouseCord[1] < aniY + 300) { // Box-5
                    sprite.css("background-position", aniCord[1] + " -160px");
                } else if (mouseCord[0] > aniX + 300 && mouseCord[1] > aniY && mouseCord[1] < aniY + 300) { // Box-6
                    sprite.css("background-position", aniCord[2] + " -160px");
                } else if (mouseCord[0] < aniX - 600 && mouseCord[1] > aniY + 300) { // Box-7
                    sprite.css("background-position", aniCord[0] + " -160px");
                } else if (mouseCord[0] > aniX - 600 && mouseCord[0] < aniX + 300 && mouseCord[1] > aniY + 300) { // Box-8
                    sprite.css("background-position", aniCord[1] + " -160px");
                } else if (mouseCord[0] > aniX + 300 && mouseCord[1] > aniY + 300) { // Box-9
                    sprite.css("background-position", aniCord[2] + " -160px");
                }
            }
        }

        /* ==================================================
   Slide Two
================================================== */





        slideTwoTimeLine.fromTo(slideTwo.find(".iconText"), .5, {
            opacity: 0,
        }, {
            opacity: 0,
        })


        .fromTo(slideTwo.find(".icon"), .5, {


            top: TOP_DISTANCE + 100,
            marginLeft: MARGIN_DISTANCE - 60,


        }, {


            top: TOP_DISTANCE + 100,
            marginLeft: MARGIN_DISTANCE - 60,

            ease: Expo.easeOut
        })

        .add("iconLabel", "-=0.5")

        .to(slideTwo.find(".icon1"), .5, {
            marginLeft: MARGIN_DISTANCE - 300
        }, "iconLabel")
            .to(slideTwo.find(".icon3"), .5, {
                marginLeft: MARGIN_DISTANCE + 200
            }, "iconLabel")







        $("#slide-2 .icon").hover(
            function() {
                hoverIconAnimation($(this).find("img:eq(0)"), $(this).find("img:eq(1)"));

            }, function() {
                hoverIconAnimation($(this).find("img:eq(1)"), $(this).find("img:eq(0)"));
            }
        );


        $("#slide-2 .icon").click(function() {
            clickIconAnimation($(this));
        });


        function hoverIconAnimation(iconImg1, iconImg2) {


            var d = new TimelineLite;
            d.fromTo(iconImg1, .5, {
                scale: 0.6,
                opacity: 1
            }, {
                scale: 1.5,
                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.5")
                .fromTo(iconImg2, .5, {
                    scale: 0,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: Expo.easeOut
                }, "-=0.5")
        }

        function clickIconAnimation(icon) {
            var f = new TimelineLite;

            f.fromTo(slideTwo.find(".iconText"), .5, {

                opacity: 0
            }, {

                opacity: 0,
                ease: Expo.easeOut
            }, "-=0.5")
                .fromTo(icon.next("p"), .5, {
                    top: TOP_DISTANCE + 600,
                    opacity: 0
                }, {
                    top: TOP_DISTANCE + 400,
                    opacity: 1,
                    ease: Expo.easeOut
                }, "-=0.5")

        }

    }


    /* ==================================================
   Navigation Fix
================================================== */

    AK.nav = function() {
        $('.sticky-nav').waypoint('sticky');
    }


    /* ==================================================
   Filter Works
================================================== */

    AK.filter = function() {
        if ($('#projects').length > 0) {
            var $container = $('#projects');

            $container.imagesLoaded(function() {
                $container.isotope({
                    // options
                    animationEngine: 'best-available',
                    itemSelector: '.item-thumbs',
                    layoutMode: 'fitRows'
                });
            });


            // filter items when filter link is clicked
            var $optionSets = $('#options .option-set'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function() {
                var $this = $(this);
                // don't proceed if already selected
                if ($this.hasClass('selected')) {
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
                options[key] = value;
                if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                    // changes in layout modes need extra logic
                    changeLayoutMode($this, options)
                } else {
                    // otherwise, apply new options
                    $container.isotope(options);
                }

                return false;
            });
        }
    }


    /* ==================================================
   FancyBox
================================================== */

    AK.fancyBox = function() {
        if ($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0 || $('.fancybox-iframe').length > 0) {
            
            $(".fancybox").fancybox({
                padding: 0,
                beforeShow: function() {
                    this.title = $(this.element).attr('title');
                    this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
                },
                helpers: {
                    title: {
                        type: 'inside'
                    },
                }
            });

            $('.fancybox-media').fancybox({
                openEffect: 'none',
                closeEffect: 'none',
                helpers: {
                    media: {}
                }
            });

            $(".fancybox-iframe")
                //.attr('rel', 'gallery')
                .fancybox({
       
                    padding: 0,
                    preload: true,
//                    maxWidth: 658,
//                    maxHeight: 390,
                    fitToView: true,
                    width: '100%',
                    height: '100%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'elastic',
                    closeEffect: 'none',
                    beforeShow: function() { // fix arrows left right (https://github.com/fancyapps/fancyBox/issues/550)
                        $(window).on({
                            'resize.fancybox': function() {
                                $.fancybox.update();
                            }
                        });
                    },
                    afterClose: function() {
                        $(window).off('resize.fancybox');
                    },
                    iframe: {
                        scrolling: 'no'
                    },
                    afterLoad: function(){
                       this.width = $(this.element).data("width");
                       this.height = $(this.element).data("height");
                       
                    },
                    onUpdate: function(){
                       
                        if($(this.element).parent().hasClass('hideNavButtons')){
                            //$(this.element).removeAttr('data-fancybox-group');
                            $('.fancybox-nav span').hide();
                        }    
                    
                    }
                    
                });
            
            $.fancybox.showNavButtons = function(){
                $(".fancybox-nav span").show(1000);
            }
            

            

            

//$(".fancybox-iframe").attr('rel', 'gallery');

//  $(".fancybox-iframe").each(function() {
//    if($(this).parent().hasClass('three_d')){
//        // for end of quiz add this attr somehow?
//        $(this).attr('data-fancybox-group','3d');
//        
//        
//        
//        
//        
//        
//        var that = $(this);
//        setTimeout(function(){
//            //console.log(that);
//            //that.removeAttr('data-fancybox-group');
//        }, 3000);
//        
//        setTimeout(function(){
//            //console.log(that);
//           
//            //$(".fancybox-nav").hide();
//            //that.attr('data-fancybox-group','3d');
//        }, 6000);
//    }
//  });  


        }
    }




    /* ==================================================
   Contact Form
================================================== */

    AK.contactForm = function() {
        $("#contact-submit").on('click', function() {
            $contact_form = $('#contact-form');

            var fields = $contact_form.serialize();

            $.ajax({
                type: "POST",
                url: "_include/php/contact.php",
                data: fields,
                dataType: 'json',
                success: function(response) {

                    if (response.status) {
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

    AK.tweetFeed = function() {

        var valueTop = -64; // Margin Top Value

        $("#ticker").tweet({
            modpath: '_include/js/twitter/',
            username: "Bluxart", // Change this with YOUR ID
            page: 1,
            avatar_size: 0,
            count: 10,
            template: "{text}{time}",
            filter: function(t) {
                return !/^@\w+/.test(t.tweet_raw_text);
            },
            loading_text: "loading ..."
        }).bind("loaded", function() {
            var ul = $(this).find(".tweet_list");
            var ticker = function() {
                setTimeout(function() {
                    ul.find('li:first').animate({
                        marginTop: valueTop + 'px'
                    }, 500, 'linear', function() {
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

    AK.menu = function() {
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

    AK.goSection = function() {
        $('#nextsection').on('click', function() {
            $target = $($(this).attr('href')).offset().top - 30;

            $('body, html').animate({
                scrollTop: $target
            }, 750, 'easeOutExpo');
            return false;
        });
    }

    /* ==================================================
   GoUp
================================================== */

    AK.goUp = function() {
        $('#goUp').on('click', function() {
            $target = $($(this).attr('href')).offset().top - 30;

            $('body, html').animate({
                scrollTop: $target
            }, 750, 'easeOutExpo');
            return false;
        });
    }


    /* ==================================================
	Scroll to Top
================================================== */

    AK.scrollToTop = function() {
        var windowWidth = $(window).width(),
            didScroll = false;

        var $arrow = $('#back-to-top');

        $arrow.click(function(e) {
            $('body,html').animate({
                scrollTop: "0"
            }, 750, 'easeOutExpo');
            e.preventDefault();
        })

        $(window).scroll(function() {
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                didScroll = false;

                if ($(window).scrollTop() > 1000) {
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

    AK.utils = function() {

        $('.item-thumbs').bind('touchstart', function() {
            $(".active").removeClass("active");
            $(this).addClass('active');
        });

        $('.image-wrap').bind('touchstart', function() {
            $(".active").removeClass("active");
            $(this).addClass('active');
        });

        $('#social ul li').bind('touchstart', function() {
            $(".active").removeClass("active");
            $(this).addClass('active');
        });

    }

    /* ==================================================
   Accordion
================================================== */

    AK.accordion = function() {
        var accordion_trigger = $('.accordion-heading.accordionize');

        accordion_trigger.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            } else {
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

    AK.toggle = function() {
        var accordion_trigger_toggle = $('.accordion-heading.togglize');

        accordion_trigger_toggle.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            } else {
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    }

    /* ==================================================
   Tooltip
================================================== */

    AK.toolTip = function() {
        $('a[data-toggle=tooltip]').tooltip();
    }


    /* ==================================================
	Init
================================================== */

    //AK.slider();
    AK.layerSlider();


    
    $('.arrowpart a').click(function() {
        $(this).parent().toggleClass('arrowpartActive');
        
//        if ($(this).parent().hasClass('arrowpartActive')) {
//            $(this).parent().removeClass('arrowpartActive');
//        } else {
//            $(this).parent().addClass('arrowpartActive');
//        }
    });



    $(document).ready(function() {
        Modernizr.load([{
            test: Modernizr.placeholder,
            nope: '_include/js/placeholder.js',
            complete: function() {
                if (!Modernizr.placeholder) {
                    Placeholders.init({
                        live: true,
                        hideOnFocus: false,
                        className: "yourClass",
                        textColor: "#999"
                    });
                }
            }
        }]);

        // Preload the page with jPreLoader
        $('body').jpreLoader({
            splashID: "#jSplash",
            showSplash: true,
            showPercentage: true,
            autoClose: true,
            splashFunction: function() {
                $('#circle').delay(250).animate({
                    'opacity': 1
                }, 500, 'linear');
            }
        });

        AK.nav();
        AK.mobileNav();
        AK.listenerMenu();
        AK.menu();
        AK.goSection();
        AK.goUp();
        AK.filter();
        AK.fancyBox();
        AK.contactForm();
        AK.tweetFeed();
        AK.scrollToTop();
        AK.utils();
        AK.accordion();
        AK.toggle();
        AK.toolTip();
    });

    $(window).resize(function() {
        AK.mobileNav();
    });

});