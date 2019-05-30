function reg(items){
    $(items.scheditem).slideToggle();
    $(items.regitem).slideToggle();
    addColor(items.regback);
    removeColor(items.schedback);
}

function schedulde(items){
    $(items.scheditem).slideToggle();
    $(items.regitem).slideToggle();
    removeColor(items.regback);
    addColor(items.schedback);
}

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
