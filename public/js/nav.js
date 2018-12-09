$(window).on('load', function() {
	if (document.documentElement.clientWidth < 680) {
		$('.nav__animation_js').add('nav__animation');
	}
});

$(window).on('resize', function() {
	if (document.documentElement.clientWidth > 680) {
		$('.nav__animation_js').remove('nav__animation');
	} else if (document.documentElement.clientWidth <= 680) {
		$('.nav__animation_js').add('nav__animation');
	}
});

let button = $(".burger-button");
let navAnimation = $('.nav__animation_js');

button.on('click', function () {
	$(this).toggly('burger-button_is-opened');
});

button.on('click', function () {
	for (let i = 0; i < navAnimation.element.length; i++) {
		if (!conteinOr(navAnimation.element[i], ['nav__animation_left', 'nav__animation_closed-left',
										'nav__animation_right', 'nav__animation_closed-right'])) {
			if (i%2 == 0) {
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
});

function toggle (elementDom, className) {
	for (let i = 0; i < className.length; i++) {
		elementDom.classList.toggle(className[i])
	}
}
function conteinOr (elementDom, className) {
	let flag = false;
	for (let i = 0; i < className.length; i++) {
		if (elementDom.classList.contains(className[i])) {
			flag = true;
		}
	}
	return flag;
}