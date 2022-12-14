(function ($, root, undefined) {
	$(function () {
		'use strict';

		// mobile nav
		var $hamburger = $(".hamburger");
		$( "#mobile-menu-button" ).click(function() {
			$hamburger.toggleClass("is-active");
			$('#mobile-menu').toggleClass('mobile-menu-closed mobile-menu-open');
			$('#menu-bar').addClass('header-fixed');
			$('body').toggleClass("menu-open", "menu-closed");
		});
		$('#mobile-menu a').on('click', function(){
			$hamburger.toggleClass("is-active");
			$('#mobile-menu').toggleClass('mobile-menu-closed mobile-menu-open');
		});

		// Venn Diagram functionality
		$(document).ready(function() {
			$('#content1').css('display', 'block');
			$('.venn-diagram .button').on('click', function(e){
				var target = $(this).attr('data-key');
				$("#"+target).show().siblings("div").hide();
			});
			$('.venn-diagram .diagram-circle').on('click', function(e){
				var target = $(this).attr('data-key');
				$("#"+target).show().siblings("div").hide();
			});
			$('.venn-diagram .diagram-center').on('click', function(e){
				var target = $(this).attr('data-key');
				$("#"+target).show().siblings("div").hide();
			});
			$(".button-1").hover(function() {
				$(".diagram-circle-1").toggleClass("hovered");
			});
			$(".button-2").hover(function() {
				$(".diagram-circle-2").toggleClass("hovered");
			});
			$(".button-3").hover(function() {
				$(".diagram-circle-3").toggleClass("hovered");
			});
		});

		// Plugins
		gsap.registerPlugin(ScrollTrigger);

		// Site Introduction Animations
		// Slide leaves in from the left
		gsap.to("#site-introduction-leaves", {
			scrollTrigger: {
				trigger: ".hero",
				start: "top top",
				end: "+=800",
				scrub: true,
			},
			left: -71,
			duration: 1,
			ease: "sine.in",
		});
		// Move left column up, right column down, meet in the middle
		gsap.to("#site-introduction-left", {
			scrollTrigger: {
				trigger: ".hero",
				start: "top	top",
				end: "+=400",
				scrub: true,
			},
			marginTop: 0,
			duration: 1
		});
		gsap.to("#site-introduction-right", {
			scrollTrigger: {
				trigger: ".hero",
				start: "top top",
				end: "+=400",
				scrub: true,
			},
			marginTop: 0,
			duration: 1
		});

		// Two Column Overlay Animation
		// Slide content from left to right
		gsap.to("#two-column-overlay-content", {
			scrollTrigger: {
				trigger: ".two-column-overlay",
				start: "top bottom",
				end: "+=446",
				scrub: true,
			},
			right: -103,
			duration: 1,
			ease: "sine.in",
		});

		// Two Column Text Animation
		// Move leaves down the page
		gsap.to("#two-column-text-leaves", {
			scrollTrigger: {
				trigger: ".sub-hero",
				start: "top top",
				end: "+=800",
				scrub: true,
			},
			bottom: -269,
			duration: 1
		});

		// Apply Now Animation
		gsap.to("#apply-now-image-wrap", {
			scrollTrigger: {
				trigger: ".apply-now",
				start: "top bottom",
				end: "+=446",
				scrub: true,
			},
			left: 0,
			duration: 1,
			ease: "sine.in",
		});

		// Program Elements Animation
		// Move leaves down the page
		gsap.to("#program-elements-leaves", {
			scrollTrigger: {
				trigger: ".program-elements",
				start: "center bottom",
				end: "+=1527",
				scrub: true,
			},
			bottom: -100,
			duration: 1
		});

		// Program Elements Animation
		// Move leaves down the page
		gsap.to("#who-you-are-leaves", {
			scrollTrigger: {
				trigger: ".another-hero",
				start: "top top",
				end: "+=1500",
				scrub: true,
			},
			bottom: -120,
			duration: 1
		});

	});
})(jQuery, this);

// faqs accordion
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		for (let j = 0; j < acc.length; j++) {
		acc[j].classList.remove("active");
			if(j!=i){
				acc[j].nextElementSibling.style.maxHeight = null;
			}
		}
		this.classList.add("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
