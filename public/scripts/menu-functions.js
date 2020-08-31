function reg(){   
    showElement(items.regitem);
    hideElement(items.scheditem);
    addColor(items.regback);
    removeColor(items.schedback);
}

function schedulde(){
    showElement(items.scheditem);
    hideElement(items.regitem);
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

function lock(){
    $(items.add1).hide();
    $(items.close).hide();
    visibleElement(items.confirm);
    visibleElement(items.cancel2);
}

function cancel2(){    
    reOpt();
    $(items.selectTeam).hide();   
    $(items.confirm).hide();   
    $(items.cancel2).hide();   
    visibleElement(items.add1);
    visibleElement(items.close);
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

function reOpt(){
    var opt=items.champTypeList.length;
    var round=items.roundNum.length;
    if(opt>1){
        for(let i=1;i<=opt;i++){
            items.champTypeList.remove(1);
        }
    }
    if(round>1){
        for(let j=1;j<=round;j++){
            items.roundNum.remove(1);
        }
    }
}

function visibleElement(myClass){
    $(myClass).css('display','inline-block');
}


function logarithm(x,y){
    return Math.log(y) / Math.log(x);
}

function toTheEnd(reference,location){
    $(reference).clone().appendTo(location);
    $(reference).remove();
}