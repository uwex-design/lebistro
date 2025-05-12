// SWIPERS
var swiper = new Swiper(".swiper-galeria", {
	slidesPerView: "auto",
	freeMode: true,
	loop: true,
	spaceBetween: 30,
});

var swiper = new Swiper(".swiper-depoimentos", {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Mudança de cor do nav ao rolar
gsap.fromTo(
	".nav_component",
	{
		backgroundColor: "transparent",
	},
	{
		scrollTrigger: {
			trigger: "body",
			start: "10% top",
			toggleActions: "play reverse play reverse",
			scrub: false,
		},
		backgroundColor: "#fbf5dc",
	}
);

// Animações GSAP
document.addEventListener("DOMContentLoaded", function () {
	gsap.from(".nav_container", {
		opacity: 0,
		y: 50,
		duration: 1,
		delay: 0.5,
		ease: "power2.out",
	});

	gsap.from(".section_hero", {
		opacity: 0,
		duration: 1,
		delay: 1,
		ease: "power2.out",
	});

	let heroTitle = SplitText.create(".hero-title", { type: "words, chars" });
	gsap.from(heroTitle.chars, {
		opacity: 0,
		y: 50,
		duration: 0.8,
		stagger: 0.05,
		delay: 1.5,
		ease: "power2.out",
	});
});
