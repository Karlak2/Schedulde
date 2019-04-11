function hideElement(thing){
    addClass (thing, 'hidden');
}

function showElement(thing){
    removeClass (thing, 'hidden');
}

function addColor(thing){
    addClass (thing, 'selected');
}

function removeColor(thing){
    removeClass (thing, 'selected');
}



function addClass (element, classToAdd) {
	var classList = element.className.split(' ');
	var index = classList.indexOf(classToAdd);
	if (index === -1) {
		classList.push(classToAdd)
	}
	element.className = classList.join(' ');
}

function removeClass (element, classToRemove) {
	var classList = element.className.split(' ');
	var index = classList.indexOf(classToRemove);
	if (index > -1) {
		classList.splice(index, 1);
	}
    element.className = classList.join(' ');
}

window.utils = {
    addClass:addClass(),
    removeClass:removeClass(),
    addColor:addColor(),
    removeColor:removeColor(),
    showElement:showElement(),
    hideElement:hideElement()
};