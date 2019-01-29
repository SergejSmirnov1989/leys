let button = document.querySelector('.burger-button');
let navAnimation = document.querySelectorAll('.js-nav__animation');
let closeNav = document.querySelector('.nav__button');
let nav = document.querySelector('.nav');

function drawClose(progress) {
	for (let i = 0; i < navAnimation.length; i++) {
		let elem = navAnimation[i];
		let draw = progress * (-20) + '%';
		if (i % 2 === 0) {
			elem.style.right = draw;
		} else {
			elem.style.left = draw;
		}
		elem.style.opacity = -progress + 1;
		if (progress === 1) {
			elem.style.display = 'none';
		}
	}
}

function drawOpen(progress) {
	for (let i = 0; i < navAnimation.length; i++) {
		let draw = progress * 20 + (-20) + '%';
		let elem = navAnimation[i];
		elem.style.display = 'block';
		if (i % 2 === 0) {
			elem.style.right = draw;
		} else {
			elem.style.left = draw;
		}
		elem.style.opacity = progress;
	}
}

function setAnimationOption(flag) {
	if (flag) {
		return {
			duration: 500,
			timingFunction: powEaseIn(pow),
			draw: drawClose
		}
	}
	return {
		duration: 500,
		timingFunction: powEaseIn(pow),
		draw: drawOpen

	}
}

let flag = false;
let lastScrollTop = window.pageYOffset;

button.addEventListener('click', function () {
	animation(setAnimationOption(flag));
	flag = !flag;
});
button.addEventListener('click', function () {
	button.classList.toggle('burger-button_is-opened');
});

closeNav.addEventListener('click', function () {
	animation(setAnimationOption(true));
	button.classList.remove('burger-button_is-opened');
	flag = false;
});

window.addEventListener('resize', function () {
	if (document.documentElement.clientWidth > 680) {
		for (let i = 0; i < navAnimation.length; i++) {
			navAnimation[i].style = ''
		}
		button.classList.remove('burger-button_is-opened');
		flag = false;
	}
});

window.addEventListener('scroll', function (e) {
	let scrolled = window.pageYOffset;
	if (document.documentElement.clientWidth > 680) {
		return;
	}
	if (scrolled < 80) {
		nav.classList.remove('nav_hidden-top');
		return
	}
	if (scrolled > lastScrollTop) {
		if (flag) {
			animation(setAnimationOption(flag));
			button.classList.remove('burger-button_is-opened');
			flag = false;
		}
		nav.classList.add('nav_hidden-top');

	} else {
		nav.classList.remove('nav_hidden-top');
	}
	lastScrollTop = scrolled;
});