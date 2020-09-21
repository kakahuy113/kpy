import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
import * as animation from "./animations/animation";
declare var Swiper: any;
declare var WOW: any;
declare var $: any;
// TOGGLE NAVBAR
const toggleNavBar = () => {
	const btn = document.querySelector(".navBarHamburger__mainWrapper");
	const body = document.querySelector(".App-Animation");
	const navBar = document.querySelector(".NavBar");
	const navBar__items = navBar.querySelectorAll(".nav-item");
	btn.addEventListener("click", (e) => {
		btn.classList.toggle("active");
		body.classList.toggle("animated");
		navBar.classList.toggle("animated");
	});
	// INIT TIMEDELAY
	navBar__items.forEach((item: any, index: any) => {
		item.setAttribute("style", `--delay-out: ${(index + 5) * 0.1}s`);
	});
};

// INIT MAIN SLIDER
const initMainSliderBanner = () => {
	let mainSlider = new Swiper(".main-slider-banner .swiper-container", {
		direction: "vertical",
		effect: "fade",
		slidesPerView: 1,
		loop: true,
		speed: 2000,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
			type: "bullets",
		},
		// on: {
		// 	slideChange: function () {
		// 		// RESET
		// 		Array.from(this.slides).forEach((item: any) => {
		// 			const titlesRemove = item.querySelectorAll(
		// 				".banner__text .title",
		// 			);
		// 			titlesRemove.forEach((title: any) => {
		// 				title.classList.remove("animated");
		// 			});
		// 		});
		// 		// GET ALL TITLE
		// 		const titles = this.slides[this.activeIndex].querySelectorAll(
		// 			".banner__text .title",
		// 		);
		// 		// ADD CLASS ANIMATED
		// 		titles.forEach((item: any) => {
		// 			item.classList.add("animated");
		// 		});
		// 		// RUN ANIMATE / TRUYỀN PARAM VÀO FUNCTION
		// 		setTimeout(() => {
		// 			animation.allAnimeMainSlider(
		// 				".banner__text .title.animated",
		// 			);
		// 		}, 1000);
		// 	},
		// },
	});
};

// INIT INDEX ABOUT SLIDER
const intitSliderAboutIndexPage = () => {
	let AboutIndexPage = new Swiper(".slider-index-about .swiper-container", {
		centeredSlides: true,
		centeredSlidesBounds: true,
		loop: true,
		speed: 2000,
		simulateTouch: false,
		autoplay: {
			delay: 2000,
		},
		slidesPerView: 1.3,
		spaceBetween: 10,
		breakpoints: {
			1025: {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			768: {
				spaceBetween: 25,
				slidesPerView: 1.8,
			},
		},
	});
};

// INIT INDEX SERVICE SLIDER
const initSliderServiceIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-service .swiper-container.first",
		{
			centeredSlides: true,
			slidesPerView: 1,
			simulateTouch: false,
			loop: true,
			speed: 1500,
			// autoplay: {
			// 	delay: 2000,
			// },
			loopedSlides: 3,
			navigation: {
				prevEl: ".index-service-prev-slider",
				nextEl: ".index-service-next-slider",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.4,
					spaceBetween: 10,
				},
				768: {
					spaceBetween: 0,
				},
				1025.98: {
					spaceBetween: -100,
				},
				1440: {
					spaceBetween: -135,
				},
			},
		},
	);
};
// INIT INDEX Showroom
const initSliderShowroom = () => {
	let SliderShowroom = new Swiper(
		".slider-project-showroom .swiper-container",
		{
			centeredSlides: true,
			slidesPerView: 3,
			// simulateTouch: false,
			loop: true,
			speed: 1500,
			spaceBetween: 25,
			// autoplay: {
			// 	delay: 2000,
			// },
			// loopedSlides: 3,
			navigation: {
				prevEl: ".index-service-prev-slider",
				nextEl: ".index-service-next-slider",
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1.4,
			// 		spaceBetween: 10,
			// 	},
			// 	768: {
			// 		spaceBetween: 0,
			// 	},
			// 	1025.98: {
			// 		// spaceBetween: -100,
			// 	},
			// 	1440: {
			// 		// spaceBetween: -135,
			// 	},
			// },
		},
	);
};

// INIT INDEX GARELLY SLIDER
const initSliderGarellyIndexPage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-index-gallery .swiper-container",
		{
			simulateTouch: false,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 1000,
			},
			spaceBetween: 28,
			navigation: {
				prevEl: ".index-gallery-prev-slider",
				nextEl: ".index-gallery-next-slider",
			},
			breakpoints: {
				600: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
			},
		},
	);
};

// INIT INDEX NEWS SLIDER
const initSliderNewsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-news .swiper-container", {
		centeredSlides: true,
		simulateTouch: false,
		loop: true,
		speed: 2000,
		// autoplay: {
		// 	delay: 1000,
		// },
		spaceBetween: 0,
		navigation: {
			prevEl: ".index-news-prev-slider",
			nextEl: ".index-news-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: -15,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: -15,
			},
		},
	});
};

// INIT INDEX CLIENTS SLIDER
const initSliderClientsIndexPage = () => {
	let NewsIndexPage = new Swiper(".slider-index-clients .swiper-container", {
		simulateTouch: false,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 1000,
		},
		spaceBetween: 10,
		navigation: {
			prevEl: ".index-clients-prev-slider",
			nextEl: ".index-clients-next-slider",
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
			1025: {
				spaceBetween: 20,
			},
			1440: {
				spaceBetween: 40,
				slidesPerView: 2,
			},
		},
	});
};

// INIT PROJECTS NEWS SLIDER
const initSliderProjectsIndexPage = () => {
	if (document.querySelector(".index-page")) {
		let ProjectsIndexPageThumb = new Swiper(
			".slider-index-projects-thumb .swiper-container",
			{
				slidesPerView: 3,
				simulateTouch: false,
				loop: true,
				grabCursor: true,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				speed: 1500,
				spaceBetween: 20,
				breakpoints: {
					1600: {
						slidesPerView: 3,
					},
					1025: {
						slidesPerView: 1,
					},
				},
			},
		);
		let ProjectsIndexPage = new Swiper(
			".slider-index-projects-review .swiper-container",
			{
				slidesPerView: 3,
				simulateTouch: false,
				centeredSlides: true,
				loop: true,
				speed: 2000,
				// autoplay: {
				// 	delay: 1000,
				// },
				spaceBetween: -66,
				navigation: {
					prevEl: ".index-projects-prev-slider",
					nextEl: ".index-projects-next-slider",
				},
				thumbs: {
					swiper: ProjectsIndexPageThumb,
				},
				breakpoints: {
					1600: {
						slidesPerView: 1.8,
					},
					575: {
				spaceBetween: -20,
						slidesPerView: 1.2,
					},
				},
		});
	}
};

// SET HEIGHT TEXT WRAPPER
const setHeightTextWrapper = () => {
	const height__items = document.querySelectorAll(".banner__text .text");
	const backgrounds = document.querySelectorAll(
		".banner__text .background-multiply",
	);
	height__items.forEach((item, index) => {
		backgrounds[index].setAttribute(
			"style",
			`height:${item.clientHeight}px`,
		);
	});
};

// INIT WOW JS
const initWowJs = () => {
	new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 100,
		mobile: true,
		live: true,
		callback: function (box: any) {},
		scrollContainer: null,
		resetAnimation: true,
	}).init();
};

const initSwiperRelateNews = () => {
	let relateNews = new Swiper(".relate-news .swiper-container", {
		speed: 2000,
		loop: true,
		// autoplay: {
		// 	delay: 1000,
		// },
		navigation: {
			prevEl: ".relate-news .relate-prev-slider",
			nextEl: ".relate-news .relate-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			600: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
	let hotel = new Swiper(".relate-hotel .swiper-container", {
		speed: 2000,
		loop: true,
		// autoplay: {
		// 	delay: 1000,
		// },
		navigation: {
			prevEl: ".relate-hotel .hotel-prev-slider",
			nextEl: ".relate-hotel .hotel-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			600: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
	let restaurant = new Swiper(".relate-restaurant .swiper-container", {
		speed: 2000,
		loop: true,
		// autoplay: {
		// 	delay: 1000,
		// },
		navigation: {
			prevEl: ".relate-restaurant .restaurant-prev-slider",
			nextEl: ".relate-restaurant .restaurant-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			600: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
	let lasvegas = new Swiper(".relate-lasvegas .swiper-container", {
		speed: 2000,
		loop: true,
		// autoplay: {
		// 	delay: 1000,
		// },
		navigation: {
			prevEl: ".relate-lasvegas .lasvegas-prev-slider",
			nextEl: ".relate-lasvegas .lasvegas-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			600: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
}
const initSwiperImage = () => {
	let ServicetIndexPage = new Swiper(
		".slider-image-gallery__wrapper .swiper-container",
		{
			centeredSlides: true,
			slidesPerView: 3,
			loop: true,
			speed: 1500,
			// autoplay: {
			// 	delay: 2000,
			// },
			// loopedSlides: 3,
			navigation: {
				prevEl: ".relate-prev-slider",
				nextEl: ".relate-next-slider",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				500: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 3,
				},
				// 1025.98: {
				// 	spaceBetween: -100,
				// },
				// 1440: {
				// 	spaceBetween: -135,
				// },
			},
		},
	);
};
const popupImage = () => {
	if(document.querySelector(".galleries-image")) {
		document.querySelectorAll(".item-image").forEach(item => {
		
			item.addEventListener("click" , (e:any) => {
				$.fancybox.open({
					src  : '#pop-up--image',
					type : 'inline',
					transitionEffect: "fade",
					touch : false,
					opts : {
						afterShow : function() {
							initSwiperImage();
						},
						beforeShow : function() {
							const desc = item.querySelector(".desc-image").innerHTML;
							const slide = item.querySelector(".d-none .wrapper").innerHTML;	
							const popup = document.querySelector("#pop-up--image")
							popup.querySelector(".desc .desc-content").innerHTML = `${desc}`;
							popup.querySelector(".swiper-wrapper").innerHTML = `${slide}`;
						}
					}
				});
			})
		})
	}
	let service = new Swiper("._with-service .swiper-container", {
		speed: 1500,
		loop: true,
		loopedSlides:6,
		slidesPerView:'auto',
		// autoplay: {
		// 	delay: 1000,
		// },
		centeredSlides: true,
		navigation: {
			prevEl: "._with-service .relate-prev-slider",
			nextEl: "._with-service .relate-next-slider",
		},
		breakpoints: {
			1025: {
				slidesPerView: 3.5,
				spaceBetween: 20
			},
			600: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
		},
	});
}

const swiperAboutProjects = () => {
	let ProjectsIndexPage = new Swiper(
		".slider-about-project .swiper-container",
		{
			slidesPerView: 1,
			simulateTouch: false,
			loop: true,
			speed: 2000,
			// autoplay: {
			// 	delay: 1000,
			// },
			spaceBetween: 0,
			breakpoints: {
				1600: {
					slidesPerView: 1.4,
					spaceBetween: -55,
				},
				1025: {
					slidesPerView: 1.3,
					spaceBetween: -85,
				},
			},
		},
	);
}
const initPartnerSlider=()=>{
	const partnerIndexPage = new Swiper(
		".slider-index-partner .swiper-container",
		{
			slidesPerView: 5,
			loop: true,
			speed: 1500,
			spaceBetween: 25,
			autoplay: {
				delay:1000,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				575: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1440: {
					slidesPerView: 5,
				},
			},
		},
	);
}

const initSliderProject = ()=>{
	let ServicetIndexPage = new Swiper(
		".slider-service>.swiper-container",
		{
			loop: true,
			centeredSlides: true,
			slidesPerView: 3,
			speed: 2000,
			navigation: {
				prevEl: ".list-button-relate-news .relate-prev-slider",
				nextEl: ".list-button-relate-news .relate-next-slider",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				500: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 3,
				},
				1025.98: {
					spaceBetween: -100,
				},
				1440: {
					spaceBetween: -105,
				},
			},
		});
}
//swiper in swiper
const swiperInSwiper = () => {
	if(document.querySelector(".service")) {
		let swiper = new Swiper(".slider-service>.swiper-container .swiper-slide-active .swiper-container", {
			loop: true,
			slidesPerView: 1,
			speed: 2000,
			navigation: {
				prevEl: "._with-project .relate-prev-slider",
				nextEl: "._with-project .relate-next-slider",
			},
			breakpoints: {
				768: {
				},
				1025: {
				},
				1440: {
				},
			},
		})
	document.querySelector(".list-button-relate-news .relate-prev-slider").addEventListener("click" , () => {
		swiper.destroy(true, true)
		swiper = new Swiper(".slider-service>.swiper-container .swiper-slide-active .swiper-container", {
			loop: true,
			slidesPerView: 1,
			speed: 2000,
			navigation: {
				prevEl: "._with-project .relate-prev-slider",
				nextEl: "._with-project .relate-next-slider",
			},
			breakpoints: {
				768: {
				},
				1025: {
				},
				1440: {
				},
			},
		});
	})
	document.querySelector(".list-button-relate-news .relate-next-slider").addEventListener('click', () => {
		swiper.destroy(true, true)
		swiper = new Swiper(".slider-service>.swiper-container .swiper-slide-active .swiper-container", {
			loop: true,
			slidesPerView: 1,
			speed: 2000,
			navigation: {
				prevEl: "._with-project .relate-prev-slider",
				nextEl: "._with-project .relate-next-slider",
			},
			breakpoints: {
				768: {
				},
				1025: {
				},
				1440: {
				},
			},
		});
	})
	}
}

const ajaxContactForm = ()=>{
	$('button.btn.btn-view-more').on('click', function(e) {
        e.preventDefault();
        const _thisBtn = $(this);
        const url = _thisBtn.attr('data-url');
        const formData = new FormData();
        $('.index-contact-form-wrapper form .form-group input').each(function() {
            const name = $(this).attr('name');
            const value = $(this).val();
            formData.append(name, value);
        });
        if ($('.index-contact-form-wrapper form').valid() === true) {
            $.ajax({
                url: url,
                type: 'post',
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function() {
                    _thisBtn.attr('disabled', 'disabled');
                },
                success: function(res) {
                    alert(`${res.Message}`);
                    window.location.reload();
                    _thisBtn.removeAttr('disabled');
                },
            });
        }
    });
}

const activeMenuTabGallery = () => {
	if(document.querySelector(".gallery--tab")) {
		document.querySelectorAll(".gallery--tab .item").forEach(item => {
			const href = item.querySelector("a").getAttribute("href")
			const url = window.location.href;
			if(url.includes(href)) {
				item.classList.add("active");
			}
		})
	}
}

const activeMenuTab = () => {
	if(document.querySelector(".active-tab")) {
		document.querySelectorAll(".active-tab a").forEach(item => {
			const url = item.getAttribute("href");
			const href = window.location.href;
			if(href.includes(url)) {
				item.classList.add("active")
			}
		})
	}
}

const swiperAboutProject = () => {
	
	let ProjectsIndexPage = new Swiper(
		".about-hot-project__wrapper .swiper-container",
		{
			slidesPerView: 3,
			simulateTouch: false,
			centeredSlides: true,
			loop: true,
			speed: 2000,
			// autoplay: {
			// 	delay: 1000,
			// },
			navigation: {
				prevEl: ".index-projects-prev-slider",
				nextEl: ".index-projects-next-slider",
			},
			breakpoints: {
				1600: {
					// slidesPerView: 1.8,
					spaceBetween: -70
				},
				1025: {
					// slidesPerView: 1.3,
				},
			},
	});
}

document.addEventListener("DOMContentLoaded", async () => {
	// GET SVG
	getSVGs(".svg");
	// LOADING
	Loading();
	// INIT WOW JS
	initWowJs();
	// TOGGLE NAVBAR
	toggleNavBar();
	// INIT MAIN SLIDER
	initMainSliderBanner();
	// SET HEIGHT TEXT WRAPPER
	setHeightTextWrapper();
	// INIT INDEX ABOUT SLIDER
	intitSliderAboutIndexPage();
	// INIT INDEX SERVICE SLIDER
	initSliderServiceIndexPage();
	// INIT INDEX GARELLY SLIDER
	initSliderGarellyIndexPage();
	// INIT INDEX NEWS SLIDER
	initSliderNewsIndexPage();
	// INIT INDEX CLIENTS SLIDER
	initSliderClientsIndexPage();
	// INIT PROJECTS NEWS SLIDER
	initSliderProjectsIndexPage();
	// INIT RELATE NEWS
	initSwiperRelateNews();
	initSliderProject();
	///
	initPartnerSlider();
	//
	initSliderShowroom();
	//pop-up image
	popupImage();
	//document popup
	// popupDocument();
	//SWIPER ABOUT PROJECT
	swiperAboutProjects();
	// ajaxContactForm
	ajaxContactForm();
	//swiper in swiper
	swiperInSwiper();
	//active menu gallery
	activeMenuTabGallery();
	//active tab
	activeMenuTab();
	//about project hot sưiper
	swiperAboutProject();
});
