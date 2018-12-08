let button = document.querySelector(".burger-button");
let navAnimation = document.querySelectorAll(".nav__animation");
window.onload = function () {
	console.log(document.documentElement.clientWidth);
	if (document.documentElement.clientWidth > 680) {
		for (let i = 0; i < navAnimation.length; i++) {
			navAnimation[i].classList.remove('nav__animation');
		}
	}
};


window.addEventListener('resize', function () {
	if (document.documentElement.clientWidth > 680) {
		for (let i = 0; i < navAnimation.length; i++) {
			navAnimation[i].classList.remove('nav__animation');
		}
	} else if (document.documentElement.clientWidth <= 680) {
		for (let i = 0; i < navAnimation.length; i++) {
			navAnimation[i].classList.add('nav__animation');
		}
	}
});

button.addEventListener('click', function () {
	button.classList.toggle('burger-button_is-opened');
	for (let i=0; i < navAnimation.length; i++) {
		if (navAnimation[i].classList.contains('nav__animation_left')
			|| navAnimation[i].classList.contains('nav__animation_closed-left')) {
				navAnimation[i].classList.toggle('nav__animation_left');
				navAnimation[i].classList.toggle('nav__animation_closed-left');
		} else if (navAnimation[i].classList.contains('nav__animation_right')
			|| navAnimation[i].classList.contains('nav__animation_closed-right')) {
				navAnimation[i].classList.toggle('nav__animation_right');
				navAnimation[i].classList.toggle('nav__animation_closed-right');
		}
	}
});