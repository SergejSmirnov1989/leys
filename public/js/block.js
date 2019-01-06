function putAside(selector, value, aside) {
	let elem = $(selector).element[0];
	let away = aside || 'left';
	if (away == 'left') {
		elem.style.left = value;
	} else if (away == 'right') {
		elem.style.right = value;
	} else {
		console.log('I`m not the one you want!');
	}
};

if (document.documentElement.clientWidth > 1400) {
	$('.header').add('animation-left');
	$('.gallery').add('animation-right');
	putAside('.about__progect', '55%', 'right');
	putAside('.about__img', '55%', 'left');
	putAside('.summer__img', '55%', 'right');
	putAside('.summer__map', '55%', 'left');

	window.addEventListener("scroll", function (e) {
		let windowHeight = document.documentElement.clientHeight - 200;
		let about = getCoords($('.about').element[0]);
		let summer = getCoords($('.summer').element[0]);
		if (windowHeight >= about) {
			$('.about__progect').add('animation-right');
			$('.about__img').add('animation-left');
		}
		if (windowHeight >= summer) {
			$('.summer__img').add('animation-right');
			$('.summer__map').add('animation-left');
		}
	})
};