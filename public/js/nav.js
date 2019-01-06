let button = $(".burger-button");
let navAnimation = $('.nav__animation_js');
let navButton = $('.nav__button');

function animationNav() {
	toggle(button.element[0], ['burger-button_is-opened']);
	for (let i = 0; i < navAnimation.element.length; i++) {
		if (!conteinOr(navAnimation.element[i], ['nav__animation_left', 'nav__animation_closed-left',
			'nav__animation_right', 'nav__animation_closed-right'])) {
			if (i % 2 == 0) {
				navAnimation.element[i].classList.add('nav__animation_left');
			} else {
				navAnimation.element[i].classList.add('nav__animation_right');
			}
		} else {
			if (conteinOr(navAnimation.element[i], ['nav__animation_left',
				'nav__animation_closed-left'])) {
				toggle(navAnimation.element[i], ['nav__animation_left',
					'nav__animation_closed-left'])
			} else if (conteinOr(navAnimation.element[i], ['nav__animation_right',
				'nav__animation_closed-right'])) {
				toggle(navAnimation.element[i], ['nav__animation_right',
					'nav__animation_closed-right']);
			}
		}
	}
};

$(window).on('load', function () {
	if (document.documentElement.clientWidth < 680) {
		$('.nav__animation_js').add('nav__animation');
	}
});

$(window).on('resize', function () {
	if (document.documentElement.clientWidth > 680) {
		$('.nav__animation_js').remove('nav__animation');
	} else if (document.documentElement.clientWidth <= 680) {
		$('.nav__animation_js').add('nav__animation');
	}
});

button.on('click', animationNav);
navButton.on('click', animationNav);