/**
 * Set speeds of animations based on size of viewport
 */
function setSpeed() {
	var speed; 
	
	if ($(window).width() < '600px') {
		speed = 1000;
	} else if ($(window).width() < '1000px') {
		speed = 1500;
	} else {
		speed = 2000;
	}
	
	return speed;
}


/**
 *	Handles and runs animations
 */
function runIntroAnimation() {
	"use strict";
	
	// Define variables from CSS file
	var speed = setSpeed();
	// var speed = 100;
	var introTitle = $("h1#intro_title");
	var introSection = $("section#intro");
	var body = $("body");
	var navBar = $("nav");
	var footerBar = $(".footer_line");
	var footerText = $("#footer_scroll");
	var socialIcons = $(".social_media_icons");
	var email = $(".email");
	var showImage = $(".show_image");
	
  introTitle
		.hide(0)
		.delay(100)
		.fadeIn(1000)
		.css({
			cursor: 'pointer'
		})
		.delay(100)
		.click(function() {
			$(this)
				.queue(function() {
					$(this)
						.delay(200)
						.animate({fontSize: '3.5em'}, speed / 2).dequeue();
					footerText
						.hide(0);
				})
				.queue(function() {
					introSection
//						.animate({top: '7.5%'}, speed, "linear")
						.animate({left: '5%'}, speed, "linear");
					setTimeout(function() {
						navBar
							.hide(0)
							.fadeIn(speed).dequeue();
						email
							.hide(0)
							.fadeIn(speed).dequeue();
						socialIcons
							.hide(0)
							.fadeIn(speed).dequeue();
						footerText
							.hide(0)
							.fadeIn(speed)
							.text("Scroll ↓")
							.dequeue();
						footerBar
							.fadeIn(speed).dequeue();
							setTimeout( function() {
								body
									.css({
										overflow: 'visible'
									});
								setTimeout( function() {
									showImage
										.css({
											display: 'block',
											transition: '0.5s ease'
										});
								}, speed / 2);
							}, speed);
						}, speed);
				});
		});
}


runIntroAnimation();