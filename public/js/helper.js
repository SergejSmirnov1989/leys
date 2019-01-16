function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return box.top;
};