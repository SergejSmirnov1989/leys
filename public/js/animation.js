function animation(options) {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {

		let timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) timeFraction = 1;


		let progress = options.timingFunction(timeFraction);

		options.draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

function pow(timeFraction) {
	return Math.pow(timeFraction, 2);
}

function powEaseIn(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}