class JQuery {
	constructor (selector) {
		if (typeof(selector) === 'string') {
			this.element = document.querySelectorAll(selector);
		} else {
			this.element = [selector];
		}
	}
	on(event, listener) {
		for (let i = 0; i < this.element.length; i++) {
			this.element[i].addEventListener(event, listener);
		}
		return this;
	}
	add (className) {
		for (let i = 0; i < this.element.length; i++) {
			this.element[i].classList.add(className);
		}
		return this;
	}
	remove (className) {
		for (let i = 0; i < this.element.length; i++) {
			this.element[i].classList.remove(className);
		}
		return this;
	}
	toggly (className) {
		for (let i = 0; i < this.element.length; i++) {
			this.element[i].classList.toggle(className);
		}
		return this;
	}
}
function $(selector) {
	return new JQuery(selector);
}