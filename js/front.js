//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    navigation: {
        nextEl: ".promo-swiper-button-next",
        prevEl: ".promo-swiper-button-prev",
    },
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});

//Параметры для типового слайдера на главной
let indexSliderParams = {
	slidesPerView: 4.2,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 30,
    slidesOffsetBefore: 245,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	// enabled: false,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	navigation: {},
	pagination: {},
	breakpoints: {
		300: {
          slidesPerView: 1.5,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		450: {
          slidesPerView: 2,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		576: {
			slidesPerView: 2.3,
			spaceBetween: 15,
			slidesOffsetBefore: 124
		},
		768: {
		  slidesPerView: 3.1,
		  spaceBetween: 15,
		  slidesOffsetBefore: 43
		},
		800: {
		  slidesPerView: 3.1,
		  spaceBetween: 15,
		  slidesOffsetBefore: 139
		},
		992: {
		  slidesPerView: 3.6,
		  spaceBetween: 15,
		  slidesOffsetBefore: 73
		},
		1100: {
		  slidesPerView: 3.6,
		  spaceBetween: 15,
		  slidesOffsetBefore: 123
		},
		1200: {
          slidesPerView: 3.7,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 150
		},
		1400: {
		  slidesPerView: 4,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 400
		},
		1700: {
		  slidesPerView: 4,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 600
		},
		1921: {
		  slidesPerView: 4.2,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 245
		}
	}
};


document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth;
	if (width < 1400){
		new Swiper(".features-swiper", indexSliderParams);
	}
	let collapseTitles = document.querySelectorAll(".params-table-wrapper .collapse");
	if (width < 992) {
		collapseTitles.forEach(function (title, index) {
			if (index > 0) {
				new bootstrap.Collapse(title, {
					hide: true,
				});
			}
		});

	}
  })
// new Swiper(".features-swiper", indexSliderParams);



	//Открытие-закрытие мобильного меню
	let body = document.body;
	let bodyFader = body.querySelector(".fader");
	let hiddenMenu = document.querySelector(".top-menu-wrapper");
	let openMenuButton = document.querySelector(".navbar-toggler");
	let closeMenuButton = hiddenMenu.querySelector(".close-menu-button");
	let headerMenuItems = hiddenMenu.querySelectorAll(".navbar > ul > li > a");
	let logoWrapper = document.querySelector(".logo-wrapper");

	let showMenuHandler = function () {
		hiddenMenu.classList.toggle("hidden");
		logoWrapper.classList.toggle("hidden");
		body.classList.toggle("fixed");
	};

	bodyFader.addEventListener("click", function () {
		showMenuHandler();
		if (!openMenuButton.classList.contains("show")) {
			openMenuButton.classList.add("show");
		}
	});

	openMenuButton.addEventListener("click", function () {
		showMenuHandler();
		if (openMenuButton.classList.contains("show")) {
			openMenuButton.classList.remove("show");
		}
	});

	closeMenuButton.addEventListener("click", function () {
		showMenuHandler();
		if (!openMenuButton.classList.contains("show")) {
			openMenuButton.classList.add("show");
		}
	});

	headerMenuItems.forEach(function (headerMenuItem) {
		headerMenuItem.addEventListener("click", function () {
			if (!headerMenuItem.classList.contains("dropdown-toggle") && !hiddenMenu.classList.contains("hidden")) {
				showMenuHandler();
				if (!openMenuButton.classList.contains("show")) {
					openMenuButton.classList.add("show");
				}
			}
		});
	});

//Кнопка прокрутки наверх
var scrollButton = document.getElementById("top-button");
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollButton.classList.add("show");
    }
    if (scrolled < coords / 2) {
        scrollButton.classList.remove("show");
    }
}
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", trackScroll);
scrollButton.addEventListener("click", backToTop);
