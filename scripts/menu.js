var items={
    regitem:document.getElementsByClassName("registration")[0],
    scheditem:document.getElementsByClassName("schedulde")[0],
    resitem:document.getElementsByClassName("results")[0],
    regback:document.getElementsByClassName("reg-item")[0],
    schedback:document.getElementsByClassName("sched-item")[0],
    resback:document.getElementsByClassName("res-item")[0],
    rounds:document.getElementById("player-num"),
};

function reg(items){
    hideElement(items.scheditem);
    hideElement(items.resitem);
    showElement(items.regitem);
    addColor(items.regback);
    removeColor(items.resback);
    removeColor(items.schedback);
}

function schedulde(items){
    showElement(items.scheditem);
    hideElement(items.resitem);
    hideElement(items.regitem);   
    removeColor(items.regback);
    removeColor(items.resback);
    addColor(items.schedback);
}

function results(items){
    hideElement(items.scheditem);
    showElement(items.resitem);
    hideElement(items.regitem);   
    removeColor(items.regback);
    addColor(items.resback);
    removeColor(items.schedback);
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
