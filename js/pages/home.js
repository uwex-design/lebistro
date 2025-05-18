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

// Modal Antonina
const modalTrigger = document.querySelector('[data-modal="antonina"]');
const modalAntonina = document.querySelector(".modal_img-antonina");
const modalWrapper = modalAntonina.querySelector(".modal_wrapper");

modalTrigger.addEventListener("click", () => {
	modalAntonina.classList.add("open-modal");
	modalAntonina.style.opacity = "1"; // Resetar opacidade ao abrir
	modalAntonina.style.display = "block"; // Garantir que esteja visível

	gsap.to(modalAntonina, {
		backdropFilter: "blur(20px)",
		duration: 1,
		ease: "sine.out",
	});

	gsap.from(modalWrapper, {
		scale: 0,
		rotation: 5,
		duration: 1,
		ease: "sine.out(1.5)",
	});
});

// Fechar modal ao clicar fora ou no botão fechar
modalAntonina.addEventListener("click", (e) => {
	if (e.target === modalAntonina) {
		gsap.to(modalAntonina, {
			backdropFilter: "blur(0px)",
			opacity: 0,
			duration: 1,
			onComplete: () => {
				modalAntonina.classList.remove("open-modal");
				modalAntonina.style.display = "none";
			},
		});
	}
});

const closeModalBtn = document.querySelector(".close-modal");
closeModalBtn.addEventListener("click", () => {
	gsap.to(modalAntonina, {
		backdropFilter: "blur(0px)",
		opacity: 0,
		duration: 1,
		ease: "sine.out",
		onComplete: () => {
			modalAntonina.classList.remove("open-modal");
			modalAntonina.style.display = "none";
		},
	});
});

// Animação de texto na seção Sobre
gsap.registerPlugin(SplitText);

const sobreText = document.querySelector(".sobre-text");
const textImageWrappers = document.querySelectorAll(".text-image_wrapper");

if (sobreText) {
	// Divide o texto em palavras e caracteres
	let split = SplitText.create(sobreText, { type: "words, chars" });

	// Configura a animação com ScrollTrigger
	gsap.from(split.chars, {
		scrollTrigger: {
			trigger: sobreText,
			start: "top 80%",
			end: "top 25%",
			scrub: true, // Faz a animação acompanhar o scroll
			toggleActions: "play none none reverse",
		},
		duration: 1,
		x: 10,
		autoAlpha: 0,
		stagger: 0.05,
		ease: "power2.out",
	});
}

textImageWrappers.forEach((wrapper) => {
	gsap.from(wrapper, {
		scrollTrigger: {
			trigger: wrapper,
			start: "top 80%",
			end: "top 20%",
			scrub: true,
			toggleActions: "play none none reverse",
		},
		duration: 1,
		y: 50,
		autoAlpha: 0,
		ease: "power2.out",
	});
});
