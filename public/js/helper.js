function toggle(elementDom, className) {
	for (let i = 0; i < className.length; i++) {
		elementDom.classList.toggle(className[i])
	}
};

function conteinOr(elementDom, className) {
	let flag = false;
	for (let i = 0; i < className.length; i++) {
		if (elementDom.classList.contains(className[i])) {
			flag = true;
		}
	}
	return flag;
};

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return box.top;
};